import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

// Explicitly welcome AI/answer-engine crawlers alongside traditional search
// bots so the portfolio is citable in AI search results (ChatGPT, Claude,
// Perplexity, Google AI Overviews).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
          "CCBot",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
