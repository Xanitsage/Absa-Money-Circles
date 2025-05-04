import { useLocation } from "wouter";
import { useState, useEffect } from "react";
// Import Material Design icons
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import PaymentsIcon from '@mui/icons-material/Payments';
import PersonIcon from '@mui/icons-material/Person';

export default function BottomNavigation() {
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<string>("/");

  useEffect(() => {
    // Set active tab based on current location
    if (location === "/") {
      setActiveTab("/");
    } else if (location === "/circles" || location.startsWith("/circle/")) {
      setActiveTab("/circles");
    } else if (location === "/profile") {
      setActiveTab("/profile");
    } else if (location === "/pay") {
      setActiveTab("/pay");
    }
  }, [location]);

  const navigateTo = (path: string) => {
    setLocation(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-4 py-2 flex justify-between items-center z-20 max-w-md mx-auto">
      <button 
        onClick={() => navigateTo("/")}
        className={`flex flex-col items-center px-3 py-1 ${activeTab === "/" ? "text-primary" : "text-muted-foreground"}`}
      >
        <HomeIcon />
        <span className="text-xs mt-1">Home</span>
      </button>
      
      <button 
        onClick={() => navigateTo("/circles")}
        className={`flex flex-col items-center px-3 py-1 ${activeTab === "/circles" ? "text-primary" : "text-muted-foreground"}`}
      >
        <PeopleIcon />
        <span className="text-xs mt-1">Circles</span>
      </button>
      
      <div className="relative -mt-5 z-10">
        <button 
          onClick={() => navigateTo("/create")}
          className="bg-primary text-white rounded-full p-3 shadow-lg"
        >
          <AddIcon />
        </button>
      </div>
      
      <button 
        onClick={() => navigateTo("/pay")}
        className={`flex flex-col items-center px-3 py-1 ${activeTab === "/pay" ? "text-primary" : "text-muted-foreground"}`}
      >
        <PaymentsIcon />
        <span className="text-xs mt-1">Pay</span>
      </button>
      
      <button 
        onClick={() => navigateTo("/profile")}
        className={`flex flex-col items-center px-3 py-1 ${activeTab === "/profile" ? "text-primary" : "text-muted-foreground"}`}
      >
        <PersonIcon />
        <span className="text-xs mt-1">Profile</span>
      </button>
    </nav>
  );
}
