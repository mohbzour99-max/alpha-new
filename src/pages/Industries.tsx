import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShoppingCart, 
  Building2, 
  HeartHandshake, 
  GraduationCap, 
  Plane, 
  Truck, 
  Home, 
  Briefcase, 
  Radio 
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Transform customer experiences with personalized recommendations, inventory optimization, and intelligent pricing strategies.",
      features: ["Recommendation Systems", "Demand Forecasting", "Customer Analytics", "Price Optimization"]
    },
    {
      icon: Building2,
      title: "Banking & Financial Services",
      description: "Enhance security, automate processes, and provide personalized financial services with AI-powered solutions.",
      features: ["Fraud Detection", "Risk Assessment", "Algorithmic Trading", "Customer Service Automation"]
    },
    {
      icon: HeartHandshake,
      title: "Healthcare",
      description: "Improve patient outcomes through diagnostic assistance, treatment optimization, and operational efficiency.",
      features: ["Medical Imaging Analysis", "Drug Discovery", "Patient Monitoring", "Clinical Decision Support"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Personalize learning experiences and improve educational outcomes with adaptive AI technologies.",
      features: ["Personalized Learning", "Automated Grading", "Student Analytics", "Content Recommendation"]
    },
    {
      icon: Plane,
      title: "Hospitality & Tourism",
      description: "Enhance guest experiences and optimize operations with intelligent booking and service systems.",
      features: ["Dynamic Pricing", "Guest Personalization", "Demand Prediction", "Service Automation"]
    },
    {
      icon: Truck,
      title: "Transportation & Logistics",
      description: "Optimize routes, predict maintenance needs, and improve supply chain efficiency with AI insights.",
      features: ["Route Optimization", "Predictive Maintenance", "Supply Chain Analytics", "Fleet Management"]
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Revolutionize property valuation, market analysis, and customer matching with intelligent systems.",
      features: ["Property Valuation", "Market Analysis", "Customer Matching", "Investment Analytics"]
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Streamline operations in law, consulting, and accounting with AI-powered document analysis and automation.",
      features: ["Document Analysis", "Contract Review", "Compliance Monitoring", "Process Automation"]
    },
    {
      icon: Radio,
      title: "Telecommunications",
      description: "Optimize network performance, enhance customer service, and predict infrastructure needs.",
      features: ["Network Optimization", "Customer Churn Prediction", "Service Quality Monitoring", "Infrastructure Planning"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Delivering AI excellence across diverse sectors and transforming businesses worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={industry.title} className="alpha-card border-0 p-6 h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mb-6">
                    <industry.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-alpha-secondary mb-4">
                    {industry.title}
                  </h3>
                  
                  <p className="text-alpha-neutral-800 leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold text-alpha-secondary mb-3">Key Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-alpha-neutral-800">
                          <div className="w-2 h-2 bg-alpha-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              Ready to Transform Your Industry?
            </h2>
            <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
              Don't see your industry listed? We work across all sectors to deliver customized AI solutions 
              that meet your specific business needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="alpha-btn-primary text-white px-8 py-3 rounded-lg font-semibold">
                Schedule Consultation
              </button>
              <button className="border-2 border-alpha-primary text-alpha-primary px-8 py-3 rounded-lg font-semibold hover:bg-alpha-primary hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;