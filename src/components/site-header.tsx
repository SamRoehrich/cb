import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center px-4">
        <Link href="/" className="mr-8 flex items-center">
          <span className="hidden text-xl font-bold sm:inline-block">Chasing Bourbon</span>
          <span className="text-xl font-bold sm:hidden">CB</span>
        </Link>
        
        <nav className="hidden md:flex flex-1 items-center gap-6">
          <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
            Shop
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            New Arrivals
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Best Sellers
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            Sale
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>
        
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild className="md:hidden mr-2">
              <Button variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/shop" className="text-base font-medium transition-colors hover:text-primary">
                  Shop
                </Link>
                <Link href="#" className="text-base font-medium transition-colors hover:text-primary">
                  New Arrivals
                </Link>
                <Link href="#" className="text-base font-medium transition-colors hover:text-primary">
                  Best Sellers
                </Link>
                <Link href="#" className="text-base font-medium transition-colors hover:text-primary">
                  Sale
                </Link>
                <Link href="#" className="text-base font-medium transition-colors hover:text-primary">
                  About
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          
          <Link href="#" className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              <span className="sr-only">Cart</span>
            </Button>
            <span className="relative -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}