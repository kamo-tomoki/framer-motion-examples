import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

const Samples = dynamic(() => import("../components"), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Home() {
  return (
    <main>
      <Samples />
    </main>
  );
}
