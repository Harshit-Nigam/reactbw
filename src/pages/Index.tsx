
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    
    navigate('/discover', { replace: true });
  }, [navigate]);

  
  return <div className="flex items-center justify-center h-screen">Redirecting...</div>;
};

export default Index;
