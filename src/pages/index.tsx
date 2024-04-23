import { Inter } from "next/font/google";
import AuthLayout from "@/layout/auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

Home.getLayout = AuthLayout;
