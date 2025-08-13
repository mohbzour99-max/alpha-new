import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, TrendingUp, BarChart3, Target, Zap, Calculator } from 'lucide-react';

const RegressionModels = () => {
  const features = [
    {
      icon: LineChart,
      title: "Linear & Non-linear Models",
      description: "Advanced regression techniques for both simple and complex relationships in your data."
    },
    {
      icon: Calculator,
      title: "Statistical Analysis",
      description: "Comprehensive statistical insights including confidence intervals and significance testing."
    },
    {
      icon: Target,
      title: "Predictive Accuracy",
      description: "High-precision forecasting with detailed performance metrics and validation."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Fast model execution for real-time predictions and decision support."
    },
    {
      icon: BarChart3,
      title: "Multi-variable Analysis",
      description: "Handle complex relationships between multiple variables and factors."
    }
  ];

  const applications = [
    "Sales and revenue forecasting",
    "Price optimization and elasticity analysis",
    "Resource allocation and capacity planning",
    "Risk assessment and financial modeling",
    "Performance prediction and KPI forecasting",
    "Market demand estimation",
    "Cost analysis and budget planning",
    "Quality control and process optimization"
  ];

  const modelTypes = [
    { name: "Linear Regression", description: "Simple relationships between variables" },
    { name: "Polynomial Regression", description: "Non-linear patterns and curves" },
    { name: "Ridge Regression", description: "Regularized models for complex data" },
    { name: "Lasso Regression", description: "Feature selection and sparse models" },
    { name: "Logistic Regression", description: "Binary and categorical outcomes" },
    { name: "Time Series Regression", description: "Temporal patterns and trends" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <LineChart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Regression Models
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Boost operational efficiency with forecasting solutions tailored to your business needs and data patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Advanced Regression Analytics
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our regression models provide precise quantitative analysis to help you understand relationships in your data and make accurate predictions.
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
                Optimize Operations with Data-Driven Insights
              </h2>
              <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
                From financial forecasting to operational planning, our regression models help you make informed decisions based on quantitative analysis.
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
                Start Forecasting
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <LineChart className="h-12 w-12 text-alpha-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alpha-secondary mb-4">
                      95% Prediction Accuracy
                    </h3>
                    <p className="text-alpha-neutral-800 mb-6">
                      Our regression models deliver highly accurate predictions with comprehensive statistical validation and confidence intervals.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">95%</div>
                        <div className="text-sm text-alpha-neutral-600">Accuracy</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">30%</div>
                        <div className="text-sm text-alpha-neutral-600">Cost Reduction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">50%</div>
                        <div className="text-sm text-alpha-neutral-600">Faster Decisions</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Model Types Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Regression Model Types
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              We offer various regression techniques to match your specific data characteristics and business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modelTypes.map((model, index) => (
              <Card key={model.name} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-alpha-primary mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-3">
                    {model.name}
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

      {/* Process Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Our Regression Modeling Process
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              A systematic approach to building robust regression models that deliver reliable predictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Data Analysis", description: "Explore data patterns and relationships" },
              { step: "02", title: "Model Selection", description: "Choose optimal regression technique" },
              { step: "03", title: "Training & Validation", description: "Build and validate model performance" },
              { step: "04", title: "Deployment", description: "Implement and monitor in production" }
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

export default RegressionModels;