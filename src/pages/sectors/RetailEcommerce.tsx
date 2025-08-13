import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, TrendingUp, Users, Target, Zap, BarChart3 } from 'lucide-react';

const RetailEcommerce = () => {
  const solutions = [
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "AI-powered product recommendations that increase conversion rates and average order value."
    },
    {
      icon: TrendingUp,
      title: "Demand Forecasting",
      description: "Predict customer demand and optimize inventory levels to reduce costs and stockouts."
    },
    {
      icon: Users,
      title: "Customer Segmentation",
      description: "Segment customers based on behavior and preferences for targeted marketing campaigns."
    },
    {
      icon: BarChart3,
      title: "Price Optimization",
      description: "Dynamic pricing strategies that maximize revenue while remaining competitive."
    },
    {
      icon: Zap,
      title: "Chatbots & Virtual Assistants",
      description: "24/7 customer support with AI-powered chatbots that handle inquiries and sales."
    }
  ];

  const benefits = [
    "Increase conversion rates by up to 35%",
    "Boost average order value by 25%",
    "Reduce inventory costs by 20-30%",
    "Improve customer satisfaction scores",
    "Decrease customer acquisition costs",
    "Enhance customer lifetime value"
  ];

  const caseStudies = [
    {
      title: "Fashion Retailer",
      metric: "40% increase in sales",
      description: "Implemented personalized recommendations and saw significant boost in conversion rates."
    },
    {
      title: "Electronics Store",
      metric: "30% reduction in inventory costs",
      description: "Used demand forecasting to optimize stock levels and reduce overstock situations."
    },
    {
      title: "Online Marketplace",
      metric: "50% improvement in customer satisfaction",
      description: "Deployed AI chatbots for instant customer support and query resolution."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Retail & E-commerce AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Transform your retail business with AI-powered solutions that enhance customer experience, optimize operations, and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              AI Solutions for Retail Success
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our comprehensive AI solutions address every aspect of the retail customer journey, from discovery to purchase and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <Card key={solution.title} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-alpha-secondary mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-alpha-neutral-800 leading-relaxed">
                    {solution.description}
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
                Drive Retail Growth with AI
              </h2>
              <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
                Our AI solutions help retail businesses increase sales, reduce costs, and deliver exceptional customer experiences that build loyalty and drive repeat purchases.
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
                Transform Your Retail Business
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShoppingCart className="h-12 w-12 text-alpha-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alpha-secondary mb-4">
                      Proven Results
                    </h3>
                    <p className="text-alpha-neutral-800 mb-6">
                      Our retail AI solutions have helped businesses achieve significant improvements in key performance metrics.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">35%</div>
                        <div className="text-sm text-alpha-neutral-600">Higher Conversion</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">25%</div>
                        <div className="text-sm text-alpha-neutral-600">Increased AOV</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              See how our AI solutions have transformed retail businesses across different segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-alpha-secondary mb-4">
                    {study.title}
                  </h3>
                  <div className="text-3xl font-bold text-alpha-primary mb-4">
                    {study.metric}
                  </div>
                  <p className="text-alpha-neutral-800 leading-relaxed">
                    {study.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Implementation Process
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI implementation with minimal disruption to your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Analyze your current systems and identify opportunities" },
              { step: "02", title: "Strategy", description: "Develop customized AI strategy aligned with business goals" },
              { step: "03", title: "Implementation", description: "Deploy AI solutions with comprehensive testing" },
              { step: "04", title: "Optimization", description: "Monitor performance and continuously improve results" }
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

      {/* CTA Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
              Let's discuss how our AI solutions can help you increase sales, reduce costs, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="alpha-btn-primary text-white px-8 py-3">
                Schedule Consultation
              </Button>
              <Button variant="outline" className="border-alpha-primary text-alpha-primary hover:bg-alpha-primary hover:text-white px-8 py-3">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailEcommerce;