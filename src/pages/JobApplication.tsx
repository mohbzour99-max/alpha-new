import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload, ArrowLeft } from 'lucide-react';

const JobApplication = () => {
  const { jobId } = useParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: '',
    experience: '',
    portfolio: ''
  });

  const jobs = {
    "1": "Senior AI Engineer",
    "2": "Data Scientist", 
    "3": "Product Manager - AI Solutions"
  };

  const jobTitle = jobs[jobId as keyof typeof jobs] || "Position";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you soon.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        coverLetter: '',
        experience: '',
        portfolio: ''
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="alpha-section-padding bg-gradient-to-br from-alpha-primary to-alpha-primary/80 text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto">
            <Link to={`/careers/${jobId}`} className="text-white/80 hover:text-white flex items-center gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Job Details
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Apply for {jobTitle}
            </h1>
            <p className="text-xl text-white/90">
              Take the next step in your AI career journey with Alpha AI
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto">
            <Card className="alpha-card border-0">
              <CardHeader>
                <CardTitle className="text-alpha-secondary text-2xl">
                  Application Form
                </CardTitle>
                <p className="text-alpha-neutral-800">
                  Please fill out all required fields to submit your application.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-alpha-secondary">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-alpha-secondary">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-alpha-secondary">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-alpha-secondary">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <Label htmlFor="experience" className="text-alpha-secondary">
                      Relevant Experience *
                    </Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Please describe your relevant work experience, skills, and qualifications..."
                      className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary resize-none"
                    />
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <Label htmlFor="coverLetter" className="text-alpha-secondary">
                      Cover Letter *
                    </Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit for Alpha AI..."
                      className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary resize-none"
                    />
                  </div>

                  {/* Portfolio/LinkedIn */}
                  <div>
                    <Label htmlFor="portfolio" className="text-alpha-secondary">
                      Portfolio/LinkedIn URL
                    </Label>
                    <Input
                      id="portfolio"
                      name="portfolio"
                      type="url"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/yourprofile or https://yourportfolio.com"
                      className="mt-2 border-alpha-neutral-200 focus:border-alpha-primary"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <Label className="text-alpha-secondary">
                      Resume/CV *
                    </Label>
                    <div className="mt-2 border-2 border-dashed border-alpha-neutral-200 rounded-lg p-8 text-center hover:border-alpha-primary transition-colors">
                      <Upload className="h-12 w-12 text-alpha-neutral-400 mx-auto mb-4" />
                      <p className="text-alpha-neutral-800 mb-2">
                        Click to upload your resume or drag and drop
                      </p>
                      <p className="text-sm text-alpha-neutral-600">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="alpha-btn-primary text-white w-full md:w-auto px-12 py-3"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting Application...
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                  </div>

                  <div className="text-sm text-alpha-neutral-600 pt-4">
                    <p>
                      By submitting this application, you agree to our privacy policy and 
                      consent to the processing of your personal data for recruitment purposes.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobApplication;