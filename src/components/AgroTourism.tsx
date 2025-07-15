import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mountain, MapPin, Calendar, Star, Users, Camera } from "lucide-react";

const AgroTourism = () => {
  const destinations = [
    {
      id: 1,
      name: "Himalayan Organic Farms",
      location: "Himachal Pradesh, India",
      rating: 4.8,
      reviews: 127,
      price: "$45/day",
      image: "/api/placeholder/300/200",
      tags: ["Organic", "Mountain", "Adventure"],
      description: "Experience traditional mountain farming with stunning valley views"
    },
    {
      id: 2,
      name: "Coastal Spice Gardens",
      location: "Kerala, India",
      rating: 4.9,
      reviews: 89,
      price: "$35/day",
      image: "/api/placeholder/300/200",
      tags: ["Spices", "Coastal", "Culture"],
      description: "Explore aromatic spice plantations and learn traditional cultivation"
    },
    {
      id: 3,
      name: "Tribal Handicraft Village",
      location: "Odisha, India",
      rating: 4.7,
      reviews: 156,
      price: "$28/day",
      image: "/api/placeholder/300/200",
      tags: ["Handicrafts", "Culture", "Community"],
      description: "Immerse in traditional art forms and sustainable craftsmanship"
    }
  ];

  const guides = [
    {
      name: "Priya Sharma",
      specialty: "Organic Farming",
      rating: 4.9,
      tours: 45,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Rajesh Kumar",
      specialty: "Mountain Trekking",
      rating: 4.8,
      tours: 62,
      image: "/api/placeholder/80/80"
    },
    {
      name: "Maya Patel",
      specialty: "Cultural Heritage",
      rating: 4.9,
      tours: 38,
      image: "/api/placeholder/80/80"
    }
  ];

  return (
    <section id="agro-tourism" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Discover <span className="text-nature-green">Agro-Tourism</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore authentic farming experiences, connect with local communities, and discover 
            sustainable agricultural practices in stunning natural settings.
          </p>
        </div>

        {/* Featured Destinations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Featured Destinations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-nature transition-all duration-300 group">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-earth opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90">
                      {destination.price}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{destination.name}</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {destination.location}
                      </CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-sunset-orange text-sunset-orange mr-1" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                      <span className="text-sm text-muted-foreground ml-1">({destination.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-nature-green hover:bg-nature-green-light">
                    Book Experience
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Local Guides */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Meet Our Local Guides</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{guide.name}</CardTitle>
                  <CardDescription>{guide.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center mb-4">
                    <Star className="h-4 w-4 fill-sunset-orange text-sunset-orange mr-1" />
                    <span className="text-sm font-medium mr-2">{guide.rating}</span>
                    <span className="text-sm text-muted-foreground">• {guide.tours} tours</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Virtual Tours */}
        <div className="bg-gradient-earth rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Can't Travel? Take a Virtual Tour!
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Experience our partner farms through immersive 360° virtual tours. 
            Learn about sustainable practices from the comfort of your home.
          </p>
          <Button className="bg-white text-nature-green hover:bg-white/90">
            Start Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgroTourism;