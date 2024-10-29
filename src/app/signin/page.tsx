import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Apple } from "lucide-react";
import bgImage from "@/public/bg.jpg";
import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-white">
      <div className="flex-1 relative">
        <Image
          src={bgImage}
          alt="Illustration"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              If you don&apos;t have an account register
              <Link
                href="/register"
                className="text-red-500 hover:underline ml-1"
              >
                You can Register here !
              </Link>
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1"
                  placeholder="Enter your Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember-me" />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="text-blue-600 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600"
            >
              Login
            </Button>
          </form>
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#FFFfff] text-gray-500">
                  or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <form
                action={async () => {
                  "use server";
                  //at first, sign in with facebook & then redirect to the homepage after login
                  await signIn("facebook", { redirectTo: "/" });
                }}
              >
                <Button variant="outline" className="w-full">
                  <Facebook className="w-5 h-5 text-blue-600" />
                </Button>
              </form>

              <Button variant="outline" className="w-full">
                <Apple className="w-5 h-5" />
              </Button>

              <form
                action={async () => {
                  "use server";
                  //at first, sign in with google & then redirect to the homepage after login
                  await signIn("google", { redirectTo: "/" });
                }}
              >
                <Button variant="outline" className="w-full">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google"
                    width={20}
                    height={20}
                  />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
