import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, TrendingUp, BarChart3, Calendar, Zap, Target } from 'lucide-react';

const TemporalAnalysis = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Time Series Forecasting",
      description: "Predict future values based on historical time-based patterns and trends."
    },
    {
      icon: BarChart3,
      title: "Seasonal Analysis",
      description: "Identify and model seasonal patterns, cycles, and recurring trends in your data."
    },
    {
      icon: Calendar,
      title: "Event Impact Analysis",
      description: "Measure the impact of specific events on your time series data and metrics."
    },
    {
      icon: Target,
      title: "Anomaly Detection",
      description: "Detect unusual patterns and outliers in time series data for early warning systems."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Monitor time series data in real-time with automated alerts and notifications."
    }
  ];

  const applications = [
    "Sales and revenue forecasting",
    "Demand planning and inventory optimization",
    "Financial market analysis and trading",
    "Energy consumption and load forecasting",
    "Website traffic and user behavior analysis",
    "Supply chain and logistics optimization",
    "Equipment maintenance scheduling",
    "Economic and business cycle analysis"
  ];

  const techniques = [
    { name: "ARIMA Models", description: "AutoRegressive Integrated Moving Average for trend analysis" },
    { name: "Exponential Smoothing", description: "Weighted averages for short-term forecasting" },
    { name: "Seasonal Decomposition", description: "Separate trend, seasonal, and residual components" },
    { name: "Prophet", description: "Facebook's robust forecasting for business time series" },
    { name: "LSTM Networks", description: "Deep learning for complex temporal patterns" },
    { name: "Wavelet Analysis", description: "Multi-resolution analysis of time-frequency patterns" }
  ];

  const benefits = [
    "Improve forecast accuracy by up to 40%",
    "Reduce inventory costs through better demand planning",
    "Optimize resource allocation based on temporal patterns",
    "Detect anomalies and prevent system failures",
    "Make data-driven decisions with confidence intervals",
    "Automate planning processes with reliable predictions"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Temporal Data Analysis Models
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Plan with confidence using advanced time series forecasting and temporal pattern analysis for strategic decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Advanced Temporal Intelligence
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our temporal analysis models use sophisticated algorithms to understand time-based patterns and predict future trends with high accuracy.
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
                Master Time-Based Patterns
              </h2>
              <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
                From business forecasting to operational planning, our temporal analysis models help you understand and predict time-based patterns in your data.
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
                      <Clock className="h-12 w-12 text-alpha-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alpha-secondary mb-4">
                      40% Better Accuracy
                    </h3>
                    <p className="text-alpha-neutral-800 mb-6">
                      Our temporal analysis models consistently outperform traditional forecasting methods with advanced machine learning techniques.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">40%</div>
                        <div className="text-sm text-alpha-neutral-600">Better Accuracy</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">24/7</div>
                        <div className="text-sm text-alpha-neutral-600">Monitoring</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">95%</div>
                        <div className="text-sm text-alpha-neutral-600">Confidence</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Advanced Techniques
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              We employ a variety of sophisticated temporal analysis techniques to match your specific data characteristics and forecasting needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <Card key={technique.name} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-alpha-primary mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-3">
                    {technique.name}
                  </h3>
                  <p className="text-alpha-neutral-800 text-sm">
                    {technique.description}
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Business Benefits
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Transform your planning and decision-making with accurate temporal insights and forecasting capabilities.
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

      <Footer />
    </div>
  );
};

export default TemporalAnalysis;