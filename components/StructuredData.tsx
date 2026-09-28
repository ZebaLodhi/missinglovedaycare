import { site } from "@/data/site";
import { siteUrl } from "@/app/layout";

/**
 * Schema.org data for local search. TODO: once the real opening hours are
 * confirmed in data/site.ts, mirror them in `openingHoursSpecification` below.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    name: site.name,
    description: site.shortDescription,
    url: siteUrl,
    image: `${siteUrl}/brand/missing-love-daycare-badge.jpg`,
    telephone: site.phone,
    email: site.email,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    hasMap: site.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:30",
        closes: "18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
