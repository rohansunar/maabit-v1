"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";

export type MediaItem = {
  type: "image" | "video" | "youtube";
  src: string;
  alt?: string;
  poster?: string;
};

export default function MediaCarousel({ media }: { media: MediaItem[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // Function to extract YouTube ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };

  // Function to get YouTube thumbnail
  const getYouTubeThumbnail = (
    url: string,
    quality: "default" | "hqdefault" | "mqdefault" = "hqdefault"
  ) => {
    const videoId = getYouTubeId(url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/${quality}.jpg` : null;
  };

  // Function to determine media type based on URL
  const getMediaType = (src: string, originalType: string) => {
    if (originalType === "youtube") return "youtube";
    if (src.includes("youtube.com") || src.includes("youtu.be")) return "youtube";
    return originalType as "image" | "video";
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-2xl overflow-hidden shadow-xl mb-4 relative"
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop={true}
      >
        {media.map((item, index) => {
          const mediaType = getMediaType(item.src, item.type);
          const youtubeId = mediaType === "youtube" ? getYouTubeId(item.src) : null;

          return (
            <SwiperSlide key={index} className="relative">
              {mediaType === "image" ? (
                <div className="relative w-full h-[500px] md:h-[600px]">
                  <Image
                    src={item.src}
                    alt={item.alt || "Gallery image"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    priority={index === 0}
                  />
                </div>
              ) : mediaType === "youtube" && youtubeId ? (
                <div className="relative w-full h-[500px] md:h-[600px] bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={item.alt || "YouTube video"}
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-4 py-2 backdrop-blur-sm">
                    <span className="text-white text-sm font-medium">YouTube Video</span>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-[500px] md:h-[600px] bg-black">
                  <video
                    controls
                    className="w-full h-full object-contain"
                    poster={item.poster}
                    preload="metadata"
                    playsInline
                  >
                    <source src={item.src} type="video/mp4" />
                    <source src={item.src} type="video/webm" />
                    <source src={item.src} type="video/ogg" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-4 py-2 backdrop-blur-sm">
                    <span className="text-white text-sm font-medium">Click to play/pause</span>
                  </div>
                </div>
              )}

              {/* Slide indicator */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {index + 1} / {media.length}
              </div>
            </SwiperSlide>
          );
        })}

        {/* Custom navigation buttons */}
        <div className="swiper-button-next !text-white !bg-blue-600/80 !w-12 !h-12 rounded-full after:!text-xl after:!font-bold hover:!bg-blue-700/90 transition-all duration-300"></div>
        <div className="swiper-button-prev !text-white !bg-blue-600/80 !w-12 !h-12 rounded-full after:!text-xl after:!font-bold hover:!bg-blue-700/90 transition-all duration-300"></div>
      </Swiper>

      {/* Thumbnail Gallery - Only show if there are multiple items */}
      {media.length > 1 && (
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={12}
          watchSlidesProgress
          className="thumbnail-swiper mt-6"
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 16,
            },
          }}
        >
          {media.map((item, index) => {
            const mediaType = getMediaType(item.src, item.type);
            const youtubeThumbnail = mediaType === "youtube" ? getYouTubeThumbnail(item.src) : null;

            return (
              <SwiperSlide key={index} className="cursor-pointer">
                <div className="relative w-full h-20 md:h-24 rounded-lg overflow-hidden border-2 border-transparent opacity-70 transition-all duration-300 swiper-slide-thumb-active:opacity-100 swiper-slide-thumb-active:border-blue-500 swiper-slide-thumb-active:scale-105">
                  {mediaType === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt || `Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  ) : mediaType === "youtube" && youtubeThumbnail ? (
                    <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                      {/* Use regular img tag for YouTube thumbnails to avoid Next.js Image config issues */}
                      <img
                        src={youtubeThumbnail}
                        alt={`YouTube thumbnail ${index + 1}`}
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-red-600/90 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                        YouTube
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-500/90 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white ml-0.5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                        Video
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}

      <style jsx global>{`
        .thumbnail-swiper .swiper-slide {
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .thumbnail-swiper .swiper-slide-thumb-active {
          opacity: 1;
        }

        .swiper-button-next,
        .swiper-button-prev {
          background: rgba(59, 130, 246, 0.8) !important;
          backdrop-filter: blur(10px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
