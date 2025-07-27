'use client'; 
import Image from "next/image";
import aboutUsImage from "../../public/hooks.jpg";

const page = () => {
    return (
        <div>
             <div className="relative h-[60vh] w-full z-40">
        {/* Background Image */}
        <Image
          src={aboutUsImage}
          alt="About Us Background"
          fill
          className="object-cover rounded-lg"
          priority
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-50" />

        {/* Text Content */}
        <div className="absolute inset-0 z-[60] flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl md:text-6xl font-bold mb-4 uppercase">about</h1>
        </div>
      </div>
        </div>
    );
};

export default page;