"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "@/components/ui/upload";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useAvatarStore } from "@/store/avatar";
import { createAvatar } from "@/actions/upload-avatar";
import { AvatarSchema } from "@/schemas";
import { ReloadIcon } from "@radix-ui/react-icons";
import { upload } from "@/services/upload";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallbackUser } from "@/components/avatar-fallback";
import { AvatarUser } from "@/components/avatar-user";
export function UploadAvatarForm() {
  const [isPending, startTransition] = useTransition();
  const {  updateUrlImage } = useAvatarStore();

  const form = useForm<z.infer<typeof AvatarSchema>>({
    resolver: zodResolver(AvatarSchema),
    defaultValues: {
      avatar: undefined,
    },
  });
  const onSubmit = (values: z.infer<typeof AvatarSchema>) => {
    const file = values.avatar[0];
    startTransition(async () => {
      const fileData = await upload(file);
      const urlImage = fileData?.secure_url;
      if (!urlImage) {
        toast.error("An error has occurred!");
        return;
      }
      await createAvatar(urlImage)
        .then((data) => {
          if (data.success) {
            toast.success(data.success);
            updateUrlImage(urlImage);
            form.reset();
          }
        })
        .catch(() => toast.warning("Something went wrong!"));
    });
  };
  return (
    <Card className=" w-full">
      <CardHeader>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-electric-violet-50">
          Your Photo
        </h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4 " onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarUser />
                <AvatarFallbackUser />
              </Avatar>
              <FormLabel>Edit your photo</FormLabel>
            </div>
            <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Upload disabled={isPending} field={field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isPending}
              className="gap-1 py-4 px-4"
              type="submit"
            >
              {isPending && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              <span>Save</span>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
