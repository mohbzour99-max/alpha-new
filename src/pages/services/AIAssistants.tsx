import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, MessageSquare, Zap, Clock, Users, Target } from 'lucide-react';

const AIAssistants = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for human-like conversations and understanding."
    },
    {
      icon: Zap,
      title: "Task Automation",
      description: "Automate repetitive tasks and workflows to boost productivity."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock assistance without breaks or downtime."
    },
    {
      icon: Users,
      title: "Multi-Channel Support",
      description: "Deploy across web, mobile, chat platforms, and voice interfaces."
    },
    {
      icon: Target,
      title: "Personalized Interactions",
      description: "Tailored responses based on user preferences and history."
    }
  ];

  const useCases = [
    "Customer service and support automation",
    "Internal help desk and IT support",
    "Sales lead qualification and nurturing",
    "Employee onboarding and training",
    "Data entry and document processing",
    "Appointment scheduling and management"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Bot className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Assistants & AI Agents
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              AI Assistants and AI Agents help unlock the full potential of your workforce by taking over repetitive, time-consuming tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Intelligent Automation Solutions
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our AI assistants and agents are designed to seamlessly integrate into your workflow and enhance human productivity.
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

      {/* Use Cases Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Versatile AI Solutions
              </h2>
              <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
                From customer service to internal operations, our AI assistants adapt to your specific business needs and industry requirements.
              </p>
              
              <div className="space-y-4 mb-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-alpha-neutral-800">{useCase}</span>
                  </div>
                ))}
              </div>

              <Button className="alpha-btn-primary text-white px-8 py-3">
                Explore Solutions
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Bot className="h-12 w-12 text-alpha-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-alpha-secondary mb-4">
                      Boost Productivity by 60%
                    </h3>
                    <p className="text-alpha-neutral-800 mb-6">
                      Our AI assistants handle routine tasks, allowing your team to focus on high-value activities that drive business growth.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">24/7</div>
                        <div className="text-sm text-alpha-neutral-600">Availability</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-alpha-primary">90%</div>
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

      {/* Implementation Process */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Implementation Process
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              A streamlined approach to deploying AI assistants that deliver immediate value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Requirements Analysis", description: "Understand your specific needs and use cases" },
              { step: "02", title: "Custom Development", description: "Build and train AI models for your domain" },
              { step: "03", title: "Integration & Testing", description: "Seamlessly integrate with existing systems" },
              { step: "04", title: "Deployment & Support", description: "Launch with ongoing monitoring and optimization" }
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

export default AIAssistants;