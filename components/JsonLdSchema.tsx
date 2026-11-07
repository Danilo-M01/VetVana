import React from "react";

export default function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["VeterinaryCare", "MedicalBusiness"],
    name: "Vet Vana",
    alternateName: ["Ana Vet", "Veterinarska ambulanta Vet Vana Novi Beograd"],
    description:
      "Specijalizovana veterinarska ambulanta na Novom Beogradu za hirurgiju, ptice i egzotične životinje. dr Ana Vukićević i dr Ivana Nikić.",
    url: "https://vetvana.rs",
    telephone: "+381638522855",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dr Ivana Ribara 115A",
      addressLocality: "Novi Beograd",
      postalCode: "11070",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8015,
      longitude: 20.3789,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "24",
      bestRating: "5",
      worstRating: "1",
    },
    medicalSpecialty: [
      "Veterinary Surgery",
      "Avian and Exotic Animal Medicine",
      "Small Animal Internal Medicine",
    ],
    employee: [
      {
        "@type": "Person",
        name: "dr Ana Vukićević",
        jobTitle: "dr vet. spec. hirurgije",
      },
      {
        "@type": "Person",
        name: "dr Ivana Nikić",
        jobTitle: "dr vet. spec. za egzote",
      },
    ],
    sameAs: [
      "https://www.instagram.com/vet.vana/",
      "https://www.facebook.com/p/VetVana-61587336683712/",
      "https://www.companywall.rs/firma/vet-vana/MMxH62700",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
