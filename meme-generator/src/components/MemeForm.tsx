import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {memeSchema} from "@/types/types";


interface MemeFormProps {
    onGenerate?: (data: z.infer<typeof memeSchema>) => void,
    defaultValues?: { footer: string; header: string },
    onRefresh?: () => void
}

export default function MemeForm({onGenerate, defaultValues, onRefresh}: MemeFormProps) {

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
                {[
                    {name: "header", label: "Meme Header", description: "This is placed at the top of Meme"},
                    {name: "footer", label: "Meme Footer", description: "This is placed at the bottom of Meme"}
                ].map((item, index) =>
                    <FormField control={form.control} name={item.name} key={index} render={({field}) => (
                        <FormItem>
                            <FormLabel>{item.label}</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                {item.description}
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}>
                    </FormField>
                )}
                <Button type="submit" className={"mt-4"}>Submit</Button>
                <Button type="button" className={"mt-4 bg-secondary text-foreground ml-4"} onClick={onRefresh}>Refresh</Button>
            </form>
        </Form>
    );
};
