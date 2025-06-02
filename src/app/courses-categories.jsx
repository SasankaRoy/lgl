"use client";

import React from "react";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";

const CATEGORIES = [
  {
    img: "/image/TruckImg5.jpg",
    icon: HeartIcon,
    title: `Reliable Transportation Solutions`,
    desc: "300 Courses",
  },
  {
    img: "/image/TruckImg8.jpg",
    icon: PuzzlePieceIcon,
    title: "Custom Fitted Solutions",
    desc: "200 Courses",
  },
  {
    img: "/image/TruckImg6.jpg",
    icon: GlobeEuropeAfricaIcon,
    title: "Reliable Transportation Solutions",
    desc: "240 Courses",
  },
  {
    img: "/image/TruckImg9.jpg",
    icon: MicrophoneIcon,
    title: "Custom Fitted Solutions",
    desc: "100 Courses",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue" className="my-3">
          WHAT WE OFFER
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          A comprehensive selection of courses designed to empower you with the
          skills you need to thrive in the dynamic world of web development.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            {/* <Typography color="white" className="text-xs font-bold opacity-50">
              HTML, CSS & Javascript
            </Typography> */}
            <Typography variant="h4" className="mt-9" color="white">
              Expert Trucking Services
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              At LGL Inc., we offer top-notch trucking services delivered by
              experienced professionals who understand the intricacies of the
              transportation industry.
            </Typography>
            <Button size="sm" color="white">
              Apply Now
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;
