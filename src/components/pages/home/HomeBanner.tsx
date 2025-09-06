"use client";
import Image from "next/image";
import Link from "next/link";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
// Data
import homeBannersData from "@/data/homeBannerData";
// Components
import { Button } from "@/components";
// Icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const HomeBanner = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        loop
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        effect="fade"
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/80 !w-2 !h-2",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white",
        }}
        className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {homeBannersData.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-full group">
              {/* Background Image with Parallax Effect */}
              <div className="absolute inset-0 scale-110 transition-transform duration-[7000ms] ease-out group-hover:scale-105">
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Dynamic Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${banner.accent} opacity-40`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: `${index * 2}s` }}
                />
                <div
                  className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: `${index * 2 + 1}s` }}
                />
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container">
                  <div className="max-w-4xl mx-auto text-center px-4 space-y-8">
                    {/* Main Headline with Animation */}
                    <div className="space-y-4 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
                      <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                        <span className="block transform transition-all duration-700 ">
                          {banner.headline}
                        </span>
                      </h1>

                      <p className="text-white/90 text-lg md:text-2xl lg:text-3xl font-light tracking-wide max-w-3xl mx-auto">
                        {banner.subtext}
                      </p>

                      <p className="text-white/70 text-base hidden md:block md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                        {banner.description}
                      </p>
                    </div>

                    {/* Enhanced CTA Buttons */}
                    <Link href={banner.cta.primary.href}>
                      <Button variant="primary" size="lg">
                        {banner.cta.primary.label}
                        <ChevronRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>

                    {/* Feature Highlights */}
                    <div className="hidden md:flex flex-wrap justify-center gap-6 pt-8  animate-in slide-in-from-bottom-2 duration-1000 delay-1000">
                      <div className="flex items-center space-x-2 text-white/80 text-sm">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <span>Free Shipping</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80 text-sm">
                        <div
                          className="w-2 h-2 bg-white/60 rounded-full"
                          style={{ animationDelay: "0.5s" }}
                        ></div>
                        <span>30-Day Returns</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80 text-sm">
                        <div
                          className="w-2 h-2 bg-white/60 rounded-full"
                          style={{ animationDelay: "1s" }}
                        ></div>
                        <span>Apple Care+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeBanner;
