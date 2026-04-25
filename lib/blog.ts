import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  author?: string;
  image?: string;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => getPostMeta(slug))
    .filter(Boolean)
    .sort((a, b) => (a!.date < b!.date ? 1 : -1)) as PostMeta[];
}

export function getPostMeta(slug: string): PostMeta | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "General",
    author: data.author,
    image: data.image,
  };
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  // remark → rehype → sanitize → stringify
  // rehype-sanitize strips <script>, on*= handlers, and other XSS vectors.
  const processed = await remark()
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "General",
    author: data.author,
    image: data.image,
    content: processed.toString(),
  };
}
