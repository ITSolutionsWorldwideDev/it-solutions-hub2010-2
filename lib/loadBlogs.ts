// lib/loadBlogs.ts
import { blogModules } from "./blogIndex";
import { generateSlug } from "./slugify";
import type { BlogData, BlogEntry } from "@/types/blogs";


export async function loadBlogs(): Promise<BlogEntry[]> {
  const blogs: BlogEntry[] = await Promise.all(
    blogModules.map(async (module: any) => {
      const title = module.title ?? "Untitled";
      const slug = generateSlug(title);

      const content: BlogData = {
        title,
        date: module.date,
        description: module.description,
        featuredImage: module.featuredImage,
        sections: module.sections,
      };

      return {
        slug,
        content,
        date: new Date(content.date),
      };
    })
  );

  return blogs.sort((a, b) => b.date.getTime() - a.date.getTime());
}

/* export async function loadBlogs(): Promise<BlogEntry[]> {
  const blogs: BlogEntry[] = blogModules.map((module: any) => {
    const title = module.title ?? "Untitled";
    const slug = generateSlug(title);

    const content: BlogData = {
      title,
      date: module.date,
      description: module.description,
      featuredImage: module.featuredImage,
      sections: module.sections,
    };

    return {
      slug,
      content,
      date: new Date(content.date),
    };
  });

  return blogs.sort((a, b) => b.date.getTime() - a.date.getTime());
} */


/* // lib/loadBlogs.ts
import { generateSlug } from "./slugify";
import type { BlogEntry, BlogData } from "@/types/blogs";

export async function loadBlogs(): Promise<BlogEntry[]> {
  // ✅ Eagerly import all blog files
  const modules = import.meta.glob("./blogs/*.js", { eager: true }) as Record<
    string,
    {
      title: string;
      date: string;
      description?: string;
      featuredImage?: string;
      sections: BlogData["sections"];
    }
  >;

  const blogs: BlogEntry[] = Object.entries(modules).map(([filePath, module]) => {
    const title = module.title ?? "Untitled";
    const slug = generateSlug(title);

    const content: BlogData = {
      title,
      date: module.date,
      description: module.description,
      featuredImage: module.featuredImage,
      sections: module.sections,
    };

    return {
      slug,
      content,
      date: new Date(content.date),
    };
  });

  return blogs.sort((a, b) => b.date.getTime() - a.date.getTime());
}
 */
