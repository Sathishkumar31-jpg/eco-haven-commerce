import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Truck, Shield, Leaf, Award } from "lucide-react";

const EcoCommerce = () => {
  const products = [
    {
      id: 1,
      name: "Organic Himalayan Honey",
      price: "$24.99",
      originalPrice: "$29.99",
      rating: 4.8,
      reviews: 245,
      image: "/api/placeholder/250/200",
      seller: "Mountain Bee Farm",
      badges: ["Organic", "Fair Trade", "Local"],
      inStock: true
    },
    {
      id: 2,
      name: "Handwoven Bamboo Baskets",
      price: "$18.50",
      originalPrice: null,
      rating: 4.9,
      reviews: 127,
      image: "/api/placeholder/250/200",
      seller: "Rural Craftsmen Co-op",
      badges: ["Handmade", "Sustainable", "Traditional"],
      inStock: true
    },
    {
      id: 3,
      name: "Organic Turmeric Powder",
      price: "$12.99",
      originalPrice: "$15.99",
      rating: 4.7,
      reviews: 389,
      image: "/api/placeholder/250/200",
      seller: "Spice Valley Farms",
      badges: ["Organic", "Medicinal", "Fresh"],
      inStock: false
    },
    {
      id: 4,
      name: "Tribal Art Wall Hangings",
      price: "$45.00",
      originalPrice: null,
      rating: 4.9,
      reviews: 78,
      image: "/api/placeholder/250/200",
      seller: "Indigenous Artists Guild",
      badges: ["Handmade", "Cultural", "Unique"],
      inStock: true
    }
  ];

  const categories = [
    { name: "Organic Produce", count: 1240, icon: Leaf },
    { name: "Handicrafts", count: 856, icon: Award },
    { name: "Spices & Herbs", count: 432, icon: Star },
    { name: "Textiles", count: 298, icon: Shield }
  ];

  return (
    <section id="eco-commerce" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-nature-green">Eco-Commerce</span> Marketplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Shop authentic, sustainable products directly from local farmers and artisans. 
            Every purchase supports rural communities and environmental conservation.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-all duration-300 cursor-pointer group">
              <CardContent className="p-6">
                <category.icon className="h-8 w-8 text-nature-green mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-1">{category.name}</h4>
                <p className="text-sm text-muted-foreground">{category.count} items</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-foreground">Featured Products</h3>
            <Button variant="outline">View All Products</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-nature transition-all duration-300 group">
                <div className="aspect-square bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-sunset opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                  </div>
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="secondary" className="bg-destructive text-destructive-foreground">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.badges.slice(0, 2).map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs bg-white/90">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm">by {product.seller}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-sunset-orange text-sunset-orange mr-1" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-muted-foreground ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-nature-green hover:bg-nature-green-light" 
                    disabled={!product.inStock}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust & Sustainability */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6">
            <Shield className="h-12 w-12 text-nature-green mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Verified Sellers</h4>
            <p className="text-sm text-muted-foreground">
              All our partner farmers and artisans are verified for quality and authenticity
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <Truck className="h-12 w-12 text-nature-green mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Direct from Source</h4>
            <p className="text-sm text-muted-foreground">
              Products shipped directly from producers, ensuring freshness and fair pricing
            </p>
          </Card>
          
          <Card className="text-center p-6">
            <Leaf className="h-12 w-12 text-nature-green mx-auto mb-4" />
            <h4 className="font-semibold text-foreground mb-2">Eco-Friendly Packaging</h4>
            <p className="text-sm text-muted-foreground">
              Biodegradable and minimal packaging to reduce environmental impact
            </p>
          </Card>
        </div>

        {/* Blockchain Traceability */}
        <div className="bg-gradient-nature rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Blockchain-Verified Authenticity
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Every product comes with a blockchain certificate of authenticity, 
            tracing its journey from farm to your doorstep. Scan the QR code to verify origin.
          </p>
          <Button className="bg-white text-nature-green hover:bg-white/90">
            Learn More About Traceability
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EcoCommerce;