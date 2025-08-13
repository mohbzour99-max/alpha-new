import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Database, Eye, Target, Zap } from 'lucide-react';

const DataAnalytics = () => {
  const features = [
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect and consolidate data from multiple sources for comprehensive analysis."
    },
    {
      icon: Eye,
      title: "Advanced Visualization",
      description: "Transform complex data into clear, actionable insights with interactive dashboards."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes using sophisticated machine learning algorithms."
    },
    {
      icon: Target,
      title: "Business Intelligence",
      description: "Make data-driven decisions with real-time reporting and strategic insights."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process and analyze data streams in real-time for immediate actionable insights."
    }
  ];

  const benefits = [
    "Increase operational efficiency by up to 40%",
    "Reduce decision-making time from days to hours",
    "Identify new revenue opportunities",
    "Optimize resource allocation and costs",
    "Improve customer satisfaction through data insights"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Data Analytics
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Unlock actionable insights through our end-to-end analytics approach that transforms raw data into strategic business intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Comprehensive Analytics Solutions
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our data analytics platform provides everything you need to turn data into competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={feature.title} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-alpha-secondary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-alpha-neutral-800 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Transform Your Business with Data
              </h2>
              <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
                Our analytics solutions help organizations make smarter decisions, optimize operations, and drive growth through data-driven insights.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-alpha-neutral-800">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="alpha-btn-primary text-white px-8 py-3">
                Get Started Today
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="h-12 w-12 text-alpha-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alpha-secondary mb-4">
                      Ready to Get Started?
                    </h3>
                    <p className="text-alpha-neutral-800 mb-6">
                      Let's discuss how our data analytics solutions can transform your business operations and drive growth.
                    </p>
                    <Button variant="outline" className="border-alpha-primary text-alpha-primary hover:bg-alpha-primary hover:text-white">
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Our Analytics Process
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              A systematic approach to turning your data into actionable business intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Data Collection", description: "Gather and consolidate data from all relevant sources" },
              { step: "02", title: "Data Processing", description: "Clean, transform, and prepare data for analysis" },
              { step: "03", title: "Analysis & Modeling", description: "Apply advanced analytics and machine learning techniques" },
              { step: "04", title: "Insights & Action", description: "Deliver actionable insights and recommendations" }
            ].map((process, index) => (
              <Card key={process.step} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-alpha-primary mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-3">
                    {process.title}
                  </h3>
                  <p className="text-alpha-neutral-800 text-sm">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataAnalytics;