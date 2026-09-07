import createImageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "./config";

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
});

export const urlFor = (source: any) => {
  return imageBuilder.image(source);
};
