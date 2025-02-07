import {z} from "zod";

export const memeSchema = z.object({
    header: z.string().min(5).max(20).trim().toUpperCase(),
    footer: z.string().min(5).max(25).trim().toUpperCase()
});