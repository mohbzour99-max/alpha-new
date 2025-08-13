import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Camera, Scan, Shield, Zap, Target } from 'lucide-react';

const ComputerVision = () => {
  const features = [
    {
      icon: Camera,
      title: "Image Recognition",
      description: "Advanced object detection and classification with high accuracy across various image types."
    },
    {
      icon: Scan,
      title: "Document Processing",
      description: "Extract text and data from documents, forms, and receipts with OCR technology."
    },
    {
      icon: Shield,
      title: "Quality Control",
      description: "Automated visual inspection for manufacturing and quality assurance processes."
    },
    {
      icon: Target,
      title: "Facial Recognition",
      description: "Secure identity verification and access control with advanced facial analysis."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Process video streams and images in real-time for immediate decision-making."
    }
  ];

  const applications = [
    "Manufacturing quality control and defect detection",
    "Retail inventory management and product recognition",
    "Healthcare medical imaging and diagnostics",
    "Security and surveillance systems",
    "Autonomous vehicles and navigation",
    "Agricultural crop monitoring and analysis",
    "Document digitization and data extraction",
    "Augmented reality and virtual experiences"
  ];

  const capabilities = [
    { name: "Object Detection", description: "Identify and locate objects in images and videos" },
    { name: "Image Classification", description: "Categorize images into predefined classes" },
    { name: "Optical Character Recognition", description: "Extract text from images and documents" },
    { name: "Facial Analysis", description: "Detect faces and analyze facial attributes" },
    { name: "Motion Tracking", description: "Track object movement across video frames" },
    { name: "Anomaly Detection", description: "Identify unusual patterns or defects" }
  ];

  const benefits = [
    "Reduce manual inspection time by 90%",
    "Achieve 99%+ accuracy in quality control",
    "Process thousands of images per minute",
    "Eliminate human error in visual tasks",
    "Enable 24/7 automated monitoring",
    "Reduce operational costs by up to 60%"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Computer Vision
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Our computer vision solutions bring intelligence to visual data—helping organizations automate visual tasks and gain insights from images and videos.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Advanced Visual Intelligence
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our computer vision models use deep learning to understand and analyze visual content with human-level accuracy.
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
                Transform Visual Data into Insights
              </h2>
              <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
                From manufacturing to healthcare, our computer vision solutions automate visual tasks and provide valuable insights across industries.
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
                See Vision in Action
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Eye className="h-12 w-12 text-alpha-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alpha-secondary mb-4">
                      99%+ Accuracy
                    </h3>
                    <p className="text-alpha-neutral-800 mb-6">
                      Our computer vision models achieve industry-leading accuracy rates for object detection, classification, and analysis tasks.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">99%+</div>
                        <div className="text-sm text-alpha-neutral-600">Accuracy</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">1000+</div>
                        <div className="text-sm text-alpha-neutral-600">Images/Min</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Computer Vision Capabilities
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Comprehensive visual intelligence solutions for diverse business needs and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={capability.name} className="alpha-card border-0 p-6 text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-alpha-primary mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-3">
                    {capability.name}
                  </h3>
                  <p className="text-alpha-neutral-800 text-sm">
                    {capability.description}
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
              Business Impact
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Achieve significant operational improvements and cost savings with automated visual intelligence.
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

export default ComputerVision;