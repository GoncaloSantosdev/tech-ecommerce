// Data
import productsSampleData from "@/data/productsSampleData";
// Components
import { ProductCard } from "@/features/product/components";
// Icons
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const ProductList = () => {
  const limit = 7;

  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">
        Apple Products
      </h2>
      {productsSampleData.products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center text-muted-foreground space-y-4">
          <ShoppingBagIcon className="w-12 h-12 text-border" />

          <div>
            <h3 className="text-lg font-medium text-foreground tracking-tight">
              No products found
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Please check back later or adjust your filters.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsSampleData.products.slice(0, limit).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
