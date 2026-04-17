import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog | TCG Strategic Communications",
  description:
    "Insights on public relations, crisis communications, government affairs, and community engagement from The Casey Group.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6">
            Insights & Perspectives
          </h1>
          <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
            Strategic thinking on public relations, government affairs, and
            community engagement from The Casey Group.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {posts.length === 0 ? (
            <p className="text-center text-slate-500 text-xl">
              No posts yet — check back soon.
            </p>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                    {post.image && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <CardContent className="p-6 flex flex-col gap-3">
                      <Badge variant="outline" className="w-fit text-xs">
                        {post.category}
                      </Badge>
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-xs text-slate-400">
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                        {post.author && (
                          <span className="text-xs text-slate-400">{post.author}</span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
