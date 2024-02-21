import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";
import { inter } from '@/fonts';
import { Toaster } from "@/components/ui/sonner";
import { cn } from '@/lib/utils';
import { SwrProvider } from '@/providers/swr-provider';
import { ScrollArea } from "@/components/ui/scroll-area"

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
            "bg-background w-screen overflow-x-hidden min-h-screen ",
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
            <SwrProvider>
              {children}
              </SwrProvider>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}

