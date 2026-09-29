export interface Testimonial {
  id: string;
  name: string;
  nameWidth: number;
  nameHeight: number;
  nameLineHeight: "120%" | "140%";
  role: string;
  roleWidth: number;
  quote: string;
  quoteHeight: number;
  cardHeight: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah M.",
    nameWidth: 86,
    nameHeight: 24,
    nameLineHeight: "120%",
    role: "Enthusiastic Learner",
    roleWidth: 158,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    quoteHeight: 203,
    cardHeight: 432,
    avatar: "https://i.pravatar.cc/160?img=47",
  },
  {
    id: "2",
    name: "James L.",
    nameWidth: 85,
    nameHeight: 28,
    nameLineHeight: "140%",
    role: "Lifelong Learner",
    roleWidth: 128,
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    quoteHeight: 203,
    cardHeight: 436,
    avatar: "https://i.pravatar.cc/160?img=13",
  },
  {
    id: "3",
    name: "Alex B.",
    nameWidth: 64,
    nameHeight: 28,
    nameLineHeight: "140%",
    role: "Inspired Creator",
    roleWidth: 127,
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    quoteHeight: 174,
    cardHeight: 407,
    avatar: "https://i.pravatar.cc/160?img=33",
  },
];
