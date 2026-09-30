import type { Metadata } from "next";
import { SignupPage } from "@/components/auth/SignupPage";

export const metadata: Metadata = {
  title: "Sign Up — ByteSpace",
  description:
    "Create a ByteSpace account. The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
};

export default function SignupRoute() {
  return <SignupPage />;
}
