import UploadCard from "../components/UploadCard";
import AnimatedBackground from "../components/AnimatedBackground";
import MouseGlow from "../components/MouseGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <MouseGlow />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <UploadCard />
      </div>
    </div>
  );
}