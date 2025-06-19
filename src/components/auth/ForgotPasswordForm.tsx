"use client";

import { z } from "zod";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email(),
});

const ForgotPasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full h-screen p-5 flex items-center justify-center">
      <div className="w-full max-w-md flex flex-col items-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/auth.image.png"
            alt="App Logo"
            width={133}
            height={Math.round((133 * 315) / 1547)}
            className="w-[133px] h-auto"
          />
          <h1 className="mt-5 mb-3 text-[36px] font-bold text-center">
            Forgot Password?
          </h1>
          <h2 className="mb-5 font-medium text-sm text-gray-500 text-center">
            Enter your email address associated with your account and we will
            send you a link to reset your password.
          </h2>
        </div>
        <div className="w-full text-center">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="instructor@firefly.com"
                        {...field}
                        className="placeholder:text-[var(--muted-foreground)]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full p-4 h-12 cursor-pointer mt-5"
              >
                Send Recovery Email
              </Button>
              <Link href="/login">
                <Button
                  variant={"link"}
                  type="button"
                  className="text-xs text-[var(--secondary)] cursor-pointer"
                >
                  Back to Login
                </Button>
              </Link>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
