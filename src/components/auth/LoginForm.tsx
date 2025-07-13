"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { login } from "@/services/authservice";
import { useNavigation } from "@/hooks/dashboardNavigation";

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
  password: z.string().min(8).max(80),
  remember_me: z.boolean(),
});

const LoginForm = () => {
  const { navigate, isNavigating, setIsNavigating } = useNavigation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember_me: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsNavigating(true);

    try {
      const response = await login(
        values.email,
        values.password,
        values.remember_me
      );

      const user_role = response.user.user_role.toLowerCase();
      const user_id = response.user.id;

      document.cookie = `role=${user_role}; path=/; max-age=900;`;
      document.cookie = `id=${user_id}; path=/; max-age=900;`;

      navigate({
        href: `/${user_role}/dashboard`,
        loadingMessage: "Logging in...",
        successMessage: "Login successful!",
        errorMessage: "Login failed. Please try again.",
      });
    } catch (error) {
      form.setError("root", { message: "Invalid credentials: " + error });
    } finally {
      setIsNavigating(false);
    }
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
            Sign In to your Account
          </h1>
          <h2 className="mb-5 font-medium text-sm text-center">
            Welcome back! Please enter your details
          </h2>
        </div>
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="remember_me"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2 cursor-pointer">
                        <FormControl>
                          <Checkbox
                            id="remember_me"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel
                          htmlFor="remember_me"
                          className="text-xs font-normal cursor-pointer"
                        >
                          Remember me
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
                <Link href="/forgot-password">
                  <Button
                    variant={"link"}
                    type="button"
                    className="text-xs text-[var(--secondary)] cursor-pointer"
                  >
                    Forgot Password?
                  </Button>
                </Link>
              </div>
              <Button
                type="submit"
                disabled={isNavigating}
                className="w-full p-4 h-12 cursor-pointer"
              >
                {isNavigating ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Logging in...
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
