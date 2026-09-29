import {
  Palette,
  Code2,
  MonitorCog,
  Briefcase,
  Megaphone,
  Camera,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface LearningPath {
  id: string;
  name: string;
  icon: LucideIcon;
  courses?: number;
}

export const learningPaths: LearningPath[] = [
  { id: "design", name: "Design", icon: Palette, courses: 14 },
  { id: "dev", name: "Development", icon: Code2, courses: 22 },
  { id: "it", name: "IT & Software", icon: MonitorCog, courses: 18 },
  { id: "biz", name: "Business", icon: Briefcase, courses: 12 },
  { id: "mkt", name: "Marketing", icon: Megaphone, courses: 10 },
  { id: "photo", name: "Photography", icon: Camera, courses: 8 },
];
