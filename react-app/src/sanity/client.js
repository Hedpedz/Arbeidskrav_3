import sanityClient from '@sanity/client';
import client from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'x9fw47rf', // Finn dette i Sanity Studio
  dataset: 'production',
  apiVersion: '2023-01-01', // Bruk en aktuell API-versjon
  useCdn: false, // For raskere lesing, men uten token for skriving
});

