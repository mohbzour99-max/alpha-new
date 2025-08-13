import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Target, Compass } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Vision & Mission
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Shaping the future of AI with purpose and responsibility
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <Card className="alpha-card border-0 p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-alpha-primary" />
                </div>
                <h2 className="text-3xl font-bold text-alpha-secondary mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-alpha-neutral-800 leading-relaxed">
                  To be the leading force in creating a smarter, more connected world where AI serves humanity's greatest aspirations. We envision a future where artificial intelligence amplifies human potential, creates meaningful opportunities, and drives ethical innovation across all sectors of society.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="alpha-card border-0 p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-alpha-primary" />
                </div>
                <h2 className="text-3xl font-bold text-alpha-secondary mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-alpha-neutral-800 leading-relaxed">
                  To develop and deploy AI solutions that prioritize human-centered design, ethical practices, and transparent processes. We empower organizations to harness the power of artificial intelligence while maintaining focus on empathy, decision-making, and meaningful human connections.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Principles */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Our Core Principles
            </h2>
          </div>

          <Card className="alpha-card border-0 p-8">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Compass className="h-8 w-8 text-alpha-primary" />
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-alpha-secondary mb-4">
                      Human-First Approach
                    </h3>
                    <p className="text-alpha-neutral-800 leading-relaxed">
                      Every AI solution we create is designed to enhance human capabilities, not replace them. We believe in technology that empowers people to focus on creativity, strategy, and meaningful relationships.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-alpha-secondary mb-4">
                      Ethical Innovation
                    </h3>
                    <p className="text-alpha-neutral-800 leading-relaxed">
                      We maintain rigorous ethical standards in all our AI development processes, ensuring transparency, accountability, and responsible deployment of artificial intelligence technologies.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-alpha-secondary mb-4">
                      Global Impact
                    </h3>
                    <p className="text-alpha-neutral-800 leading-relaxed">
                      Our solutions are designed to create positive change both locally and globally, fostering inclusive growth and sustainable development across diverse communities and industries.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-alpha-secondary mb-4">
                      Collaborative Excellence
                    </h3>
                    <p className="text-alpha-neutral-800 leading-relaxed">
                      We build with courage, intelligence, innovation, and unity, working together with our clients, partners, and communities to achieve extraordinary results.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionMission;