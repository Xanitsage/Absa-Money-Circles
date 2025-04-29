import { useLocation } from "wouter";
import { useState, useEffect } from "react";

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
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 flex justify-between items-center z-20 max-w-md mx-auto">
      <button 
        onClick={() => navigateTo("/")}
        className={`flex flex-col items-center px-3 py-1 ${activeTab === "/" ? "text-primary" : "text-gray-500"}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span className="text-xs mt-1">Home</span>
      </button>
      
      <button 
        onClick={() => navigateTo("/circles")}
        className={`flex flex-col items-center px-3 py-1 ${activeTab === "/circles" ? "text-primary" : "text-gray-500"}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
        <span className="text-xs mt-1">Circles</span>
      </button>
      
      <div className="relative -mt-5 z-10">
        <button 
          onClick={() => navigateTo("/create")}
          className="bg-primary text-white rounded-full p-3 shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"/>
            <path d="M5 12h14"/>
          </svg>
        </button>
      </div>
      
      <button 
        onClick={() => navigateTo("/pay")}
        className={`flex flex-col items-center px-3 py-1 ${activeTab === "/pay" ? "text-primary" : "text-gray-500"}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="m16 10-4 4-4-4"/>
        </svg>
        <span className="text-xs mt-1">Pay</span>
      </button>
      
      <button 
        onClick={() => navigateTo("/profile")}
        className={`flex flex-col items-center px-3 py-1 ${activeTab === "/profile" ? "text-primary" : "text-gray-500"}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span className="text-xs mt-1">Profile</span>
      </button>
    </nav>
  );
}
