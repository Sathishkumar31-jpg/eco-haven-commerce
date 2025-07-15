import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Cloud, Droplets, Thermometer, AlertTriangle, TrendingUp, Activity, Zap, Wind } from "lucide-react";

const Sustainability = () => {
  const climateAlerts = [
    {
      type: "warning",
      title: "Cyclone Alert - Bay of Bengal",
      description: "Moderate intensity cyclone expected in 72 hours",
      region: "Coastal Odisha",
      severity: "Medium",
      timeframe: "Next 3 days"
    },
    {
      type: "info",
      title: "Landslide Risk Assessment",
      description: "Heavy rainfall increasing landslide probability",
      region: "Himalayan Region",
      severity: "High",
      timeframe: "Next 48 hours"
    }
  ];

  const iotData = [
    {
      sensor: "Soil Moisture",
      value: 68,
      unit: "%",
      status: "optimal",
      icon: Droplets,
      trend: "stable"
    },
    {
      sensor: "Temperature",
      value: 24,
      unit: "°C",
      status: "good",
      icon: Thermometer,
      trend: "rising"
    },
    {
      sensor: "Humidity",
      value: 75,
      unit: "%",
      status: "high",
      icon: Cloud,
      trend: "rising"
    },
    {
      sensor: "Wind Speed",
      value: 12,
      unit: "km/h",
      status: "normal",
      icon: Wind,
      trend: "stable"
    }
  ];

  const sustainabilityMetrics = [
    {
      title: "Carbon Footprint Reduced",
      value: "45%",
      description: "Compared to traditional farming",
      icon: TrendingUp,
      color: "text-nature-green"
    },
    {
      title: "Water Conservation",
      value: "30%",
      description: "Through smart irrigation",
      icon: Droplets,
      color: "text-sky-blue"
    },
    {
      title: "Renewable Energy",
      value: "80%",
      description: "Solar-powered operations",
      icon: Zap,
      color: "text-sunset-orange"
    },
    {
      title: "Biodiversity Index",
      value: "92%",
      description: "Species diversity maintained",
      icon: Activity,
      color: "text-nature-green-light"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal": return "text-nature-green";
      case "good": return "text-nature-green-light";
      case "high": return "text-sunset-orange";
      case "normal": return "text-sky-blue";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="sustainability" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-nature-green">Sustainability</span> Toolkit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage AI-powered climate predictions, IoT monitoring, and blockchain traceability 
            to build resilient and sustainable agricultural practices.
          </p>
        </div>

        {/* Climate Alerts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Climate Alerts & Predictions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {climateAlerts.map((alert, index) => (
              <Card key={index} className={`border-l-4 ${alert.type === 'warning' ? 'border-l-sunset-orange' : 'border-l-sky-blue'}`}>
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <AlertTriangle className={`h-5 w-5 mr-3 ${alert.type === 'warning' ? 'text-sunset-orange' : 'text-sky-blue'}`} />
                  <div>
                    <CardTitle className="text-lg">{alert.title}</CardTitle>
                    <CardDescription>{alert.region}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{alert.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant={alert.severity === 'High' ? 'destructive' : 'secondary'}>
                      {alert.severity} Risk
                    </Badge>
                    <span className="text-sm text-muted-foreground">{alert.timeframe}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* IoT Monitoring Dashboard */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Real-Time IoT Monitoring</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iotData.map((data, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-3">
                  <data.icon className={`h-8 w-8 mx-auto mb-2 ${getStatusColor(data.status)}`} />
                  <CardTitle className="text-lg">{data.sensor}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {data.value}
                    <span className="text-lg text-muted-foreground ml-1">{data.unit}</span>
                  </div>
                  <Badge variant="outline" className={`${getStatusColor(data.status)} border-current`}>
                    {data.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2 capitalize">
                    Trend: {data.trend}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainability Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Sustainability Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainabilityMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-nature transition-all duration-300">
                <CardHeader className="pb-3">
                  <metric.icon className={`h-8 w-8 mx-auto mb-2 ${metric.color}`} />
                  <CardTitle className="text-lg">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                  <div className="mt-3">
                    <Progress value={parseInt(metric.value)} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Blockchain Traceability */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 text-nature-green mr-2" />
                Blockchain Traceability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Track every product from seed to shelf with immutable blockchain records. 
                Verify authenticity, origin, and sustainability practices.
              </p>
              <Button className="bg-nature-green hover:bg-nature-green-light">
                View Blockchain Explorer
              </Button>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 text-sunset-orange mr-2" />
                AI-Powered Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Machine learning algorithms analyze weather patterns, soil conditions, 
                and market trends to provide actionable farming recommendations.
              </p>
              <Button variant="outline">
                Access AI Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Response */}
        <div className="bg-gradient-earth rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Emergency Response Network
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our AI-powered early warning system connects with local disaster management 
            authorities to provide real-time alerts and emergency response coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-nature-green hover:bg-white/90">
              Register for Alerts
            </Button>
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Emergency Contacts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;