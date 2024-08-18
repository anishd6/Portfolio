import React from 'react';
import { FaReact, FaSalesforce, FaTiktok } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
//import speedyNexus from '@/public/speedynexus.png';
//import lostMokokos from '@/public/lostmokokos.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

type Experience = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode;
  date: string;
};

export const experiencesData: readonly Experience[] = [
  {
    title: 'Bachelor of Science - Computer Information Systems',
    location: 'Kwantlen Polytechnic University',
    description: 'Graduated with a BS in Computer Information Systems.',
    icon: React.createElement(LuGraduationCap),
    date: '2017 - 2021',
  },
  {
    title: 'Software Engineer ',
    location: 'Gao Tek',
    description:
      'Lead a team of engineers to develop an Android Studio application.',
    icon: React.createElement(FaReact),
    date: 'Sep 2021 - Jan 2022',
  },
  {
    title: 'Software Development Engineer in Test',
    location: 'Teledyne FLIR',
    description:
      'Technical lead for testing team of 4 members. Led automation testing activities of the product development cycle.',
    icon: React.createElement(FaReact),
    date: 'April 2022 - Dec 2022',
  },
  {
    title: 'Software Engineer',
    location: 'Teledyne FLIR',
    description: 'Maintaining and adding features to Spinview and Spinnaker SDK',
    icon: React.createElement(FaReact),
    date: 'December 2022 - March 2024',
  },
];

export const reversedExperiencesData = [...experiencesData].reverse();

export const projectsData = [
  {
    title: 'Rogue Media Capstone Project',
    description:
      'Displays currently available or newly released dates for NEXUS Interviews. Reducing wait times by up to ~90% by allowing users to secure cancelled or postponed interviews quickly.',
    tags: ['Python', 'Django'],
    // imageUrl: ,
  },
  {
    title: 'Price Comparison Web Scraper',
    description:
      'Created a community website for Amazon Games published game Lost Ark, over 1 million page views and 10,000 users monthly. Utilizing React, Next.js and front-end libraries such as MUI, Fontawesome Icons to create tools for users to enhance their journey from scratch supporting Mobile and Desktop Users.',
    tags: ['React', 'Next.js', 'Tailwind', 'MUI', 'Single Page Application'],
    // imageUrl: ,
  },
  {
    title: '2D Asteroid Mobile Game',
    description:
      'Created a community website for Amazon Games published game Lost Ark, over 1 million page views and 10,000 users monthly. Utilizing React, Next.js and front-end libraries such as MUI, Fontawesome Icons to create tools for users to enhance their journey from scratch supporting Mobile and Desktop Users.',
    tags: ['React', 'Next.js', 'Tailwind', 'MUI', 'Single Page Application'],
    // imageUrl: ,
  },
  {
    title: 'Movie Rating Application',
    description:
      'Created a community website for Amazon Games published game Lost Ark, over 1 million page views and 10,000 users monthly. Utilizing React, Next.js and front-end libraries such as MUI, Fontawesome Icons to create tools for users to enhance their journey from scratch supporting Mobile and Desktop Users.',
    tags: ['React', 'Next.js', 'Tailwind', 'MUI', 'Single Page Application'],
    // imageUrl: ,
  },
  {
    title: 'AWS Facial Recognition ',
    description:
      'Created a community website for Amazon Games published game Lost Ark, over 1 million page views and 10,000 users monthly. Utilizing React, Next.js and front-end libraries such as MUI, Fontawesome Icons to create tools for users to enhance their journey from scratch supporting Mobile and Desktop Users.',
    tags: ['React', 'Next.js', 'Tailwind', 'MUI', 'Single Page Application'],
    // imageUrl: ,
  },

] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Java',
  'Python',
  'Data Structures and Algorithms',
  'Git',
  'Tailwind',
  'GraphQL',
  'Leetcode',
  'Artificial Intelligence',
  'REST APIs',
  'Object-Oriented Programming',
  'Software Development Life Cycle',
  'MySQL',
  'Salesforce',
] as const;
