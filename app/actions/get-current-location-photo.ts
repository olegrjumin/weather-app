import { currentPhotoResponse } from "../mock-data/current-photo";

const apiKeyPresent =
  process.env.UNSPLASH_API_KEY && process.env.UNSPLASH_SECRET_KEY;

if (!apiKeyPresent && process.env.NEXT_PUBLIC_USE_MOCK_API !== "true") {
  throw new Error("Unsplash API key and secret are required");
}

export const getCurrentLocationPhoto = async (
  keywords: string[]
): Promise<typeof currentPhotoResponse> => {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${keywords.join(
      ","
    )}&client_id=${process.env.UNSPLASH_API_KEY}&client_secret=${
      process.env.UNSPLASH_SECRET_KEY
    }&orientation=landscape`,
    {
      next: {
        revalidate: 1800,
      },
    }
  );
  const data = await response.json();

  return data;
};
