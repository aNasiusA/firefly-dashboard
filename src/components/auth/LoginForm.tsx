"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "@/hooks/Authcontext";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { login } from "@/services/authservice";

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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember_me: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const toastId = toast.loading("Signing you in...");

    try {
      console.log(values);
      const user = await login(
        values.email,
        values.password,
        values.remember_me
      );
      setUser(user);
      const dashboardPath = `/${user.role?.toLowerCase()}/dashboard`;
      console.log(user);
      toast.success("Login successful", { id: toastId });
      router.push(dashboardPath);
    } catch (error) {
      form.setError("root", { message: "Invalid credentials" + error });
      toast.error("Login failed", { id: toastId });
    } finally {
      setIsLoading(false);
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
                disabled={isLoading}
                className="w-full p-4 h-12 cursor-pointer"
              >
                {isLoading ? (
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
