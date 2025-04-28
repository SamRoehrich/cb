import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/90 to-black/80"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1974&auto=format&fit=crop')" 
          }}
        ></div>
        
        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-2xl">
            <Badge className="mb-4">Premium Collection</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Celebrate the Spirit of Bourbon</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Discover our exclusive bourbon-themed merchandise for true enthusiasts
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Shop Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CategoryCard 
              title="T-Shirts" 
              image="https://chasing-bourbon.com/wp-content/uploads/2025/03/got-blantons-Mens-T-shirt-front-550x712.png"
              description="Show your bourbon pride with our premium soft cotton tees"
              href="/shop"
            />
            
            <CategoryCard 
              title="Glassware" 
              image="https://chasing-bourbon.com/wp-content/uploads/2022/05/BOURBON_clear-550x712.jpg"
              description="Elevate your drinking experience with our custom glassware"
              href="/shop"
            />
            
            <CategoryCard 
              title="Accessories" 
              image="https://chasing-bourbon.com/wp-content/uploads/2025/01/Kentucky-Made-Ice-Mold-550x712.jpg"
              description="Complete your collection with our exclusive accessories"
              href="/shop"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Featured Products</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our most popular items, handpicked for bourbon enthusiasts like you
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeaturedProductCard 
              title="got blanton's? Super Soft T-shirt"
              price="$27.99 – $32.99"
              image="https://chasing-bourbon.com/wp-content/uploads/2025/03/got-blantons-Mens-T-shirt-front-550x712.png"
              href="/shop"
            />
            
            <FeaturedProductCard 
              title="BOURBON Glencarin Glass"
              price="$15.99"
              image="https://chasing-bourbon.com/wp-content/uploads/2022/05/BOURBON_clear-550x712.jpg"
              href="/shop"
            />
            
            <FeaturedProductCard 
              title="Bourbon Life Pull-Over Hoodie"
              price="$41.99 – $45.99"
              image="https://chasing-bourbon.com/wp-content/uploads/2023/10/Bourbon-Life-Hoodie-Front-550x712.png"
              href="/shop"
            />
            
            <FeaturedProductCard 
              title="Enjoy Bour~Bon Vintage T-Shirt"
              price="$15.00 – $33.00"
              badge="SALE"
              image="https://chasing-bourbon.com/wp-content/uploads/2025/03/enjoy-Bourbon-mens-t-shirt-front-550x712.png"
              href="/shop"
            />
          </div>
          
          <div className="flex justify-center mt-10">
            <Link href="/shop">
              <Button size="lg" variant="outline" className="min-w-[200px]">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg>
            
            <blockquote className="text-xl md:text-2xl font-medium mb-8">
              "I've been collecting bourbon-themed merchandise for years, and Chasing Bourbon's quality and designs are simply unmatched. The attention to detail and the premium feel of their products make them stand out from the competition."
            </blockquote>
            
            <div className="font-medium">
              <p className="text-lg">John D.</p>
              <p className="text-sm text-muted-foreground">Bourbon Enthusiast</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-[#00532c] text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your bourbon experience?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of bourbon enthusiasts who've found their perfect bourbon-themed merchandise.
          </p>
          
          <Link href="/shop">
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              Shop the Collection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({ title, image, description, href }) {
  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
        <div className="relative pt-[100%]">
          <img 
            src={image} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

function FeaturedProductCard({ title, price, image, badge, href }) {
  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
        <div className="relative pt-[130%]">
          <img 
            src={image} 
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {badge && (
            <Badge className="absolute top-2 right-2 bg-destructive hover:bg-destructive" variant="secondary">
              {badge}
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-2 mb-1">{title}</h3>
          <p className="text-sm font-semibold">{price}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
