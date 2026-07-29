// AUTO-GENERATED optimized image variants (CDN pointers)

import dash_1280_avif from "@/assets/opt/dash-1280.avif.asset.json";
import dash_1280_webp from "@/assets/opt/dash-1280.webp.asset.json";
import dash_640_avif from "@/assets/opt/dash-640.avif.asset.json";
import dash_640_webp from "@/assets/opt/dash-640.webp.asset.json";
import dash_960_avif from "@/assets/opt/dash-960.avif.asset.json";
import dash_960_jpg from "@/assets/opt/dash-960.jpg.asset.json";
import dash_960_webp from "@/assets/opt/dash-960.webp.asset.json";
import icon_128_avif from "@/assets/opt/icon-128.avif.asset.json";
import icon_128_webp from "@/assets/opt/icon-128.webp.asset.json";
import icon_256_avif from "@/assets/opt/icon-256.avif.asset.json";
import icon_256_png from "@/assets/opt/icon-256.png.asset.json";
import icon_256_webp from "@/assets/opt/icon-256.webp.asset.json";
import icon_384_avif from "@/assets/opt/icon-384.avif.asset.json";
import icon_384_webp from "@/assets/opt/icon-384.webp.asset.json";
import poster_1280_avif from "@/assets/opt/poster-1280.avif.asset.json";
import poster_1280_webp from "@/assets/opt/poster-1280.webp.asset.json";
import poster_640_avif from "@/assets/opt/poster-640.avif.asset.json";
import poster_640_webp from "@/assets/opt/poster-640.webp.asset.json";
import poster_960_avif from "@/assets/opt/poster-960.avif.asset.json";
import poster_960_jpg from "@/assets/opt/poster-960.jpg.asset.json";
import poster_960_webp from "@/assets/opt/poster-960.webp.asset.json";
import supports_490_avif from "@/assets/opt/supports-490.avif.asset.json";
import supports_490_webp from "@/assets/opt/supports-490.webp.asset.json";
import supports_720_avif from "@/assets/opt/supports-720.avif.asset.json";
import supports_720_png from "@/assets/opt/supports-720.png.asset.json";
import supports_720_webp from "@/assets/opt/supports-720.webp.asset.json";
import wordmark_200_avif from "@/assets/opt/wordmark-200.avif.asset.json";
import wordmark_200_webp from "@/assets/opt/wordmark-200.webp.asset.json";
import wordmark_400_avif from "@/assets/opt/wordmark-400.avif.asset.json";
import wordmark_400_png from "@/assets/opt/wordmark-400.png.asset.json";
import wordmark_400_webp from "@/assets/opt/wordmark-400.webp.asset.json";

type Variants = { avif: Record<number, string>; webp: Record<number, string>; fallback: { url: string; width: number } };

export const dashImg: Variants = {
  avif: { 640: dash_640_avif.url, 960: dash_960_avif.url, 1280: dash_1280_avif.url },
  webp: { 640: dash_640_webp.url, 960: dash_960_webp.url, 1280: dash_1280_webp.url },
  fallback: { url: dash_960_jpg.url, width: 960 },
};

export const iconImg: Variants = {
  avif: { 128: icon_128_avif.url, 256: icon_256_avif.url, 384: icon_384_avif.url },
  webp: { 128: icon_128_webp.url, 256: icon_256_webp.url, 384: icon_384_webp.url },
  fallback: { url: icon_256_png.url, width: 256 },
};

export const posterImg: Variants = {
  avif: { 640: poster_640_avif.url, 960: poster_960_avif.url, 1280: poster_1280_avif.url },
  webp: { 640: poster_640_webp.url, 960: poster_960_webp.url, 1280: poster_1280_webp.url },
  fallback: { url: poster_960_jpg.url, width: 960 },
};

export const supportsImg: Variants = {
  avif: { 490: supports_490_avif.url, 720: supports_720_avif.url },
  webp: { 490: supports_490_webp.url, 720: supports_720_webp.url },
  fallback: { url: supports_720_png.url, width: 720 },
};

export const wordmarkImg: Variants = {
  avif: { 200: wordmark_200_avif.url, 400: wordmark_400_avif.url },
  webp: { 200: wordmark_200_webp.url, 400: wordmark_400_webp.url },
  fallback: { url: wordmark_400_png.url, width: 400 },
};

export function srcSet(map: Record<number, string>) {
  return Object.entries(map).map(([w, url]) => `${url} ${w}w`).join(", ");
}
