import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'c5g69vfr', 
  dataset: 'production',
  apiVersion: 'v2025-07-04', 
  useCdn: false, 
});

