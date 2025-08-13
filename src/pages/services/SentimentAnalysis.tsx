import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Shield, TrendingUp, Zap, Eye } from 'lucide-react';

const SentimentAnalysis = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Multi-language Support",
      description: "Analyze sentiment across multiple languages with high accuracy and cultural context."
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Monitor brand sentiment and customer feedback in real-time across all channels."
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Detect negative sentiment early to protect your brand reputation and respond quickly."
    },
    {
      icon: TrendingUp,
      title: "Trend Analysis",
      description: "Track sentiment trends over time to understand customer perception changes."
    },
    {
      icon: Zap,
      title: "Automated Alerts",
      description: "Get instant notifications when sentiment scores cross predefined thresholds."
    }
  ];

  const dataSources = [
    "Social media platforms (Twitter, Facebook, Instagram)",
    "Customer reviews and ratings",
    "Support tickets and chat logs",
    "Survey responses and feedback forms",
    "News articles and press mentions",
    "Forum discussions and comments",
    "Email communications",
    "Product reviews and testimonials"
  ];

  const benefits = [
    "Improve customer satisfaction by 40%",
    "Reduce response time to negative feedback by 80%",
    "Increase brand loyalty through proactive engagement",
    "Identify product improvement opportunities",
    "Enhance marketing campaign effectiveness",
    "Prevent PR crises before they escalate"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sentiment Analysis Models
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Protect your brand and business in real time with advanced sentiment analysis across all unstructured data sources.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Advanced Sentiment Intelligence
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our sentiment analysis models use natural language processing to understand emotions, opinions, and attitudes in text data.
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

      {/* Data Sources Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Comprehensive Data Coverage
              </h2>
              <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
                Our sentiment analysis models can process and analyze text data from virtually any source, giving you complete visibility into customer sentiment.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {dataSources.map((source, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-alpha-neutral-800 text-sm">{source}</span>
                  </div>
                ))}
              </div>

              <Button className="alpha-btn-primary text-white px-8 py-3">
                Start Monitoring
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="h-12 w-12 text-alpha-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alpha-secondary mb-4">
                      Real-time Brand Protection
                    </h3>
                    <p className="text-alpha-neutral-800 mb-6">
                      Monitor millions of conversations and detect sentiment changes instantly to protect your brand reputation.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">24/7</div>
                        <div className="text-sm text-alpha-neutral-600">Monitoring</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">95%</div>
                        <div className="text-sm text-alpha-neutral-600">Accuracy</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Business Impact
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Transform customer feedback into actionable insights that drive business growth and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-alpha-primary mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-alpha-neutral-800 leading-relaxed">
                    {benefit}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Types */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Types of Sentiment Analysis
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              We offer different levels of sentiment analysis to match your specific business needs and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Basic Sentiment", description: "Positive, negative, or neutral classification" },
              { title: "Emotion Detection", description: "Joy, anger, fear, sadness, and more" },
              { title: "Aspect-based", description: "Sentiment about specific product features" },
              { title: "Intent Analysis", description: "Purchase intent and customer journey stage" }
            ].map((type, index) => (
              <Card key={type.title} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-alpha-primary mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-3">
                    {type.title}
                  </h3>
                  <p className="text-alpha-neutral-800 text-sm">
                    {type.description}
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

export default SentimentAnalysis;