// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// export function getRandomImage(images: string[]): string {
//   const randomIndex = Math.floor(Math.random() * images.length)
//   return images[randomIndex]
// }

// utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// --- Image Picking Logic ---

// This will hold the current list of images available for selection in the cycle.
// We use a Map to ensure proper handling of different 'images' arrays passed.
const _availableImagePools = new Map<string, string[]>();

/**
 * Gets a random image, ensuring no duplicates until all are shown.
 * The pool resets only after all images have been returned.
 *
 * @param images The full list of image paths to cycle through.
 * This array instance is used as a key for its unique pool.
 * @returns A unique random image path from the list.
 */
export function getRandomImage(images: string[]): string {
  // Generate a stable key for the given 'images' array.
  // This ensures different sets of input images get their own pools.
  const poolKey = JSON.stringify(images.sort()); // Sort for consistent key regardless of input order

  let currentPool = _availableImagePools.get(poolKey);

  // If the pool for this set of images doesn't exist or is empty,
  // re-initialize it with a fresh copy of all images and shuffle it.
  if (!currentPool || currentPool.length === 0) {
    currentPool = [...images]; // Create a shallow copy
    // Simple inline shuffle (Fisher-Yates variant)
    for (let i = currentPool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [currentPool[i], currentPool[j]] = [currentPool[j], currentPool[i]]; // Swap
    }
    _availableImagePools.set(poolKey, currentPool);
  }

  // Pop the last image from the shuffled array.
  // This effectively "removes" it from the current pool for this cycle.
  const selectedImage = currentPool.pop()!; // '!' asserts it won't be undefined here

  return selectedImage;
}

// --- End Image Picking Logic ---