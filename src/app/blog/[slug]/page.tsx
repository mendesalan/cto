import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import {
  FaClock,
  FaTag,
  FaUser,
  FaArrowLeft,
  FaCalendar,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";

// Importar CSS do highlight.js
import "highlight.js/styles/github-dark.css";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: `${post.title} | Blog meuCTOdigital.com`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      url: `https://meuctodigital.com/blog/${post.slug}`,
      siteName: "meuCTOdigital.com",
      locale: "pt_BR",
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [
            {
              url: "/aboutme.jpeg",
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : ["/aboutme.jpeg"],
      creator: "@meuctodigital",
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    category: "technology",
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      <Navbar />
      {/* Header do Post */}
      <header className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Voltar para o blog
            </Link>
            <div className="flex flex-wrap gap-3 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-emerald-600 text-white"
                >
                  <FaTag className="mr-2" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center">
                <FaUser className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <FaCalendar className="mr-2" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" />
                <span>{post.readTime} min de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Imagem destacada */}
      {post.image && (
        <div className="relative h-64 md:h-96">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Conteúdo do Post */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw, rehypeHighlight]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Gostou do conteúdo?</h2>
            <p className="text-xl text-emerald-100 mb-8">
              Que tal conversarmos sobre como aplicar essas estratégias no seu
              negócio?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contato"
                className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Agendar Conversa
              </Link>
              <Link
                href="/blog"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-emerald-600 transition-colors"
              >
                Ver Mais Artigos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: post.image,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "meuCTOdigital.com",
              logo: {
                "@type": "ImageObject",
                url: "https://meuctodigital.com/favicon.svg",
              },
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://meuctodigital.com/blog/${post.slug}`,
            },
          }),
        }}
      />
    </article>
  );
}
