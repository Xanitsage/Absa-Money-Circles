import { useLocation } from "wouter";
import absaAppHome from "../assets/absa_app_home.png";
import { Button } from "@/components/ui/button";

export default function AbsaAppHome() {
  const [_, setLocation] = useLocation();

  return (
    <div className="h-screen flex flex-col">
      {/* Status Bar */}
      <div className="bg-primary text-white py-2 px-4 flex justify-between items-center">
        <div className="text-sm">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
        <div className="flex space-x-2">
          <i className="ri-wifi-line text-sm"></i>
          <i className="ri-battery-charge-line text-sm"></i>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center bg-blue-50">
        <div className="w-full p-4 bg-[#f0f4ff] text-center rounded-b-xl shadow-sm mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Absa Banking App</h2>
          <p className="text-sm text-gray-600">Welcome to your banking dashboard</p>
        </div>
        
        {/* Absa App Screenshot */}
        <div className="w-full flex-1 relative overflow-hidden px-2">
          <img 
            src={absaAppHome} 
            alt="Absa App Home" 
            className="w-full h-full object-contain rounded-xl shadow-md"
          />
          
          {/* Money Circles Button - Added to the menu */}
          <div className="absolute top-[325px] left-0 right-0 flex justify-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-6 py-6 flex items-center shadow-lg animate-pulse"
              onClick={() => setLocation("/")}
            >
              <svg className="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M12 8v8M8 12h8" strokeWidth="2" />
              </svg>
              Money Circles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}