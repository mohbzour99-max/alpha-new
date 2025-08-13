import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, Brain, BarChart, Zap, Shield } from 'lucide-react';

const PredictionModels = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Machine Learning",
      description: "State-of-the-art algorithms that learn from your data patterns and improve over time."
    },
    {
      icon: Target,
      title: "High Accuracy Predictions",
      description: "Achieve prediction accuracy rates of 90%+ with our sophisticated modeling techniques."
    },
    {
      icon: BarChart,
      title: "Real-time Forecasting",
      description: "Get instant predictions and forecasts as new data becomes available."
    },
    {
      icon: Zap,
      title: "Automated Model Updates",
      description: "Models automatically retrain and adapt to changing patterns in your data."
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify potential risks and opportunities before they impact your business."
    }
  ];

  const applications = [
    "Sales and revenue forecasting",
    "Customer churn prediction",
    "Demand planning and inventory optimization",
    "Market trend analysis",
    "Equipment failure prediction",
    "Financial risk assessment",
    "Customer lifetime value prediction",
    "Price optimization modeling"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Prediction Models
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Make informed decisions and stay ahead of customer needs with our advanced prediction models that forecast future trends and behaviors.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Powerful Predictive Analytics
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our prediction models use cutting-edge machine learning to help you anticipate market changes, customer behavior, and business opportunities.
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

      {/* Applications Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Predict the Future of Your Business
              </h2>
              <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
                From sales forecasting to risk assessment, our prediction models provide the insights you need to make strategic decisions with confidence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-alpha-neutral-800 text-sm">{application}</span>
                  </div>
                ))}
              </div>

              <Button className="alpha-btn-primary text-white px-8 py-3">
                Start Predicting
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="h-12 w-12 text-alpha-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alpha-secondary mb-4">
                      Increase Revenue by 25%
                    </h3>
                    <p className="text-alpha-neutral-800 mb-6">
                      Companies using our prediction models see significant improvements in revenue through better forecasting and strategic planning.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">90%+</div>
                        <div className="text-sm text-alpha-neutral-600">Accuracy</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">25%</div>
                        <div className="text-sm text-alpha-neutral-600">Revenue Boost</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">60%</div>
                        <div className="text-sm text-alpha-neutral-600">Risk Reduction</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Model Types */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Types of Prediction Models
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              We offer various prediction model types tailored to different business needs and data types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Time Series", description: "Forecast future values based on historical time-based data patterns" },
              { title: "Classification", description: "Predict categories or classes for new data points" },
              { title: "Regression", description: "Predict continuous numerical values and relationships" },
              { title: "Ensemble", description: "Combine multiple models for enhanced accuracy and reliability" }
            ].map((model, index) => (
              <Card key={model.title} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-alpha-primary mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-3">
                    {model.title}
                  </h3>
                  <p className="text-alpha-neutral-800 text-sm">
                    {model.description}
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

export default PredictionModels;