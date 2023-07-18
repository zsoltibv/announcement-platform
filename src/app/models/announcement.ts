import { Category } from "./category";

export interface Announcement {
  message: string;
  title: string;
  author: string;
  category: Category;
}
