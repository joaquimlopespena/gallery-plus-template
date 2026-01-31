import Badge from "../../../components/badge";
import { buttonTextVariants, buttonVariants } from "../../../components/button";
import ImagePreview from "../../../components/image-preview";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Photo } from "../models/photo";
import { Link } from "react-router";

interface PhotoWidgetProps {
    photo: Photo;
    loading?: boolean;
}

export default function PhotoWidget({ photo, loading }: PhotoWidgetProps) {
    return (
        <div className="flex flex-col gap-4">
            {!loading ? (
                <ImagePreview src={photo.imageId} alt={photo.title} imageClassName="w-43.5 h-43.5 rounded-lg" />
            ) :
                <Skeleton rounded="lg" className="w-43.5 h-43.5 rounded-lg" />
            }
            <div className="flex flex-col gap-2">
                {!loading ? 
                    (
                        <Text variant="paragraph-large" className="truncate">{photo.title}</Text>
                    ) 
                    : 
                    (
                        <Skeleton rounded="sm" className="w-full h-6" />
                    )
                }

                <div className="flex gap-1 min-h-5.5">
                    {!loading ? (
                        <>
                            {photo.albums.slice(0, 1).map(album => (
                                <Badge key={album.id} variant="ghost" size="xs">
                                    {album.title}
                                </Badge>
                            ))}
                            {photo.albums.length > 1 && (
                                <Badge variant="ghost" size="xs">
                                    +{photo.albums.length - 1}
                                </Badge>
                            )}
                        </>
                    ) 
                    : 
                    (
                        Array.from({ length: 2 }).map((_, index) => (
                            <Skeleton
                              key={`album-loading-${index}`}
                              className="w-full h-4 rounded-sm"
                            />
                          ))
                    )
                    }
                </div>
                {!loading ? (
                        <Link 
                            to={`/albums/${photo.albums[0].id}`} 
                            className={
                                buttonVariants({ variant: "secondary", size: "sm",  className:"px-2 py-2" })}>
                            <Text 
                                variant="label-small"
                                className={buttonTextVariants({ variant: "secondary", size: "sm" })}>
                                Detalhe da imagem
                            </Text>
                        </Link>
                    ) : (
                        <Skeleton rounded="sm" className="w-full h-10" />
                    )}
            </div>
        </div>
    );
}


