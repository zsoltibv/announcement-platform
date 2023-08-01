import { Category } from "./category";

export interface Announcement {
  id: number;
  title: string;
  author: string;
  description: string;
  categoryId: string;
}
