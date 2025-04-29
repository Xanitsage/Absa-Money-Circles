import { ReactNode, useEffect, useState } from "react";
import BottomNavigation from "./BottomNavigation";
import { useLocation } from "wouter";
import { CircleDetails } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";
import AbbyAssistant from "./AbbyAssistant";
import { ThemeToggle } from "./theme-toggle";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location, setLocation] = useLocation();
  const [circleTitle, setCircleTitle] = useState<string>("");
  const [showAbby, setShowAbby] = useState(false);
  
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
    <div className="max-w-md mx-auto bg-background min-h-screen relative pb-16">
      {/* Status Bar */}
      <div className="bg-primary text-white py-2 px-4 flex justify-between items-center">
        <div className="text-sm">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        <div className="flex space-x-2">
          <i className="ri-wifi-line text-sm"></i>
          <i className="ri-battery-charge-line text-sm"></i>
        </div>
      </div>

      {/* Header */}
      <header className="bg-background px-4 py-3 flex justify-between items-center shadow-sm z-10 sticky top-0 border-b border-border">
        <div className="flex items-center">
          {location !== "/" && location !== "/circles" && location !== "/create" ? (
            <button 
              onClick={() => window.history.back()} 
              className="mr-2 rounded-full p-2 bg-secondary text-foreground hover:bg-muted"
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
          <h1 className="font-semibold text-lg text-foreground">
            {circleTitle ? circleTitle : "MoneyCircles"}
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <button className="rounded-full p-2 bg-secondary text-foreground hover:bg-muted">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
            </svg>
          </button>
          <button className="rounded-full p-2 bg-secondary text-foreground hover:bg-muted">
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

      {/* Abby Assistant Button */}
      <div className="fixed bottom-20 right-4 z-10">
        <button 
          className="bg-primary text-white rounded-full p-3 shadow-lg flex items-center justify-center"
          onClick={() => setShowAbby(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8c-2.21 0-4 1.12-4 2.5s1.79 2.5 4 2.5c1.65 0 3 .67 3 1.5 0 .83-1.35 1.5-3 1.5a4.5 4.5 0 0 1-3.7-1.94"/>
            <path d="M12 18v-1"/>
            <path d="M12 6V2.5"/>
            <path d="M7 15H4.94a.31.31 0 0 1-.14-.59A5 5 0 0 0 2 10c0-2.76 2.69-5 6-5"/>
            <path d="M16 15h2.06a.31.31 0 0 0 .14-.59A5 5 0 0 1 20 10c0-2.76-2.69-5-6-5"/>
          </svg>
        </button>
      </div>

      {/* Abby Assistant Modal */}
      {showAbby && <AbbyAssistant onClose={() => setShowAbby(false)} />}
    </div>
  );
}
