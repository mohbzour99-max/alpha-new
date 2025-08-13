import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers, Users, Target, BarChart3, Zap, Eye } from 'lucide-react';

const ClusteringModels = () => {
  const features = [
    {
      icon: Users,
      title: "Customer Segmentation",
      description: "Group customers based on behavior, preferences, and demographics for targeted marketing."
    },
    {
      icon: Target,
      title: "Market Segmentation",
      description: "Identify distinct market segments and opportunities for product positioning."
    },
    {
      icon: BarChart3,
      title: "Pattern Recognition",
      description: "Discover hidden patterns and relationships in complex datasets."
    },
    {
      icon: Zap,
      title: "Automated Clustering",
      description: "AI-powered clustering that automatically determines optimal number of segments."
    },
    {
      icon: Eye,
      title: "Visual Analytics",
      description: "Interactive visualizations to explore and understand cluster characteristics."
    }
  ];

  const applications = [
    "Customer segmentation for personalized marketing",
    "Product recommendation groupings",
    "Market research and analysis",
    "Risk assessment and fraud detection",
    "Inventory optimization and categorization",
    "Social network analysis",
    "Image and document classification",
    "Anomaly detection and outlier identification"
  ];

  const clusteringTypes = [
    { name: "K-Means", description: "Partition data into k distinct clusters" },
    { name: "Hierarchical", description: "Create tree-like cluster structures" },
    { name: "DBSCAN", description: "Density-based clustering for irregular shapes" },
    { name: "Gaussian Mixture", description: "Probabilistic clustering with soft assignments" },
    { name: "Spectral", description: "Graph-based clustering for complex structures" },
    { name: "Mean Shift", description: "Mode-seeking algorithm for natural clusters" }
  ];

  const benefits = [
    "Increase marketing ROI by 45% through targeted campaigns",
    "Improve customer retention with personalized experiences",
    "Reduce operational costs through optimized resource allocation",
    "Discover new market opportunities and niches",
    "Enhance product development with customer insights",
    "Streamline inventory management and supply chain"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Layers className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Clustering Models
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Understand customer diversity at scale. We segment your audience into actionable clusters for targeted strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Advanced Clustering Analytics
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our clustering models use sophisticated algorithms to identify meaningful patterns and segments in your data.
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
                Unlock Hidden Patterns in Your Data
              </h2>
              <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
                From customer segmentation to market analysis, our clustering models reveal valuable insights that drive strategic decision-making.
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
                Discover Segments
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Layers className="h-12 w-12 text-alpha-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alpha-secondary mb-4">
                      45% Higher Marketing ROI
                    </h3>
                    <p className="text-alpha-neutral-800 mb-6">
                      Businesses using our clustering models see significant improvements in marketing effectiveness through targeted segmentation.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">45%</div>
                        <div className="text-sm text-alpha-neutral-600">Higher ROI</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">8x</div>
                        <div className="text-sm text-alpha-neutral-600">Better Targeting</div>
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
              Business Benefits
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Transform your understanding of customers and markets with actionable clustering insights.
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

      {/* Clustering Types */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Clustering Algorithms
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              We use various clustering techniques to match your specific data characteristics and business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clusteringTypes.map((type, index) => (
              <Card key={type.name} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-alpha-primary mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-3">
                    {type.name}
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

export default ClusteringModels;