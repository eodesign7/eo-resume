import Image from "next/image";
import Link from "next/link";
import React from "react";

import Img1 from "@/public/projects/image1.jpg";
import Img2 from "@/public/projects/image2.jpg";
import Img3 from "@/public/projects/image3.jpg";
import Img4 from "@/public/projects/image4.jpg";
import Img5 from "@/public/projects/image5.jpg";
import Img6 from "@/public/projects/image6.jpg";

// import images from "@/images";

export default function TestGallery() {
  return (
    <div className="flex flex-col h-screen items-center bg-zinc-900">
      {/* Header */}
      <div className="flex h-[80px] px-8 items-center w-full text-white bg-zinc-800">
        <Link href={"/resume"} className="text-xs text-red-400">
          Back
        </Link>
        <h1 className="ml-8">Test gallery</h1>
      </div>

      {/* hard-coded gallery */}
      <div className="mt-16 grid grid-cols-3 gap-8">
        <Image
          src={Img1}
          alt="img1"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <Image
          src={Img1}
          alt="img1"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <Image
          src={Img2}
          alt="img2"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <Image
          src={Img3}
          alt="img3"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <Image
          src={Img3}
          alt="img3"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <Image
          src={Img4}
          alt="img4"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <Image
          src={Img5}
          alt="img1"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <Image
          src={Img5}
          alt="img1"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <Image
          src={Img6}
          alt="img6"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

// ? Gallery || Doesn't show the images
//
// <div className="grid grid-cols-3 gap-4 items-center">
//   {images.map((image, index) => (
//     <Image
//       key={index}
//       src={image.src}
//       alt={`image ${index}`}
//       width={240}
//       height={240}
//       className="object-contain"
//     />
//   ))}
// </div>
