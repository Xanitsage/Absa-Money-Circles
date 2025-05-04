import { useState } from "react";
import { useLocation } from "wouter";
import absaAppHomeNew from "../assets/absa_app_home_new.png";

export default function AbsaAppHome() {
  const [_, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Device frame */}
      <div className="max-w-sm mx-auto h-full flex flex-col relative bg-[#DC0037] pb-6 pt-2 px-2 rounded-2xl">
        {/* Phone mockup */}
        <div className="bg-white h-full w-full rounded-xl overflow-hidden relative flex flex-col">
          {/* Status bar */}
          <div className="flex justify-between items-center p-2 bg-white">
            <div className="text-xs font-semibold">9:41</div>
            <div className="w-16 h-5 bg-black rounded-full"></div>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-4 flex items-center justify-end">
                <div className="h-3 w-1 bg-black rounded-sm"></div>
                <div className="h-2 w-1 bg-black rounded-sm ml-[2px]"></div>
                <div className="h-1.5 w-1 bg-black rounded-sm ml-[2px]"></div>
                <div className="h-1 w-1 bg-black rounded-sm ml-[2px]"></div>
              </div>
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="h-3 w-3 border-2 border-black rounded-full"></div>
              </div>
              <div className="w-6 h-3 border-2 border-black rounded-sm relative overflow-hidden">
                <div className="absolute inset-0 w-4/5 h-full bg-black"></div>
              </div>
            </div>
          </div>

          {/* Account header */}
          <div className="flex items-center px-4 py-3 border-b">
            <div className="h-10 w-10 bg-[#DC0037] rounded-full flex items-center justify-center text-white font-bold mr-3">
              AA
            </div>
            <div className="flex-1">
              <h2 className="font-medium">Andile Acheibe</h2>
              <p className="text-xs text-gray-500">Personal bank account</p>
            </div>
            <div className="text-gray-400">
              <span className="text-xl">›</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-between px-4 py-4">
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
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                  <path d="M18 14h-8"/>
                  <path d="M15 18h-5"/>
                  <path d="M10 6h8v4h-8V6Z"/>
                </svg>
              </div>
              <span className="text-xs">Payments</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-[#DC0037] rounded-full flex items-center justify-center text-white mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"/>
                  <path d="m17 5-5-3-5 3"/>
                  <path d="m17 19-5 3-5-3"/>
                  <path d="M2 12h20"/>
                  <path d="m5 7-3 5 3 5"/>
                  <path d="m19 7 3 5-3 5"/>
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

          {/* Account cards */}
          <div className="px-4 py-3 flex-1">
            <div className="mb-3 bg-[#DC0037] rounded-lg p-3 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium">Cheque Account</p>
                  <p className="text-xs opacity-80">15141617</p>
                </div>
                <p className="font-bold text-xl">R 28 450.00</p>
              </div>
              <p className="text-xs text-right opacity-80 mt-1">Current balance</p>
            </div>

            <div className="mb-3 bg-[#DC0037] rounded-lg p-3 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium">Credit Account</p>
                  <p className="text-xs opacity-80">15141617</p>
                </div>
                <p className="font-bold text-xl">R 12 350.00</p>
              </div>
              <p className="text-xs text-right opacity-80 mt-1">Current balance</p>
            </div>

            <div className="mb-3 bg-[#DC0037] rounded-lg p-3 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium">Rewards</p>
                  <p className="text-xs opacity-80">15141617</p>
                </div>
                <p className="font-bold text-xl">R 5 200.00</p>
              </div>
              <p className="text-xs text-right opacity-80 mt-1">Current balance</p>
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="mt-auto border-t flex justify-between px-4 py-2">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#DC0037]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
              <span className="text-[10px] text-[#DC0037]">Home</span>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-3"/>
                <path d="M11 18 6 13l5-5"/>
                <path d="m13 12 11 0"/>
              </svg>
              <span className="text-[10px] text-gray-400">Quick</span>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span className="text-[10px] text-gray-400">Once</span>
            </div>
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 11 18-5v12L3 14v-3z"/>
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
              </svg>
              <span className="text-[10px] text-gray-400">Talk to us</span>
            </div>
            <div className="flex flex-col items-center">
              <button 
                onClick={toggleMenu}
                className="flex flex-col items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
                <span className="text-[10px] text-gray-400">Menu</span>
              </button>
            </div>
          </div>

          {/* Menu popup */}
          {menuOpen && (
            <div className="absolute inset-0 bg-white/95 flex flex-col">
              <div className="flex justify-between p-4 border-b">
                <h2 className="font-semibold text-lg">Menu</h2>
                <button 
                  onClick={toggleMenu}
                  className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>

              <div className="p-4 flex-1 overflow-auto">
                <div className="grid grid-cols-3 gap-4">
                  <button 
                    className="flex flex-col items-center p-3 bg-gray-100 rounded-lg"
                    onClick={() => setLocation("/")}
                  >
                    <div className="h-12 w-12 bg-[#DC0037] rounded-full flex items-center justify-center text-white mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                        <path d="m15 9-6 6"/>
                        <path d="m9 9 6 6"/>
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
                  
                  <div className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                    <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center text-white mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                      </svg>
                    </div>
                    <span className="text-xs font-medium">Statements</span>
                  </div>

                  <div className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                    <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center text-white mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 12h0"/>
                        <path d="M12 5v2"/>
                        <path d="M12 17v2"/>
                        <path d="m4.93 4.93 1.41 1.41"/>
                        <path d="m17.66 17.66 1.41 1.41"/>
                        <path d="M5 12H3"/>
                        <path d="M21 12h-2"/>
                        <path d="m4.93 19.07 1.41-1.41"/>
                        <path d="m17.66 6.34 1.41-1.41"/>
                      </svg>
                    </div>
                    <span className="text-xs font-medium">Settings</span>
                  </div>

                  <div className="flex flex-col items-center p-3 bg-gray-100 rounded-lg">
                    <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center text-white mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/>
                        <path d="M12 9h.01"/>
                        <path d="M11 12h1v4h1"/>
                      </svg>
                    </div>
                    <span className="text-xs font-medium">Help</span>
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
      </div>
    </div>
  );
}