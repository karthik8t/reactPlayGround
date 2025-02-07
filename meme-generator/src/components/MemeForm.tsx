import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {memeSchema} from "@/types/types";


interface MemeFormProps {
    onGenerate?: (data: z.infer<typeof memeSchema>) => void,
    defaultValues?: { footer: string; header: string }
}

export default function MemeForm({onGenerate, defaultValues}: MemeFormProps) {

    const form = useForm({
        resolver: zodResolver(memeSchema),
        defaultValues: {
            header: defaultValues?.header,
            footer: defaultValues?.footer
        }
    })

    const onSubmit = (values: z.infer<typeof memeSchema>) => {
        console.log(values)
        onGenerate?.(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name={"header"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Meme Header</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is placed at the top of Meme
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}>
                </FormField>

                <FormField control={form.control} name={"footer"} render={({field}) => (
                    <FormItem>
                        <FormLabel>Meme Footer</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is placed at the bottom of Meme
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}>
                </FormField>
                <Button type="submit" className={"mt-4"}>Submit</Button>
            </form>
        </Form>
    );
};
