import ReviewHeader from "./ReviewHeader";

export default function ReviewPanel() {
  return (
    <aside
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
      "
    >
      <ReviewHeader />

      <div className="mt-6">{/* Review Items */}</div>
    </aside>
  );
}
