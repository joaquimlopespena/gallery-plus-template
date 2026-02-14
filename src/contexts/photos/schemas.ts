import { z } from "zod";

export const photoNewFormSchema = z.object({
    title: z.string().min(1, "O título é obrigatório").max(255, "O título deve conter no máximo 255 caracteres"),
    file: z.instanceof(FileList).refine((file) => file.length > 0, "A imagem é obrigatória"),
    albumsIds: z.array(z.string().uuid()).optional(),
});

export type PhotoNewForm = z.infer<typeof photoNewFormSchema>;