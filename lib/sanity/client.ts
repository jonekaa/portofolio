import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, isSanityConfigured } from "./config";
import { projectsData, Project } from "../data/projects";
import { blogPostsData, BlogPost } from "../data/blog";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

/**
 * Fetch all portfolio projects.
 * Gracefully returns curated local projects if Sanity is not yet configured or fails.
 */
export async function getProjects(): Promise<Project[]> {
  if (!client) {
    return projectsData;
  }

  try {
    const sanityProjects = await client.fetch<Project[]>(
      `*[_type == "project"] | order(_createdAt desc) {
        "slug": slug.current,
        title,
        subtitle,
        category,
        isFeatured,
        summary,
        githubUrl,
        liveUrl,
        tags
      }`
    );

    if (sanityProjects && sanityProjects.length > 0) {
      return sanityProjects;
    }
    return projectsData;
  } catch (error) {
    console.warn("Failed to fetch from Sanity, using local projects dataset:", error);
    return projectsData;
  }
}

/**
 * Fetch single project by slug.
 */
export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const localMatch = projectsData.find((p) => p.slug === slug);

  if (!client) {
    return localMatch;
  }

  try {
    const sanityProject = await client.fetch<Project>(
      `*[_type == "project" && slug.current == $slug][0] {
        "slug": slug.current,
        title,
        subtitle,
        category,
        isFeatured,
        summary,
        githubUrl,
        liveUrl,
        tags,
        "caseStudy": {
          "overview": detailedCaseStudy,
          "challenge": "",
          "architecture": [],
          "solution": "",
          "impact": [],
          "lessonsLearned": ""
        }
      }`,
      { slug }
    );

    return sanityProject || localMatch;
  } catch (error) {
    console.warn("Failed to fetch project by slug from Sanity, fallback to local:", error);
    return localMatch;
  }
}

/**
 * Fetch all blog posts.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!client) {
    return blogPostsData;
  }

  try {
    const sanityPosts = await client.fetch<BlogPost[]>(
      `*[_type == "post"] | order(publishedAt desc) {
        "slug": slug.current,
        title,
        excerpt,
        publishedAt,
        readTime,
        category,
        tags,
        "content": body
      }`
    );

    if (sanityPosts && sanityPosts.length > 0) {
      return sanityPosts;
    }
    return blogPostsData;
  } catch (error) {
    console.warn("Failed to fetch blog posts from Sanity, using local blog dataset:", error);
    return blogPostsData;
  }
}

/**
 * Fetch single blog post by slug.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const localMatch = blogPostsData.find((b) => b.slug === slug);

  if (!client) {
    return localMatch;
  }

  try {
    const sanityPost = await client.fetch<BlogPost>(
      `*[_type == "post" && slug.current == $slug][0] {
        "slug": slug.current,
        title,
        excerpt,
        publishedAt,
        readTime,
        category,
        tags,
        "content": body
      }`,
      { slug }
    );

    return sanityPost || localMatch;
  } catch (error) {
    console.warn("Failed to fetch post by slug from Sanity, fallback to local:", error);
    return localMatch;
  }
}
