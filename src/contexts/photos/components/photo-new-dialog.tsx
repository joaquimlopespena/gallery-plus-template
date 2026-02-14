
import type React from "react";
import {
    Dialog,
    DialogBody,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "../../../components/dialog";
import Button from "../../../components/button";
import InputText from "../../../components/input-text";
import Alert from "../../../components/alert";
import { InputSingleFile } from "../../../components/input-single-file";
import ImagePreview from "../../../components/image-preview";
import Text from "../../../components/text";
import Skeleton from "../../../components/skeleton";
import { useForm } from "react-hook-form";
import { useMemo, useEffect, useState, useTransition } from "react";
import useAlbums from "../../albums/hooks/use-albums";
import { photoNewFormSchema, type PhotoNewForm } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import usePhoto from "../hooks/use-photo";

interface PhotoNewDialogProps {
    trigger: React.ReactNode;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
    const [modalOpem, setModalOpen] = useState(false);
    const { createPhoto } = usePhoto();
    const [isCreatingPhoto, setIsCreatingPhoto] = useTransition();

    const { albums, isLoadingAlbums } = useAlbums();
    const form = useForm<PhotoNewForm>({
        resolver: zodResolver(photoNewFormSchema),
    });
    const albumsIds = form.watch("albumsIds");

    useEffect(() => {
        if (!modalOpem) {
            form.reset();
        }
    }, [modalOpem, form]);

    function handleToggleAlbum(albumId: string) {
        const albumsIds = form.getValues("albumsIds");
        const albumsSet = new Set(albumsIds || []);

        if (albumsSet.has(albumId)) {
            albumsSet.delete(albumId);
        } else {
            albumsSet.add(albumId);
        }

        form.setValue("albumsIds", Array.from(albumsSet));
    }

    function handleSubmit(payload: PhotoNewForm) {
        setIsCreatingPhoto(async () => {
            await createPhoto(payload);
            setModalOpen(false);
        });
    }
    const file = form.watch("file");
    const fileSrc = file?.[0] ? URL.createObjectURL(file[0]) : undefined;

    return (
        <Dialog open={modalOpem} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Adicionar foto</DialogHeader>

                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <DialogBody className="flex flex-col gap-5">
                        <InputText
                            {...form.register("title")}
                            error={form.formState.errors.title?.message}
                            placeholder="Adicione um título" maxLength={255}
                        />

                        <Alert>
                            Tamanho máximo: 50MB
                            <br />
                            Você pode selecionar arquivo em PNG, JPG ou JPEG
                        </Alert>

                        <InputSingleFile
                            form={form}
                            allowedExtensions={["png", "jpg", "jpeg"]}
                            maxFileSizeInMB={50}
                            replaceBy={<ImagePreview src={fileSrc} alt="" className="w-full h-56" />}
                            {...form.register("file")}
                            error={form.formState.errors.file?.message}
                        />

                        <div className="space-y-3">
                            <Text variant="label-small">Selecionar álbuns</Text>

                            <div className="flex flex-wrap gap-3">
                                {!isLoadingAlbums &&
                                    albums.length > 0 &&
                                    albums.map((album) => (
                                        <Button
                                            key={album.id}
                                            size="sm"
                                            className="truncate"
                                            variant={
                                                albumsIds?.includes(album.id) ? "primary" : "ghost"
                                            }
                                            onClick={() => handleToggleAlbum(album.id)}
                                        >
                                            {album.title}
                                        </Button>
                                    ))}

                                {isLoadingAlbums &&
                                    Array.from({ length: 5 }).map((_, index) => (
                                        <Skeleton
                                            key={`album-loading-${index}`}
                                            className="w-20 h-7"
                                        />
                                    ))}
                            </div>
                        </div>
                    </DialogBody>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="secondary" disabled={isCreatingPhoto}>
                                Cancelar
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            disabled={isCreatingPhoto}
                            handling={isCreatingPhoto}
                        >
                            {isCreatingPhoto ? "Adicionando" : "Adicionar"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}