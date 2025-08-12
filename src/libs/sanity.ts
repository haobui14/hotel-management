import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_STUDIO_TOKEN,
  apiVersion: "2025-01-01", // Updated to latest API version
  perspective: "published", // Only return published documents
});

export default sanityClient;
