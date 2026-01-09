import { Button } from "@/components/ui/button";
import heroChair from "@/assets/hero-chair.jpg";
import chairLifestyle from "@/assets/chair-lifestyle.jpg";
import blueChair from "@/assets/blue-chair.jpg";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "The Mosaic",
      description: "Colorful accent chair made from 500+ recycled caps",
      price: "$349",
      image: heroChair,
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "The Classic Blue",
      description: "Durable and comfortable design in vibrant blue",
      price: "$299",
      image: blueChair,
      badge: "New",
    },
    {
      id: 3,
      name: "The Minimal",
      description: "Sleek monochrome design for modern spaces",
      price: "$379",
      image: chairLifestyle,
      badge: null,
    },
  ];

  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Collection
          </p>
          <h2 className="text-title lg:text-hero font-semibold text-foreground mb-6">
            Designed for life.
          </h2>
          <p className="text-lg text-muted-foreground">
            Each chair is unique, crafted from recycled materials 
            with durability and comfort in mind.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-secondary rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-floating"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-foreground text-background rounded-full">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-foreground">
                    {product.price}
                  </span>
                  <Button variant="default" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
