import { Category } from "./category";

export interface Announcement {
  id: number;
  title: string;
  author: string;
  message: string;
  categoryId: string;
  imageURL: string;
}
