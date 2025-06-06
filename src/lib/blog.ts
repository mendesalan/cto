import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readTime: number;
  featured?: boolean;
  image?: string;
  content: string;
}

const BLOG_DIRECTORY = path.join(process.cwd(), "src/content/blog");

// Função para calcular tempo de leitura (aprox. 200 palavras por minuto)
function calculateReadTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

// Obter todos os posts
export function getAllPosts(): BlogPost[] {
  try {
    const files = fs.readdirSync(BLOG_DIRECTORY);

    const posts = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const slug = file.replace(/\.md$/, "");
        const fullPath = path.join(BLOG_DIRECTORY, file);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || "Sem título",
          description: data.description || "",
          date: data.date || new Date().toISOString(),
          author: data.author || "Alan Mendes",
          tags: data.tags || [],
          readTime: calculateReadTime(content),
          featured: data.featured || false,
          image: data.image,
          content,
        } as BlogPost;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (error) {
    console.error("Erro ao carregar posts:", error);
    return [];
  }
}

// Obter post por slug
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "Sem título",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "Alan Mendes",
      tags: data.tags || [],
      readTime: calculateReadTime(content),
      featured: data.featured || false,
      image: data.image,
      content,
    } as BlogPost;
  } catch (error) {
    console.error(`Erro ao carregar post ${slug}:`, error);
    return null;
  }
}

// Obter posts em destaque
export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts().filter((post) => post.featured);
}

// Obter posts por tag
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
}

// Obter todas as tags únicas
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = posts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
}

// Formatar data
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
