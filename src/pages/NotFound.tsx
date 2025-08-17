import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-alpha-neutral-50">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-alpha-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-alpha-secondary mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-alpha-neutral-800 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="alpha-btn-primary text-white border-0">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;