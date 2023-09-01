import { createClient } from "@sanity/client";

// Initialize the client with your project configuration
const client = createClient({
  projectId: "gdle0r99",
  dataset: "production",
  token:
    "sk0MKCJ64LqTGnhRmY6s1scmdHoxpETBvkWLLGSiIIpXoQZRYVAXko9play5On9KMPUsoNemJXj2IzeJsDwPrzTRLrXbC8BhsdinsJ9m4eciYYHGO0Avk35LMe18V43jxJuWOldUHQTNZRTB8uEWweJFzK8FxDgnrYEusEJzpsDKSd5NnsEG", 
  useCdn: false, 
  apiVersion: "2021-08-31",
});

const filter = '*[_type == "order" && _id == "tzdEyr97zxiAiQezMXTuiz"]';

client
  .delete({ query: filter })
  .then((response) => {
    console.log(`Deleted ${response.results.length} documents.`);
  })
  .catch((error) => {
    console.error("Error deleting documents:", error);
  });
