import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};


export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Link href="/">
              <AcmeLogo />
            </Link>
          </div>
        </div>
        <LoginForm />
        <Link
          href="/"
          className="flex items-center gap-5 self-start rounded-lg bg-gray-400 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
        >
          <span>back to Home Page</span>
        </Link>
      </div>
    </main>
  );
}
