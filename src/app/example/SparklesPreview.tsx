import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative -bottom-1 mt-8 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1>
    </div>
  );
}
