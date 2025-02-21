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
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Logged in successfully",
      description: "Redirecting",
    });
    setTimeout(() => {
      navigate("/app");
    }, 1000);
  }
  return (
    <div className="bg-gradient-to-r from-[#1F35EB] to-[#D56FDF] h-screen gap-4 items-center flex justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-1/4 pb-8 space-y-6 flex flex-col items-center bg-white rounded-xl border border-white/30 backdrop-blur-sm p-4"
        >
          <h1 className="text-3xl font-medium text-black/60">Log in to</h1>
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
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-3/5 justify-between flex gap-4">
            <Button
              type="submit"
              className="w-1/2 rounded border-none border-white bg-predic hover:bg-predic/80 text-white h-10"
            >
              Submit
            </Button>
            <Link
              to="/register"
              className="w-1/2 rounded h-10 bg-predic text-white hover:bg-predic/80 duration-100 items-center justify-center flex text-sm font-medium"
            >
              Sign up
            </Link>
          </div>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}
