"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";

const STATS = [
  {
    icon: DocumentTextIcon,
    count: "10,200+",
    title: "On-Time Deliveries",
  },
  {
    icon: PlayCircleIcon,
    count: "50+",
    title: "Industry Expertise",
  },
  {
    icon: PencilSquareIcon,
    count: "10+",
    title: "Ease of Communication",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-64">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue" className="mb-2 text-4xl">
            Explore Our Transporing Solutions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            Our transporting solutions span across the western US region. Our
            solutions can be custom fitted to your needs from dry van and
            refrigeration to hauling fuel and chemicals.
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;
