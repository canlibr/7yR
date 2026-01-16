import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const placeholderImages: ImagePlaceholder[] = data.placeholderImages;

const imageMap = new Map<string, ImagePlaceholder>(
  placeholderImages.map(image => [image.id, image])
);

export const getImageById = (id: string): ImagePlaceholder | undefined => {
  return imageMap.get(id);
};

export const getImagesByIds = (ids: string[]): ImagePlaceholder[] => {
  return ids.map(id => imageMap.get(id)).filter((image): image is ImagePlaceholder => !!image);
};
