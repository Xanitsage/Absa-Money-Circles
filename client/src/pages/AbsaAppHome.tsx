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
          LM
        </div>
        <div className="flex-1">
          <h2 className="font-medium">Lindokuhle Msiza</h2>
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
        <div className="absolute inset-0 bg-[#f5f5f5] flex flex-col z-50">
          {/* User section at top */}
          <div className="bg-[#DC0037] p-4 text-white">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#DC0037] font-bold mr-3">
                <span>LM</span>
              </div>
              <div className="flex-1">
                <h2 className="font-bold text-sm text-white uppercase">LINDOKUHLE MSIZA</h2>
                <p className="text-xs text-white/80">Personal Bank Account</p>
              </div>
              <button 
                onClick={toggleMenu}
                className="h-8 w-8 flex items-center justify-center text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/>
                  <path d="m6 6 12 12"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Menu items */}
          <div className="flex-1 overflow-auto">
            <div className="py-1 px-4">
              <button 
                className="flex items-center py-3 w-full border-b border-gray-100"
                onClick={() => setLocation("/")}
              >
                <div className="w-6 h-6 mr-3 bg-[#DC0037] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">M</span>
                </div>
                <span className="text-[#303030] font-medium">Money Circles</span>
              </button>

              <div className="flex items-center py-3">
                <svg className="h-5 w-5 mr-4 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
                </svg>
                <span className="text-gray-800">Beneficiaries</span>
              </div>

              <div className="flex items-center py-3">
                <svg className="h-5 w-5 mr-4 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
                </svg>
                <span className="text-gray-800">Debit orders</span>
              </div>

              <div className="flex items-center py-3">
                <svg className="h-5 w-5 mr-4 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z" fill="currentColor"/>
                </svg>
                <span className="text-gray-800">Move salary and debit orders</span>
              </div>

              <div className="flex items-center py-3">
                <svg className="h-5 w-5 mr-4 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z" fill="currentColor"/>
                </svg>
                <span className="text-gray-800">Digital Limits</span>
              </div>

              <div className="flex items-center py-3">
                <svg className="h-5 w-5 mr-4 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                </svg>
                <span className="text-gray-800">International banking</span>
              </div>

              <div className="flex items-center py-3">
                <svg className="h-5 w-5 mr-4 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor"/>
                </svg>
                <span className="text-gray-800">Documents</span>
                <svg className="h-4 w-4 ml-auto text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="currentColor"/>
                </svg>
              </div>

              <div className="flex items-center py-3">
                <svg className="h-5 w-5 mr-4 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor"/>
                </svg>
                <span className="text-gray-800">Accounts settings</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}