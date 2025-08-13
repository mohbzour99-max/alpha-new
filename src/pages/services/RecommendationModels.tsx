import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Users, ShoppingCart, Target, Zap, TrendingUp } from 'lucide-react';

const RecommendationModels = () => {
  const features = [
    {
      icon: Users,
      title: "Collaborative Filtering",
      description: "Leverage user behavior patterns to recommend items based on similar user preferences."
    },
    {
      icon: Target,
      title: "Content-Based Filtering",
      description: "Recommend items based on product features and user preference profiles."
    },
    {
      icon: Zap,
      title: "Real-time Personalization",
      description: "Deliver instant, personalized recommendations as users interact with your platform."
    },
    {
      icon: TrendingUp,
      title: "Dynamic Learning",
      description: "Models continuously learn and adapt to changing user preferences and behaviors."
    },
    {
      icon: ShoppingCart,
      title: "Cross-selling & Upselling",
      description: "Intelligently suggest complementary products to increase average order value."
    }
  ];

  const benefits = [
    "Increase conversion rates by up to 35%",
    "Boost average order value by 20-30%",
    "Reduce customer acquisition costs",
    "Improve customer satisfaction and retention",
    "Decrease product discovery time by 50%",
    "Enhance user engagement and session duration"
  ];

  const industries = [
    { name: "E-commerce", description: "Product recommendations for online stores" },
    { name: "Streaming", description: "Content recommendations for media platforms" },
    { name: "Social Media", description: "Friend and content suggestions" },
    { name: "News & Publishing", description: "Article and content recommendations" },
    { name: "Travel", description: "Destination and accommodation suggestions" },
    { name: "Finance", description: "Investment and product recommendations" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Recommendation Models
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Deliver smart, personalized shopping experiences. Our recommendation systems reduce search time and increase customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Advanced Recommendation Technology
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our sophisticated recommendation engines use multiple algorithms to deliver highly relevant and personalized suggestions.
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
                Drive Sales with Smart Recommendations
              </h2>
              <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
                Transform your customer experience with personalized recommendations that guide users to products they'll love, increasing both satisfaction and revenue.
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
                Boost Your Sales
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star className="h-12 w-12 text-alpha-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alpha-secondary mb-4">
                      35% Higher Conversion
                    </h3>
                    <p className="text-alpha-neutral-800 mb-6">
                      Businesses using our recommendation systems see significant improvements in conversion rates and customer engagement.
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

      {/* Industries Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Industry Applications
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our recommendation models are tailored for various industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={industry.name} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-alpha-secondary mb-4">
                    {industry.name}
                  </h3>
                  <p className="text-alpha-neutral-800 leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Ready to Personalize Your Customer Experience?
            </h2>
            <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
              Let's discuss how our recommendation models can transform your business and drive growth through personalized customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="alpha-btn-primary text-white px-8 py-3">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-alpha-primary text-alpha-primary hover:bg-alpha-primary hover:text-white px-8 py-3">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecommendationModels;