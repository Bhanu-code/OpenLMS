import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Facebook, Apple } from 'lucide-react'
import bgImage from '@/public/bg.jpg'

export default function Register() {
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
            <div>
            <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full">
          <h2 className="text-3xl font-bold mb-6">Sign up</h2>
          <p className="mb-6 text-gray-600">
            If you already have an account register{" "}
            <Link href="/signin" className="text-red-500 hover:underline">
              Login here !
            </Link>
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <Input id="username" type="text" placeholder="Enter your User name" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input id="password" type="password" placeholder="Enter your Password" />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <Input id="confirm-password" type="password" placeholder="Confirm your Password" />
            </div>
            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
              Register
            </Button>
          </form>
        </div>
      </div>
            </div>
        </div>
    )
}