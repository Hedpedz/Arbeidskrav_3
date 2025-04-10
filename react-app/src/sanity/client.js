import SanityClientConstructor from "@sanity/client";

export const client = SanityClientConstructor({
  projectId: "x9fw47rf",
  dataset: "production",
  apiVersion: "v2025-03-24",
  useCdn: false,
});
