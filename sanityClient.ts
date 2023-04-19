import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "drqc1bit",
  dataset: "production",
  useCdn: true,
});
