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
      gap-8
      xl:gap-10
      px-4
      py-8
      lg:grid-cols-[minmax(0,1fr)_400px]
      lg:px-8
      xl:px-12
    "
    >
      <Builder />

      <ReviewPanel />
    </main>
  );
}
