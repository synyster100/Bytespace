import type { Metadata } from "next";
import { SigninPage } from "@/components/auth/SigninPage";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description:
    "Sign in to ByteSpace. Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
};

export default function SigninRoute() {
  return <SigninPage />;
}
