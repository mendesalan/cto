import { getAllPosts, getFeaturedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { FaClock, FaTag, FaUser } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Blog | meuCTOdigital.com - Insights de Tecnologia e Negócios",
  description:
    "Artigos sobre arquitetura de software, CTO on demand, e estratégias técnicas para negócios digitais por Alan Mendes.",
  keywords: [
    "blog tecnologia",
    "arquitetura software",
    "CTO on demand",
    "consultoria técnica",
    "negócios digitais",
    "Alan Mendes",
    "insights tecnologia",
  ],
  openGraph: {
    title: "Blog | meuCTOdigital.com - Insights de Tecnologia e Negócios",
    description:
      "Artigos sobre arquitetura de software, CTO on demand, e estratégias técnicas para negócios digitais por Alan Mendes.",
    type: "website",
    url: "https://meuctodigital.com/blog",
    siteName: "meuCTOdigital.com",
    locale: "pt_BR",
    images: [
      {
        url: "/aboutme.jpeg",
        width: 1200,
        height: 630,
        alt: "Alan Mendes - Blog sobre arquitetura de software e CTO on demand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | meuCTOdigital.com - Insights de Tecnologia e Negócios",
    description:
      "Artigos sobre arquitetura de software, CTO on demand, e estratégias técnicas para negócios digitais.",
    images: ["/aboutme.jpeg"],
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const regularPosts = allPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header do Blog */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 pt-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog meuCTOdigital
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Insights de um <strong>CTO</strong> sobre{" "}
              <strong>arquitetura de software</strong>, estratégias técnicas e
              como <strong>escalar negócios digitais</strong> de forma
              inteligente.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Posts em Destaque */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Posts em Destaque
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {post.image && (
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Destaque
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FaUser className="mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <FaClock className="mr-2" />
                      <span>{post.readTime} min de leitura</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-700"
                          >
                            <FaTag className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <time className="text-sm text-gray-500">
                        {formatDate(post.date)}
                      </time>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Todos os Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Todos os Artigos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.image && (
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FaUser className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <FaClock className="mr-2" />
                    <span>{post.readTime} min de leitura</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4">{post.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-700"
                        >
                          <FaTag className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <time className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Quer receber insights diretamente?
          </h2>
          <p className="text-emerald-100 mb-6">Agende uma conversa. comigo.</p>
          <Link
            href="/#contato"
            className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Agendar Conversa
          </Link>
        </section>
      </div>
    </div>
  );
}
