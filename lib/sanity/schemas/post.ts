const defineType = <T,>(config: T): T => config;
const defineField = <T,>(config: T): T => config;

export const postSchema = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt / Short Summary",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "readTime",
      title: "Estimated Read Time",
      type: "string",
      initialValue: "5 min read",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "text",
      rows: 15,
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});
