import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getPost, getAllPostSlugs } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | TCG Strategic Communications`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-slate-400 hover:text-white transition-colors text-sm mb-8"
          >
            ← Back to Blog
          </Link>
          <Badge variant="outline" className="mb-4 text-slate-300 border-slate-600">
            {post.category}
          </Badge>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-slate-400 text-sm">
            {post.author && <span>{post.author}</span>}
            {post.author && post.date && <span>·</span>}
            {post.date && (
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image && (
        <div className="relative w-full h-72 lg:h-96 max-w-4xl mx-auto -mt-8 rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      )}

      {/* LinkedIn Embed */}
      {post.linkedinUrn && (
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl pt-12 lg:pt-16">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white">
            <iframe
              src={`https://www.linkedin.com/embed/feed/update/${post.linkedinUrn}`}
              height={620}
              width="100%"
              frameBorder={0}
              allowFullScreen
              title="LinkedIn post"
              className="w-full block"
            />
          </div>
        </div>
      )}

      {/* Article */}
      <article className="container mx-auto px-6 lg:px-12 max-w-3xl py-16 lg:py-24">
        <div
          className="prose prose-slate dark:prose-invert prose-lg max-w-none
            prose-headings:font-black prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-900 dark:prose-strong:text-white
            prose-li:marker:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA */}
      <section className="bg-slate-900 py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Let&apos;s discuss how TCG Strategic Communications can help your organization.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
