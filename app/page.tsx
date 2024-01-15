import Footer from "./Footer";
import Header from "./Header";
import Samples from "./Samples";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Samples />
      </main>
      <Footer />
    </>
  );
}
