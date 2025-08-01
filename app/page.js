import LocationDetector from "@/components/LocationDetector";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <p className="text-center text-3xl"> Alhamdulillah...</p>

      <Suspense fallback={<div>Loading...</div>}>
        <LocationDetector />
      </Suspense>
    </div>
  );
}
