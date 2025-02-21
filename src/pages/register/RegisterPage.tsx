import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/components/ui/form";
import { Input } from "@/lib/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/lib/hooks/use-toast";
import { Link } from "react-router-dom";
import { Toaster } from "@/lib/components/ui/toaster";
import { Button } from "@/lib/components/ui/button";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  repeatPassword: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function RegisterPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Form submitted",
      description: "Your report has been sent successfully.",
    });
    <Link to="/login" />;
  }
  return (
    <div className="bg-gradient-to-r from-[#1F35EB] to-[#D56FDF] h-screen gap-4 items-center flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-1/4 pb-8 space-y-3 flex flex-col items-center bg-white rounded-xl border border-white/30 backdrop-blur-sm p-4"
        >
          <h1 className="text-3xl font-medium text-black/60">Register to</h1>
          <h1 className="text-4xl font-medium pb-4">PredicTech</h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-center w-3/5">
                <FormLabel className="text-lg ">email</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-black/50 rounded"
                    placeholder="example1@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="text-center w-3/5">
                <FormLabel className="text-lg ">password</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-black/50 rounded"
                    placeholder="should include: ex. #, !"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="repeatPassword"
            render={({ field }) => (
              <FormItem className="text-center w-3/5">
                <FormLabel className="text-lg ">Repeat password</FormLabel>
                <FormControl>
                  <Input
                    className="placeholder:text-black/50 rounded"
                    placeholder="should include: ex. #, !"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-row gap-2 py-2">
            <input id="is3dCheckBox" type="checkbox" />
            <span className="text-sm">
              {" "}
              I accept the{" "}
              <a href="#" className="underline text-predic font-medium">
                privacy terms
              </a>
            </span>
          </div>
          <div className="w-3/5 justify-between flex gap-4">
            <Button
              type="submit"
              className="w-1/2 rounded border-none border-white bg-predic hover:bg-predic/80 text-white h-10"
            >
              Submit
            </Button>
            <Link
              to="/login"
              className="w-1/2 rounded h-10 bg-predic text-white hover:bg-predic/80 duration-100 items-center justify-center flex text-sm font-medium"
            >
              Sign in
            </Link>
          </div>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}
