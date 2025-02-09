import {z} from "zod";

export const memeSchema = z.object({
    header: z.string().min(5).max(50).trim().toUpperCase(),
    footer: z.string().min(5).max(50).trim().toUpperCase()
});

interface MemesFlip {
    memes: [MemeFlip]
}

interface MemeFlip {
    id: string,
    name: string,
    url: string,
    width: number,
    height: number,
    box_count: number
}

export interface ImgFlip {
    success: boolean,
    data: MemesFlip
}

