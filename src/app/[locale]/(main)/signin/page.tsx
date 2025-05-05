"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signinSchema } from "@/lib/validations/auth";
import { useTranslations } from "next-intl";

export default function SigninForm() {
  const t = useTranslations("Auth");
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div id="location-form" className="flex h-full items-center">
      <div className="w-content flex flex-col">
        <Card className="w-[320px] md:w-[400px]">
          <CardHeader>
            <CardTitle>{t("signin")}</CardTitle>
            <CardDescription>{t("signinDescription")}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Form {...form}>
              <form className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("email")}</FormLabel>
                      <FormControl>
                        <Input
                          required
                          autoComplete="email"
                          placeholder={t("email")}
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
                    <FormItem>
                      <FormLabel>{t("password")}</FormLabel>
                      <FormControl>
                        <Input
                          required
                          type="password"
                          autoComplete="current-password"
                          placeholder={t("password")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">{t("signin")}</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-xs text-muted-foreground">
              Welcome to the Minerva.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
