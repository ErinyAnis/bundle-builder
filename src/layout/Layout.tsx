import Builder from "../components/bundle/Builder";
import ReviewPanel from "../components/bundle/review";

export default function Layout() {
  return (
    <main
      className="
      mx-auto
      grid
      min-h-screen
      max-w-[1440px]
      grid-cols-1
      gap-10
      px-4
      py-8

      lg:grid-cols-[1fr_420px]
      lg:px-8

      xl:px-12
    "
    >
      <Builder />

      <ReviewPanel />
    </main>
  );
}
