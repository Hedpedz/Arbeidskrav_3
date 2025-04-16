import sanityClient from '@sanity/client';
import client from '@sanity/client';

export const client = sanityClient({
  projectId: 'x9fw47rf', 
  dataset: 'production',
  apiVersion: '2023-01-01', 
  useCdn: false, 
});

