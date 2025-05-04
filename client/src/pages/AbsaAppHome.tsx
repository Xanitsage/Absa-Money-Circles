import { useState } from "react";
import { useLocation } from "wouter";

export default function AbsaAppHome() {
  const [_, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-white font-sans">
      {/* Top Header */}
      <div className="flex justify-end p-2 bg-white">
        <span className="text-sm font-medium">Log out</span>
      </div>

      {/* User Info */}
      <div className="flex items-center p-4 pb-3">
        <div className="h-12 w-12 bg-[#DC0037] rounded-full flex items-center justify-center text-white font-bold mr-3">
          AA
        </div>
        <div className="flex-1">
          <h2 className="font-medium">Andile Achebe</h2>
          <p className="text-xs text-gray-600">Personal bank account</p>
        </div>
        <div className="text-gray-400">
          <span className="text-xl">›</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-between px-6 py-3">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 bg-[#DC0037] rounded-full flex items-center justify-center text-white mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="12" x="2" y="6" rx="2"/>
              <circle cx="12" cy="12" r="2"/>
              <path d="M6 12h.01M18 12h.01"/>
            </svg>
          </div>
          <span className="text-xs">Pay</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 bg-[#DC0037] rounded-full flex items-center justify-center text-white mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
              <rect x="9" y="3" width="6" height="6" rx="1"/>
            </svg>
          </div>
          <span className="text-xs">QR payments</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 bg-[#DC0037] rounded-full flex items-center justify-center text-white mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </div>
          <span className="text-xs">Transfer</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 bg-[#DC0037] rounded-full flex items-center justify-center text-white mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2"/>
              <line x1="2" x2="22" y1="10" y2="10"/>
            </svg>
          </div>
          <span className="text-xs">CashSend</span>
        </div>
      </div>

      {/* Account Cards */}
      <div className="px-4 py-3 flex-1 space-y-3">
        <div className="bg-[#DC0037] rounded-lg p-4 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-base font-medium">Cheque Account</p>
              <p className="text-xs opacity-80">15141617</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-xl">R 35 000.00</p>
              <p className="text-xs opacity-80 mt-1">Current balance</p>
            </div>
          </div>
        </div>

        <div className="bg-[#DC0037] rounded-lg p-4 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-base font-medium">Credit Account</p>
              <p className="text-xs opacity-80">15141617</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-xl">R 35 000.00</p>
              <p className="text-xs opacity-80 mt-1">Current balance</p>
            </div>
          </div>
        </div>

        <div className="bg-[#DC0037] rounded-lg p-4 text-white">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-base font-medium">Rewards</p>
              <p className="text-xs opacity-80">15141617</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-xl">R 35 000.00</p>
              <p className="text-xs opacity-80 mt-1">Current balance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t flex justify-between px-4 py-2 bg-white">
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#DC0037]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          <span className="text-[10px] text-[#DC0037]">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
          </svg>
          <span className="text-[10px] text-gray-400">Cards</span>
        </div>
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
          </svg>
          <span className="text-[10px] text-gray-400">Offers</span>
        </div>
        <div className="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <span className="text-[10px] text-gray-400">Talk to us</span>
        </div>
        <div className="flex flex-col items-center">
          <button 
            onClick={toggleMenu}
            className="flex flex-col items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
            <span className="text-[10px] text-gray-400">Menu</span>
          </button>
        </div>
      </div>

      {/* Menu Popup */}
      {menuOpen && (
        <div className="absolute inset-0 bg-white flex flex-col z-50">
          <div className="flex justify-between p-4 border-b">
            <h2 className="font-semibold text-lg">Menu</h2>
            <button 
              onClick={toggleMenu}
              className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>

          <div className="p-4 flex-1 overflow-auto">
            <div className="grid grid-cols-3 gap-4">
              <button 
                className="flex flex-col items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200"
                onClick={() => setLocation("/")}
              >
                <div className="h-12 w-12 bg-[#DC0037] rounded-full flex items-center justify-center text-white mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="8" r="6"/>
                    <circle cx="16" cy="16" r="6"/>
                    <path d="M8 14v.01"/>
                    <path d="M16 8v.01"/>
                    <path d="M12 12v.01"/>
                    <path d="M12 12v.01"/>
                  </svg>
                </div>
                <span className="text-xs font-medium">Money Circles</span>
              </button>

              <div className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center text-white mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20V10"/>
                    <path d="m18 16-6 4-6-4"/>
                    <path d="M8 4h8"/>
                    <path d="M12 4v6"/>
                  </svg>
                </div>
                <span className="text-xs font-medium">Transactions</span>
              </div>

              <div className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center text-white mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium">Security</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <button className="w-full py-2 text-center text-[#DC0037] font-medium">
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}