import React from 'react';

interface SchemaMarkupProps {
  type: 'LocalBusiness' | 'DentalClinic' | 'Article' | 'WebPage' | 'FAQPage';
  data: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  let schema;

  switch (type) {
    case 'LocalBusiness':
    case 'DentalClinic':
      schema = {
        '@context': 'https://schema.org',
        '@type': type,
        name: data.name,
        image: data.image,
        '@id': data.url,
        url: data.url,
        telephone: data.telephone,
        priceRange: data.priceRange,
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.address.streetAddress,
          addressLocality: data.address.addressLocality,
          addressRegion: data.address.addressRegion,
          postalCode: data.address.postalCode,
          addressCountry: data.address.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: data.geo.latitude,
          longitude: data.geo.longitude,
        },
        openingHoursSpecification: data.openingHoursSpecification,
        sameAs: data.sameAs,
      };
      break;
    case 'Article':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.headline,
        image: data.image,
        author: {
          '@type': 'Person',
          name: data.author.name,
        },
        publisher: {
          '@type': 'Organization',
          name: data.publisher.name,
          logo: {
            '@type': 'ImageObject',
            url: data.publisher.logo,
          },
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified,
        description: data.description,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url,
        },
      };
      break;
    case 'WebPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: data.name,
        description: data.description,
        url: data.url,
        isPartOf: {
          '@type': 'WebSite',
          name: data.websiteName,
          url: data.websiteUrl,
        },
      };
      break;
    case 'FAQPage':
      schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions.map((q: any) => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: q.answer,
          },
        })),
      };
      break;
    default:
      schema = {};
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
