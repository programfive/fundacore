import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { inter } from '@/fonts';
import { Toaster } from "@/components/ui/sonner";
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: "Fundacore",
  description: "administration for children",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={cn(
            "bg-background w-screen overflow-x-hidden",
            inter.className
          )}
        >
          <Toaster position="top-center" />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}

