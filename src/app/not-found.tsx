import { NotFoundPage } from "@/components/NotFoundPage";

export const metadata = {
  title: "404 — Page Not Found | ByteSpace",
  description:
    "The page you're looking for doesn't exist. Return to the ByteSpace homepage.",
};

export default function NotFound() {
  return <NotFoundPage />;
}
