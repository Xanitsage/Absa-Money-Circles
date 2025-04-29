import { ReactNode, useEffect, useState } from "react";
import BottomNavigation from "./BottomNavigation";
import { useLocation } from "wouter";
import { CircleDetails } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location, setLocation] = useLocation();
  const [circleTitle, setCircleTitle] = useState<string>("");
  
  // Get circle details for header if we're on a circle detail page
  const circleId = location.startsWith("/circle/") ? location.split("/")[2] : null;
  
  const { data: circleDetails } = useQuery<CircleDetails>({
    queryKey: ['/api/circles', circleId],
    enabled: !!circleId
  });
  
  useEffect(() => {
    if (circleDetails) {
      setCircleTitle(circleDetails.name);
    } else {
      setCircleTitle("");
    }
  }, [circleDetails]);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative pb-16">
      {/* Status Bar */}
      <div className="bg-primary text-white py-2 px-4 flex justify-between items-center">
        <div className="text-sm">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        <div className="flex space-x-2">
          <i className="ri-wifi-line text-sm"></i>
          <i className="ri-battery-charge-line text-sm"></i>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white px-4 py-3 flex justify-between items-center shadow-sm z-10 sticky top-0">
        <div className="flex items-center">
          {location !== "/" && location !== "/circles" && location !== "/create" ? (
            <button 
              onClick={() => window.history.back()} 
              className="mr-2 rounded-full p-2 bg-gray-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          ) : (
            <svg className="h-8 mr-2" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H80V30H0V0Z" fill="#E30613"/>
              <path d="M17.5 8H62.5V22H17.5V8Z" fill="white"/>
              <path d="M20 10H60V20H20V10Z" fill="#E30613"/>
            </svg>
          )}
          <h1 className="font-semibold text-lg text-gray-900">
            {circleTitle ? circleTitle : "MoneyCircles"}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="rounded-full p-2 bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
            </svg>
          </button>
          <button className="rounded-full p-2 bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />

      {/* Floating Support Button */}
      <div className="fixed bottom-20 right-4 z-10">
        <button className="bg-primary text-white rounded-full p-3 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
