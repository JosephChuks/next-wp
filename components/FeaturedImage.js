"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import settings from "@/settings.json";

const FeaturedImage = ({ id }) => {
  const [image, setImage] = useState(settings.icon);
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     const fetchImage = async () => {
       try {
         const res = await fetch(`${settings.api}/media/${id}`);
         const data = await res.json();
         setImage(data.source_url);
       } catch (e) {
         setImage(settings.icon);
       } finally {
         setIsLoading(false);
       }
     };

     fetchImage();
   }, [id]);

  return (
    <>
      {!isLoading ? (
        <Image
          width={150}
          height={150}
          src={image}
          className="attachment-thumbnail size-thumbnail wp-post-image"
          alt="image"
        />
      ) : (
        <Image
          width={150}
          height={150}
          src={`/images/spinner.gif`}
          className="attachment-thumbnail size-thumbnail wp-post-image"
          alt="image"
          unoptimized
        />
      )}
    </>
  );
};

export default FeaturedImage;
