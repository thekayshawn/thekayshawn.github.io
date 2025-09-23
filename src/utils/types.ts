import type { MarkdownHeading } from "astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type MarkdownContent = Promise<{
  Content: AstroComponentFactory;
  headings: MarkdownHeading[];
  remarkPluginFrontmatter: Record<string, any>;
}>;
