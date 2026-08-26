import { srcSet } from "@/lib/optimized-images";

type Variants = {
  avif: Record<number, string>;
  webp: Record<number, string>;
  fallback: { url: string; width: number };
};

export function OptImage({
  variants,
  alt,
  sizes,
  width,
  height,
  className,
  priority = false,
  fetchPriority,
  style,
}: {
  variants: Variants;
  alt: string;
  sizes: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  fetchPriority?: "high" | "low" | "auto";
  style?: React.CSSProperties;
}) {
  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet(variants.avif)} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(variants.webp)} sizes={sizes} />
      <img
        src={variants.fallback.url}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={className}
        style={style}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={fetchPriority ?? (priority ? "high" : undefined)}
      />
    </picture>
  );
}
