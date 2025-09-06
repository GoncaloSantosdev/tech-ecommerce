import Link from "next/link";
import Image from "next/image";
// Types
import { Product } from "../types";
// Icons
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

const ProductCard = ({ product }: { product: Product }) => {
  const filledStars = Math.floor(product.rating);
  const emptyStars = 5 - filledStars;

  return (
    <div className="group relative bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <Link href={`/product/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative w-full aspect-[4/3] bg-neutral-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="text-base font-semibold text-neutral-900 tracking-tight group-hover:text-accent transition-colors duration-200">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(filledStars)].map((_, i) => (
              <StarSolid
                key={`filled-${i}`}
                className="w-4 h-4 text-yellow-400"
              />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
              <StarOutline key={`empty-${i}`} className="w-4 h-4 text-border" />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.numReviews})
            </span>
          </div>

          <p className="text-sm text-neutral-500 leading-snug line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-medium text-neutral-900 tracking-wide">
              €{product.price.toFixed(2)}
            </span>

            <span className="text-xs text-neutral-400 uppercase tracking-wide">
              {product.brand}
            </span>
          </div>
        </div>

        {/* Out of stock badge */}
        {product.stock === 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
            Out of stock
          </div>
        )}
      </Link>
    </div>
  );
};

export default ProductCard;
