import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'c5g69vfr', 
  dataset: 'production',
  apiVersion: '2023-01-01', 
  useCdn: false, 
});

