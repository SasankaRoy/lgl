import React from "react";
import { Card, Typography } from "@material-tailwind/react";

// interface StatsCardProps {
//   icon: React.ElementType;
//   count: string;
//   title: string;
// }

export function StatsCard({ icon: Icon, count, title }) {
  return (
    <Card color="transparent" shadow={false} className="items-center">
      <Icon className="h-[4dvw] w-[4dvw] text-gray-900" />
      {/* <Typography variant="h1" color="blue-gray" className="mb-2 mt-4 text-5xl">
        {count}
      </Typography> */}
      <Typography variant="h4" className="mb-2 font-normal text-center text-blue-gray-500">
        {title}
      </Typography>
    </Card>
  );
}

export default StatsCard;
