import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import productsData from "./chasing-bourbon-products.json";

// Transform the flat product data into categorized data
function getCategorizedProducts(products) {
  const categories = new Set();

  // Extract unique categories
  products.forEach(product => {
    const productCategories = product.category.split(', ');
    productCategories.forEach(category => categories.add(category));
  });

  return Array.from(categories).sort();
}

export default function Shop() {
  const { products } = productsData;
  const categories = getCategorizedProducts(products);

  return (
    <div className="container px-4 py-8 mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Chasing Bourbon Shop</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Premium bourbon-themed apparel and glassware for enthusiasts
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Filters
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m6 9 6 6 6-6"/></svg>
            </Button>

            <Button variant="outline" size="sm" className="flex items-center gap-1">
              Sort by: Featured
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m6 9 6 6 6-6"/></svg>
            </Button>
          </div>

          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 rounded-md border border-input bg-background h-10 text-sm"
            />
          </div>
        </div>

        <Separator className="my-6" />
      </header>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="mb-6 flex flex-wrap">
          <TabsTrigger value="all">All Products</TabsTrigger>
          {categories.map(category => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.url} product={product} />
            ))}
          </div>
        </TabsContent>

        {categories.map(category => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter(product => product.category.includes(category))
                .map((product) => (
                  <ProductCard key={product.url} product={product} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function ProductCard({ product }) {
  const isSale = product.category.includes("Sale Item");

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative">
          <AspectRatio ratio={1 / 1.3} className="bg-muted/30">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </AspectRatio>

          {isSale && (
            <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive" variant="secondary">
              SALE
            </Badge>
          )}

          {product.rating && (
            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-background/80 text-foreground px-2 py-1 rounded-md text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 fill-primary"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>{product.rating}</span>
            </div>
          )}

          <div className="absolute inset-0 bg-foreground/0 hover:bg-foreground/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" size="sm" className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> Quick View
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{product.name}</DialogTitle>
                  <DialogDescription>{product.price}</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AspectRatio ratio={1 / 1.3} className="bg-muted/30">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-xl font-bold mb-4">{product.price}</p>
                    <p className="text-muted-foreground mb-6">
                      Premium quality bourbon-themed merchandise, perfect for enthusiasts and collectors.
                    </p>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Add to Cart</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg> Add to Cart
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-grow">
        <h3 className="font-medium line-clamp-2 mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.category}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="font-semibold">{product.price}</div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg> Add
        </Button>
      </CardFooter>
    </Card>
  );
}
