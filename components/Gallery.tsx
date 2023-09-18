"use client";

import { useState } from "react";

import Image from "next/image";
import Pic from "@/public/placeholder-img.jpg";

// Type definitions
interface Image {
  src: string;
  index: number;
}

interface ImageGalleryProps {
  images: Image[];
  index: number;
}

export default function ImageGallery({ images, index }: ImageGalleryProps) {
  // popUp function
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openImage = (image: Image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex">
      {images.map((image, index) => (
        <div 
          key={index} 
          className="w-1/4 p-2 cursor-pointer"
          onClick={() => openImage(image)}
        >
          <Image
            src={image.src}
            alt={`Image ${index}`}
            width={80}
            height={80}
          />
        </div>
      ))}
      ;
    </div>
  );
}
