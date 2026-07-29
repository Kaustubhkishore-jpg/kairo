export default function GridOverlay() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-10
        md:opacity-20
        bg-[linear-gradient(to_right,#6366f110_1px,transparent_1px),linear-gradient(to_bottom,#6366f110_1px,transparent_1px)]
        bg-[size:40px_40px]
        md:bg-[size:60px_60px]
      "
    />
  );
}