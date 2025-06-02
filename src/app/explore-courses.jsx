"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/TruckImg3.jpg",
    tag: "Beginner • 25 Classes • 200 Students",
    title: "Custom Fitted Solutions",
    label: "Apply Now",
    desc: "Dive into HTML to structure your content and CSS to style it. By the end, you'll be crafting beautiful web pages from scratch.",
  },
  {
    img: "/image/TruckImg5.jpg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Expert Trucking Services",
    label: "Apply Now",
    desc: "Our Responsive Design course teaches you the art of creating websites that seamlessly adapt to different devices and screen sizes.",
  },
  {
    img: "/image/TruckImg6.jpg",
    tag: "Medium • 23 Classes • 590 Students",
    title: "Custom Fitted Solutions",
    label: "Apply Now",
    desc: "Take your frontend development to the next level with our React Development course. Learn how to build interactive, dynamic web applications.",
  },
  {
    img: "/image/TruckImg7.jpg",
    tag: "Beginner • 35 Classes • 400 Students",
    title: "Expert Trucking Services",
    label: "Apply Now",
    desc: "For aspiring web developers, the Frontend Essentials course is a must. Dive into the core technologies - HTML, CSS, and JavaScript.",
  },
  {
    img: "/image/TruckImg8.jpg",
    tag: "Medium • 10 Classes • 150 Students",
    title: "Reliable Transportation Solutions",
    label: "Apply Now",
    desc: "Our Tailwind CSS Introduction course teaches you how to use this utility-first CSS framework to streamline your workflow, saving you time.",
  },
  {
    img: "/image/TruckImg9.jpg",
    tag: "Medium • 33 Classes • 690 Students",
    title: "Expert Trucking Services",
    label: "Apply Now",
    desc: "Dream of becoming a backend developer? Our intensive one-month Node.js course is your fast track to achieving that goal.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue">
          Drive with Us
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
