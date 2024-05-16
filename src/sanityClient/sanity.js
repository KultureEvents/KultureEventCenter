import { createClient } from "next-sanity";

const apiVersion = "2024-04-28";
const dataset = "production";
const projectId = "trhqtvwv";
const useCdn = true;

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
