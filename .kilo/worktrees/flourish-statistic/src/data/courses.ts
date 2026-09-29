export interface Course {
  id: string;
  title: string;
  category: string;
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
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=figma%20ui%20ux%20design%20workspace%20with%20modern%20dashboard%20mockup%20creative%20design%20tools%20screen&image_size=landscape_4_3",
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
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=creative%20digital%20asset%20design%20interface%20nft%20mockup%20artwork%20designer%20workspace&image_size=landscape_4_3",
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
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=big%20data%20analytics%20visualization%20code%20editor%20charts%20graphs%20dashboard%20dark%20theme&image_size=landscape_4_3",
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
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=minimal%20productivity%20workspace%20laptop%20notebook%20planner%20coffee%20desk%20flat%20lay&image_size=landscape_4_3",
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
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=financial%20chart%20money%20management%20investment%20graph%20business%20analytics%20screen&image_size=landscape_4_3",
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
    rating: 4.5,
    price: 25,
    priceSuffix: "/lifetime",
    image:
      "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=startup%20team%20meeting%20entrepreneurship%20office%20collaboration%20whiteboard%20business&image_size=landscape_4_3",
    creator: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    level: "Beginner",
    avatars: AVATAR_B,
    extraCount: "26+",
  },
];
