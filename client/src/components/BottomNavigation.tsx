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
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg px-4 py-2 flex justify-between items-center z-20 max-w-md mx-auto">
      <button 
        onClick={() => navigateTo("/")}
        className={`flex flex-col items-center space-y-1 px-3 py-1 hover:bg-[#f5f5f5] rounded-lg transition-colors ${activeTab === "/" ? "text-[#DC0037]" : "text-muted-foreground"}`}
      >
        <HomeIcon className={`h-6 w-6 ${activeTab === "/" ? "text-[#DC0037]" : "text-muted-foreground"}`} />
        <span className={`text-[10px] mt-1 ${activeTab === "/" ? "text-[#DC0037]" : "text-muted-foreground"}`}>Home</span>
      </button>

      <button 
        onClick={() => navigateTo("/circles")}
        className={`flex flex-col items-center space-y-1 px-3 py-1 hover:bg-[#f5f5f5] rounded-lg transition-colors ${activeTab === "/circles" ? "text-[#DC0037]" : "text-muted-foreground"}`}
      >
        <PeopleIcon className={`h-6 w-6 ${activeTab === "/circles" ? "text-[#DC0037]" : "text-muted-foreground"}`} />
        <span className={`text-[10px] mt-1 ${activeTab === "/circles" ? "text-[#DC0037]" : "text-muted-foreground"}`}>Circles</span>
      </button>

      <div className="relative -mt-5 z-10">
        <button 
          onClick={() => navigateTo("/create")}
          className="bg-[#DC0037] text-white rounded-full p-3 shadow-lg hover:bg-[#b30030] transition-colors"
        >
          <AddIcon className="h-6 w-6"/>
        </button>
      </div>

      <button 
        onClick={() => navigateTo("/pay")}
        className={`flex flex-col items-center space-y-1 px-3 py-1 hover:bg-[#f5f5f5] rounded-lg transition-colors ${activeTab === "/pay" ? "text-[#DC0037]" : "text-muted-foreground"}`}
      >
        <PaymentsIcon className={`h-6 w-6 ${activeTab === "/pay" ? "text-[#DC0037]" : "text-muted-foreground"}`} />
        <span className={`text-[10px] mt-1 ${activeTab === "/pay" ? "text-[#DC0037]" : "text-muted-foreground"}`}>Pay</span>
      </button>

      <button 
        onClick={() => navigateTo("/profile")}
        className={`flex flex-col items-center space-y-1 px-3 py-1 hover:bg-[#f5f5f5] rounded-lg transition-colors ${activeTab === "/profile" ? "text-[#DC0037]" : "text-muted-foreground"}`}
      >
        <PersonIcon className={`h-6 w-6 ${activeTab === "/profile" ? "text-[#DC0037]" : "text-muted-foreground"}`} />
        <span className={`text-[10px] mt-1 ${activeTab === "/profile" ? "text-[#DC0037]" : "text-muted-foreground"}`}>Profile</span>
      </button>
    </nav>
  );
}