import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Al-Rashid",
      role: "Chief Executive Officer",
      bio: "Leading AI researcher with 15+ years in machine learning and ethical AI development.",
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      initials: "SA"
    },
    {
      name: "Ahmed Hassan",
      role: "Chief Technology Officer",
      bio: "Former Google AI engineer specializing in large-scale AI systems and cloud architecture.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      initials: "AH"
    },
    {
      name: "Dr. Fatima Al-Zahra",
      role: "Head of AI Research",
      bio: "PhD in Computer Science with expertise in natural language processing and computer vision.",
      avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      initials: "FA"
    },
    {
      name: "Omar Khalil",
      role: "Head of Product",
      bio: "Product strategist with deep experience in AI product development and user experience design.",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      initials: "OK"
    },
    {
      name: "Layla Mansour",
      role: "Head of Business Development",
      bio: "Strategic partnerships expert focused on scaling AI solutions across Middle Eastern markets.",
      avatar: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      initials: "LM"
    },
    {
      name: "Yusuf Al-Mahmoud",
      role: "Head of Engineering",
      bio: "Full-stack engineer with expertise in scalable AI infrastructure and DevOps practices.",
      avatar: "https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=400",
      initials: "YM"
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
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Meet the visionaries building the future of AI
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="alpha-card border-0 text-center p-6">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-alpha-primary/10 text-alpha-primary text-lg font-semibold">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-bold text-alpha-secondary mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-alpha-primary font-medium mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-alpha-neutral-800 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center gap-2">
                    <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
              Join Our Team
            </h2>
            <p className="text-lg text-alpha-neutral-800 leading-relaxed mb-8">
              We're always looking for talented individuals who share our passion for ethical AI innovation. 
              Explore opportunities to shape the future of artificial intelligence with us.
            </p>
            <Button className="alpha-btn-primary text-white px-8 py-3">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;