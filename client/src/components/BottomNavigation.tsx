
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import PaymentsIcon from '@mui/icons-material/Payments';
import PersonIcon from '@mui/icons-material/Person';

export default function BottomNavigation() {
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<string>("/");

  useEffect(() => {
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
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg px-2 sm:px-4 py-2 flex justify-between items-center z-20 max-w-md mx-auto">
      <button 
        onClick={() => navigateTo("/")}
        className={`flex flex-col items-center min-w-[3rem] sm:min-w-[4rem] space-y-1 px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-accent/10 rounded-lg transition-colors ${activeTab === "/" ? "text-[#DC0037]" : "text-muted-foreground"}`}
      >
        <HomeIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="text-[10px] sm:text-xs">Home</span>
      </button>

      <button 
        onClick={() => navigateTo("/circles")}
        className={`flex flex-col items-center min-w-[3rem] sm:min-w-[4rem] space-y-1 px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-accent/10 rounded-lg transition-colors ${activeTab === "/circles" ? "text-[#DC0037]" : "text-muted-foreground"}`}
      >
        <PeopleIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="text-[10px] sm:text-xs">Circles</span>
      </button>

      <div className="relative -mt-5 z-10">
        <button 
          onClick={() => navigateTo("/create")}
          className="bg-[#DC0037] text-white rounded-full p-2.5 sm:p-3 shadow-lg hover:bg-[#b30030] transition-colors"
        >
          <AddIcon className="h-5 w-5 sm:h-6 sm:w-6"/>
        </button>
      </div>

      <button 
        onClick={() => navigateTo("/pay")}
        className={`flex flex-col items-center min-w-[3rem] sm:min-w-[4rem] space-y-1 px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-accent/10 rounded-lg transition-colors ${activeTab === "/pay" ? "text-[#DC0037]" : "text-muted-foreground"}`}
      >
        <PaymentsIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="text-[10px] sm:text-xs">Pay</span>
      </button>

      <button 
        onClick={() => navigateTo("/profile")}
        className={`flex flex-col items-center min-w-[3rem] sm:min-w-[4rem] space-y-1 px-2 sm:px-3 py-1.5 sm:py-2 hover:bg-accent/10 rounded-lg transition-colors ${activeTab === "/profile" ? "text-[#DC0037]" : "text-muted-foreground"}`}
      >
        <PersonIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="text-[10px] sm:text-xs">Profile</span>
      </button>
    </nav>
  );
}
