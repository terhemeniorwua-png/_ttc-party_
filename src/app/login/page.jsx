"use client";

import LoginForm from "@/components/auth/LoginForm";
import Footer from "@/components/ui/Footer";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-soft flex flex-col justify-between font-body">
      <div className="flex-1 flex items-center justify-center p-6 my-12">
        <LoginForm />
      </div>
      {/* <Footer /> */}
    </main>
  );
}