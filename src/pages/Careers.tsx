import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';

const Careers = () => {
  const { jobId } = useParams();
  
  const jobs = [
    {
      id: "1",
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and mentor junior engineers in our growing team.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years of experience in machine learning and AI development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      responsibilities: [
        "Design and implement AI models and algorithms",
        "Lead technical architecture decisions",
        "Mentor junior team members",
        "Collaborate with cross-functional teams",
        "Stay current with AI research and trends"
      ]
    },
    {
      id: "2",
      title: "Data Scientist",
      department: "Data Science",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time",
      experience: "3+ years",
      description: "Analyze complex datasets and build predictive models to drive business insights and decision-making.",
      requirements: [
        "Bachelor's or Master's degree in Data Science, Statistics, or related field",
        "3+ years of experience in data analysis and modeling",
        "Proficiency in Python, R, SQL",
        "Experience with data visualization tools",
        "Strong analytical and statistical skills"
      ],
      responsibilities: [
        "Analyze large datasets to extract insights",
        "Build and validate predictive models",
        "Create data visualizations and reports",
        "Collaborate with business stakeholders",
        "Present findings to leadership team"
      ]
    },
    {
      id: "3",
      title: "Product Manager - AI Solutions",
      department: "Product",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive product strategy and roadmap for our AI solutions, working closely with engineering and business teams.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "4+ years of product management experience",
        "Understanding of AI/ML technologies",
        "Strong analytical and strategic thinking skills",
        "Excellent communication and leadership abilities"
      ],
      responsibilities: [
        "Define product vision and strategy",
        "Manage product roadmap and priorities",
        "Work with engineering teams on implementation",
        "Conduct market research and competitive analysis",
        "Collaborate with sales and marketing teams"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with diverse, talented teams building the future of AI"
    },
    {
      icon: TrendingUp,
      title: "Professional Growth", 
      description: "Continuous learning opportunities and career advancement"
    },
    {
      icon: Award,
      title: "Innovation Culture",
      description: "Be part of groundbreaking AI research and development"
    }
  ];

  // If jobId is provided, show job details
  const selectedJob = jobs.find(job => job.id === jobId);
  
  if (selectedJob) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        {/* Job Details Hero */}
        <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
          <div className="alpha-container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link to="/careers" className="text-white/80 hover:text-white flex items-center gap-2 mb-4">
                  ← Back to Careers
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {selectedJob.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {selectedJob.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {selectedJob.type}
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  {selectedJob.department}
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details Content */}
        <section className="alpha-section-padding">
          <div className="alpha-container">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="alpha-card border-0 mb-8">
                    <CardHeader>
                      <CardTitle className="text-alpha-secondary">Job Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-alpha-neutral-800 leading-relaxed">
                        {selectedJob.description}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="alpha-card border-0 mb-8">
                    <CardHeader>
                      <CardTitle className="text-alpha-secondary">Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-alpha-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-alpha-neutral-800">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="alpha-card border-0">
                    <CardHeader>
                      <CardTitle className="text-alpha-secondary">Responsibilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {selectedJob.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-alpha-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-alpha-neutral-800">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="alpha-card border-0 sticky top-8">
                    <CardContent className="pt-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-alpha-secondary mb-2">
                          Ready to Apply?
                        </h3>
                        <p className="text-alpha-neutral-800 mb-6">
                          Join our team and help shape the future of AI
                        </p>
                        <Button asChild className="alpha-btn-primary text-white w-full">
                          <Link to={`/careers/${selectedJob.id}/apply`}>
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                      
                      <div className="border-t pt-6">
                        <h4 className="font-semibold text-alpha-secondary mb-4">Job Details</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="text-alpha-neutral-800">Department:</span>
                            <span className="ml-2 font-medium">{selectedJob.department}</span>
                          </div>
                          <div>
                            <span className="text-alpha-neutral-800">Experience:</span>
                            <span className="ml-2 font-medium">{selectedJob.experience}</span>
                          </div>
                          <div>
                            <span className="text-alpha-neutral-800">Type:</span>
                            <span className="ml-2 font-medium">{selectedJob.type}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Default careers page
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Join Alpha AI
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Shape the future of AI technology while building meaningful solutions for tomorrow's world.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Why Work With Us?
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Join a team that's passionate about ethical AI innovation and making a positive impact on the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="alpha-card border-0 text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-alpha-neutral-800">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Open Positions
            </h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Explore exciting opportunities to join our growing team and make an impact in the AI industry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="alpha-card border-0 p-6">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-alpha-secondary">
                          {job.title}
                        </h3>
                        <Badge variant="secondary" className="bg-alpha-primary/10 text-alpha-primary">
                          {job.department}
                        </Badge>
                      </div>
                      
                      <p className="text-alpha-neutral-800 mb-4 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-alpha-neutral-800">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div>
                          Experience: {job.experience}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button asChild className="alpha-btn-primary text-white">
                        <Link to={`/careers/${job.id}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
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

export default Careers;