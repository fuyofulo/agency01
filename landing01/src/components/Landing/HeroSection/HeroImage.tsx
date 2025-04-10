import Image from "next/image";
import robot from "../../../assets/robot.avif";

// Image positioning settings
const IMAGE_SETTINGS = {
  translateX: "-25%", // negative moves left, positive moves right
  translateY: "90%", // negative moves up, positive moves down
  scale: 3, // adjust size (1 is original size)
} as const;

export default function HeroImage() {
  return (
    <div className="mt-16">
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={robot}
            alt="Creative eye with colorful makeup"
            fill
            priority
            className="object-contain"
            quality={100}
            style={{
              transform: `translate(${IMAGE_SETTINGS.translateX}, ${IMAGE_SETTINGS.translateY}) scale(${IMAGE_SETTINGS.scale})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
