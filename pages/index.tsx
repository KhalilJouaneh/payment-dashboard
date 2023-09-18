import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Invoice from "@/components/invoice";

export default function Home() {
  return (
    <>
      <body>
        <Navbar />
        <Invoice />
      </body>
    </>
  );
}
