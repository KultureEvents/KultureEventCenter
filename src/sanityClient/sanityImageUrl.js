import ImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = ImageUrlBuilder(client);

export function urlForImage(source) {
  return builder?.image(source).auto("format").fit("max");
}
