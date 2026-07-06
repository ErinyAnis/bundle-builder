import Builder from "../components/Builder";
import ReviewPanel from "../components/ReviewPanel";

export default function Layout() {
  return (
    <main className="mx-auto grid min-h-screen grid-cols-[1fr_420px] gap-8 px-12 py-10">
      <Builder />

      <ReviewPanel />
    </main>
  );
}
