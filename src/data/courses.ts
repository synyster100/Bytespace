
export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  rating: number;
  price: number;
  priceSuffix: string;
  image: string;
  creator: string;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  avatars: string[];
  extraCount: string;
}

const AVATAR_A = [
  "https://i.pravatar.cc/80?img=13",
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=49",
  "https://i.pravatar.cc/80?img=15",
];

const AVATAR_B = [
  "https://i.pravatar.cc/80?img=68",
  "https://i.pravatar.cc/80?img=45",
  "https://i.pravatar.cc/80?img=50",
  "https://i.pravatar.cc/80?img=33",
];

export const courses: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    category: "UI/UX Design",
    description: "Master the fundamentals of Figma and create stunning UI designs from scratch.",
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image: "/frame.png",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    avatars: AVATAR_A,
    extraCount: "26+",
  },
  {
    id: "2",
    title: "Build Digital Asset",
    category: "Design",
    description: "Learn to create and monetize digital assets for modern design marketplaces.",
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image: "/frame2.png",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    avatars: AVATAR_A,
    extraCount: "26+",
  },
  {
    id: "3",
    title: "the Power of Big Data",
    category: "Data Science",
    description: "Unlock insights from massive datasets using modern data analysis techniques.",
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image: "/frame3.png",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    avatars: AVATAR_B,
    extraCount: "26+",
  },
  {
    id: "4",
    title: "Balancing Productivity an...",
    category: "Productivity",
    description: "Strategies and tools to maximize output while maintaining a healthy work-life balance.",
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image: "/frame.png",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    avatars: AVATAR_B,
    extraCount: "26+",
  },
  {
    id: "5",
    title: "Mastering Money Manage...",
    category: "Finance",
    description: "Take control of your finances with proven budgeting and investment strategies.",
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image: "/frame2.png",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    avatars: AVATAR_A,
    extraCount: "26+",
  },
  {
    id: "6",
    title: "From Idea to Startup Succ...",
    category: "Entrepreneurship",
    description: "Transform your business idea into a thriving startup with step-by-step guidance.",
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image: "/frame3.png",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    avatars: AVATAR_B,
    extraCount: "26+",
  },
];
