import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Clock, Users, Award, PlayCircle, BookOpen, Target, CheckCircle, Calendar } from "lucide-react";

const SkillDevelopment = () => {
  const courses = [
    {
      id: 1,
      title: "Sustainable Farming Techniques",
      description: "Learn modern sustainable farming practices and organic cultivation methods",
      instructor: "Dr. Priya Sharma",
      duration: "6 weeks",
      level: "Beginner",
      enrolled: 1240,
      rating: 4.8,
      image: "/api/placeholder/300/200",
      modules: 12,
      certificate: true,
      price: "Free"
    },
    {
      id: 2,
      title: "Traditional Handicraft Mastery",
      description: "Master traditional art forms and handicraft techniques passed down through generations",
      instructor: "Master Craftsman Raja",
      duration: "8 weeks",
      level: "Intermediate",
      enrolled: 856,
      rating: 4.9,
      image: "/api/placeholder/300/200",
      modules: 16,
      certificate: true,
      price: "$49"
    },
    {
      id: 3,
      title: "Tourism Hospitality Excellence",
      description: "Learn how to host tourists and create memorable agro-tourism experiences",
      instructor: "Maya Patel",
      duration: "4 weeks",
      level: "Beginner",
      enrolled: 623,
      rating: 4.7,
      image: "/api/placeholder/300/200",
      modules: 8,
      certificate: true,
      price: "$29"
    }
  ];

  const skillCategories = [
    {
      name: "Sustainable Agriculture",
      courses: 24,
      icon: Target,
      color: "text-nature-green"
    },
    {
      name: "Handicrafts & Arts",
      courses: 18,
      icon: Award,
      color: "text-sunset-orange"
    },
    {
      name: "Tourism & Hospitality",
      courses: 12,
      icon: Users,
      color: "text-sky-blue"
    },
    {
      name: "Digital Marketing",
      courses: 15,
      icon: BookOpen,
      color: "text-nature-green-light"
    }
  ];

  const learningStats = [
    {
      title: "Active Learners",
      value: "12,500+",
      description: "Farmers and artisans enrolled",
      icon: Users
    },
    {
      title: "Courses Completed",
      value: "8,400+",
      description: "Certificates issued",
      icon: CheckCircle
    },
    {
      title: "Average Rating",
      value: "4.8/5",
      description: "Course satisfaction score",
      icon: Award
    },
    {
      title: "Success Rate",
      value: "89%",
      description: "Course completion rate",
      icon: Target
    }
  ];

  const upcomingWorkshops = [
    {
      title: "Organic Pest Management",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Online",
      instructor: "Dr. Anita Verma",
      spots: 25
    },
    {
      title: "Digital Marketing for Farmers",
      date: "March 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Hybrid",
      instructor: "Rahul Gupta",
      spots: 12
    },
    {
      title: "Traditional Weaving Techniques",
      date: "March 25, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Delhi Hub",
      instructor: "Master Kamala",
      spots: 8
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'beginner': return 'text-nature-green';
      case 'intermediate': return 'text-sunset-orange';
      case 'advanced': return 'text-sky-blue';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-nature-green">Skill Development</span> Portal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower rural communities with modern skills and knowledge. Learn sustainable practices, 
            traditional crafts, and digital marketing to thrive in the global marketplace.
          </p>
        </div>

        {/* Learning Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {learningStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
              <CardHeader className="pb-3">
                <stat.icon className="h-8 w-8 text-nature-green mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold text-foreground">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-foreground mb-1">{stat.title}</h4>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Skill Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-nature transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-3">
                  <category.icon className={`h-10 w-10 mx-auto mb-3 ${category.color} group-hover:scale-110 transition-transform`} />
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{category.courses} courses available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Courses */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-foreground">Featured Courses</h3>
            <Button variant="outline">View All Courses</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-nature transition-all duration-300">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-sunset opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-16 w-16 text-white/80" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-foreground">{course.price}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className={`${getLevelColor(course.level)} border-current bg-white/90`}>
                      {course.level}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">{course.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.enrolled} enrolled
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>by {course.instructor}</span>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {course.rating}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>0/{course.modules} modules</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                  
                  <Button className="w-full bg-nature-green hover:bg-nature-green-light">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Workshops */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Upcoming Workshops</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingWorkshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{workshop.title}</CardTitle>
                  <CardDescription>by {workshop.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {workshop.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {workshop.time}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {workshop.spots} spots left
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-4">
                    {workshop.location}
                  </Badge>
                  <Button className="w-full bg-nature-green hover:bg-nature-green-light">
                    Reserve Spot
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Learning */}
        <div className="bg-gradient-nature rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Join Our Learning Community
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Connect with fellow learners, share experiences, and get mentorship from industry experts. 
            Learning is better when we do it together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-nature-green hover:bg-white/90">
              Join Community
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Find Study Groups
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillDevelopment;