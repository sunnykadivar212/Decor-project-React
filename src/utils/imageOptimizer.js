/**
 * Helper utility to optimize Cloudinary and Unsplash image URLs
 * Converts full-size uncompressed images to auto-WebP/AVIF formats at optimal display resolutions.
 */

export function optimizeImageUrl(url, options = {}) {
  if (!url || typeof url !== 'string') return url;

  const { width = 800, quality = 75 } = options;

  // Cloudinary Optimization
  if (url.includes('res.cloudinary.com')) {
    // If transformations are already present, return
    if (url.includes('f_auto,q_auto')) {
      return url;
    }

    // Insert transformations after /upload/
    const uploadIndex = url.indexOf('/upload/');
    if (uploadIndex !== -1) {
      const prefix = url.substring(0, uploadIndex + 8);
      const suffix = url.substring(uploadIndex + 8);
      return `${prefix}f_auto,q_auto,w_${width},c_limit/${suffix}`;
    }
  }

  // Unsplash Optimization
  if (url.includes('images.unsplash.com')) {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('auto', 'format');
      urlObj.searchParams.set('fit', 'crop');
      urlObj.searchParams.set('q', quality.toString());
      if (!urlObj.searchParams.has('w')) {
        urlObj.searchParams.set('w', width.toString());
      }
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  return url;
}

/**
 * Image size presets for common UI contexts
 */
export const IMAGE_PRESETS = {
  THUMB: { width: 300, quality: 70 },
  CARD: { width: 600, quality: 75 },
  GRID: { width: 800, quality: 80 },
  HERO: { width: 1400, quality: 80 },
  FULL: { width: 1920, quality: 85 }
};
