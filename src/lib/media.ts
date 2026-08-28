// Helpers for delivering project media sharply.
//
// Project stills come from two places: Cloudinary (raw PNG URLs, no transforms)
// and local pre-optimized WebP in `public/projects/` with a `-480` companion.
// The old inline srcSet assumed every src was a local `.webp`, so Cloudinary
// URLs got a broken `/projects/<name>.png` candidate that 404s on narrow
// viewports, and the full PNG was always shipped un-resized.

const UPLOAD_MARKER = "/image/upload/";

export function isCloudinary(src: string): boolean {
  return src.includes("res.cloudinary.com") && src.includes(UPLOAD_MARKER);
}

/** Insert Cloudinary delivery transforms right after `/image/upload/`.
 *  `c_limit` never upscales past the original; `f_auto` serves WebP/AVIF. */
export function cloudinary(src: string, width: number): string {
  const i = src.indexOf(UPLOAD_MARKER);
  if (i === -1) return src;
  const head = src.slice(0, i + UPLOAD_MARKER.length);
  const tail = src.slice(i + UPLOAD_MARKER.length);
  return `${head}f_auto,q_auto:good,c_limit,w_${width}/${tail}`;
}

const WIDTHS = [480, 640, 960, 1280, 1920];

/** Responsive srcSet for a project still, or `undefined` when we can't build
 *  a trustworthy one (caller then falls back to bare `src`). */
export function imageSrcSet(src: string): string | undefined {
  if (isCloudinary(src)) {
    return WIDTHS.map((w) => `${cloudinary(src, w)} ${w}w`).join(", ");
  }
  if (src.endsWith(".webp") && src.includes("/projects/")) {
    return `${src.replace(".webp", "-480.webp")} 480w, ${src} 1280w`;
  }
  return undefined;
}

/** Single URL for a full-resolution / full-screen view. */
export function fullResImage(src: string): string {
  return isCloudinary(src) ? cloudinary(src, 1920) : src;
}
