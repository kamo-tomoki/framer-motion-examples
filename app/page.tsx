import { Button } from "@nextui-org/react";
import Image from "next/image";
import Header from "./Header";
import Samples from "./Samples";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Samples />
      </main>
    </>
  );
}
