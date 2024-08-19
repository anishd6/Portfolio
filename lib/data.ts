import React from 'react';
import { FaReact, FaSalesforce, FaTiktok } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import anish from '@/public/anish.png';
import rogue from '@/public/rogue.png';
import webscrape from '@/public/webscrape.png';
import lichess from '@/public/lichess.png';
import asteroid from '@/public/asteroids.png';
import java from '@/public/java.png';
import aws from '@/public/aws.png';

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
      'Created a Django website for Rogue Media to give them data analytics on their users using Python and Django.',
    tags: ['Python', 'Django'],
    imageUrl: rogue,
  },
  {
    title: 'Price Comparison Web Scraper',
    description:
      'Created a Python web scraper that allows users to search for an item across the internet. This sorts the data according to the lowest price or alphabetically for the user which is displayed on my flask website.',
    imageUrl: webscrape,
  },
  {
    title: 'Chess Opening Move Search Engine',
    description:
      'Created a Python chess search engine that allows users to search various openings from a real Lichess database using search engine optimization practices. Integrated with a GUI using PyQt5',
    tags: ['Python', 'Qt'],
    imageUrl: lichess,
  },
  {
    title: '2D Asteroid Mobile Game',
    description:
      'Created an original take on the classic Asteroid game using Unity 2D and C# scripts. Includes multiple enemies AI with patterns, art assets, and sound assets.',
    tags: ['C#, Unity'],
    imageUrl: asteroid,
  },
  {
    title: 'Movie Rating Application',
    description:
      'Created a movie rating application in which users can log in and rate various movies and keep a sorted list of movies.',
    tags: ['Java', 'JavaFX', 'XAMPP', 'Scene Builder'],
    imageUrl: java,
  },
  {
    title: 'AWS Facial Recognition ',
    description:
      'Created a facial recognition system, using python and a raspberry pi attached to a camera to produce a high confidence interval to recognize faces',
    tags: ['Python, AWS'],
    imageUrl: aws,
  },

] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'C++',
  'C#',
  'Python',
  'Devops',
  'Java',
  'VB',
  'Data Structures and Algorithms',
  'Git',
  'Scrum',
  'Leadership',
  'Leetcode',
  'Object-Oriented Programming',
  'Software Development Life Cycle',
  'Databases',
] as const;
