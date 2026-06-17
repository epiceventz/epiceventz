import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = ""
}: MetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: "/images/hero-event.jpg",
          width: 1200,
          height: 630,
          alt: "Cinematic event production by Epic Eventz"
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero-event.jpg"]
    }
  };
}
