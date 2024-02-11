import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

const Examples = dynamic(() => import("../components"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <main>
      <Examples />
    </main>
  );
}
