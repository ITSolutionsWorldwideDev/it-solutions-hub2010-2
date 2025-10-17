// types/blogs.ts

export type BlogSection = {
  title?: string;
  subtitle?: string;
  content: string;
  image?: string;
};

export type BlogData = {
  title: string;
  date: string;
  description?: string;
  featuredImage?: string;
  sections: BlogSection[];
};

export type BlogEntry = {
  slug: string;
  content: BlogData;
  date: Date;
};
