"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center relative justify-between px-10">
      {/* <Image
        width={1200}
        height={1200}
        src="/image/image8.svg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[700px] rounded-bl-[100px] object-cover object-center"
      /> */}
      <video
        src="/vedios/HeroBgVideo.mp4"
        autoPlay
        muted
        loop
        className="absolute inset-0 ml-auto w-[920px] h-[650px] rounded-bl-[100px] object-cover object-center"      
      >
        <source src="/vedios/HeroBgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              Your Trusted Partner for Reliable & On-Time Deliveries
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
              Founded by truck drivers with a genuine passion for
              transportation, LGL Inc. is dedicated to providing reliable,
              on-time delivery services. Our journey began with a commitment to
              excellence and a true spirit for the road.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button color="blue">view all courses</Button>
              <Button color="blue" variant="outlined">
                see pricing
              </Button>
            </div>
            {/* <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-pinterest.svg"
                alt="pinterest"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-netflix.svg"
                alt="netflix"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-coinbase.svg"
                alt="coinbase"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-google.svg"
                alt="google"
              />
            </div> */}
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
