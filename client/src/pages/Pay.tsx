import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { UserWallet } from "@shared/schema";
import { formatCurrency } from "@/lib/utils";

export default function Pay() {
  const [activeTab, setActiveTab] = useState("scan");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState<string>("");
  const [note, setNote] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [generatedQR, setGeneratedQR] = useState<string>("");
  
  // Fetch wallet data
  const { data: wallet } = useQuery<UserWallet>({
    queryKey: ['/api/wallet']
  });

  // Generate QR code (in a real app this would connect to a payment API)
  const generateQRCode = () => {
    // This is a placeholder. In a real app, you'd connect to a payment API
    // and use their QR code generation feature
    setGeneratedQR(`data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="white" />
      <g fill="black">
        <rect x="50" y="50" width="10" height="10" />
        <rect x="60" y="50" width="10" height="10" />
        <rect x="70" y="50" width="10" height="10" />
        <rect x="80" y="50" width="10" height="10" />
        <rect x="90" y="50" width="10" height="10" />
        <rect x="130" y="50" width="10" height="10" />
        <rect x="140" y="50" width="10" height="10" />
        <rect x="50" y="60" width="10" height="10" />
        <rect x="90" y="60" width="10" height="10" />
        <rect x="110" y="60" width="10" height="10" />
        <rect x="140" y="60" width="10" height="10" />
        <rect x="50" y="70" width="10" height="10" />
        <rect x="70" y="70" width="10" height="10" />
        <rect x="80" y="70" width="10" height="10" />
        <rect x="90" y="70" width="10" height="10" />
        <rect x="100" y="70" width="10" height="10" />
        <rect x="120" y="70" width="10" height="10" />
        <rect x="140" y="70" width="10" height="10" />
        <rect x="50" y="80" width="10" height="10" />
        <rect x="70" y="80" width="10" height="10" />
        <rect x="90" y="80" width="10" height="10" />
        <rect x="110" y="80" width="10" height="10" />
        <rect x="140" y="80" width="10" height="10" />
        <rect x="50" y="90" width="10" height="10" />
        <rect x="70" y="90" width="10" height="10" />
        <rect x="80" y="90" width="10" height="10" />
        <rect x="100" y="90" width="10" height="10" />
        <rect x="110" y="90" width="10" height="10" />
        <rect x="120" y="90" width="10" height="10" />
        <rect x="140" y="90" width="10" height="10" />
        <rect x="50" y="100" width="10" height="10" />
        <rect x="60" y="100" width="10" height="10" />
        <rect x="70" y="100" width="10" height="10" />
        <rect x="80" y="100" width="10" height="10" />
        <rect x="90" y="100" width="10" height="10" />
        <rect x="100" y="100" width="10" height="10" />
        <rect x="110" y="100" width="10" height="10" />
        <rect x="120" y="100" width="10" height="10" />
        <rect x="130" y="100" width="10" height="10" />
        <rect x="140" y="100" width="10" height="10" />
        <rect x="50" y="110" width="10" height="10" />
        <rect x="70" y="110" width="10" height="10" />
        <rect x="100" y="110" width="10" height="10" />
        <rect x="50" y="120" width="10" height="10" />
        <rect x="70" y="120" width="10" height="10" />
        <rect x="80" y="120" width="10" height="10" />
        <rect x="120" y="120" width="10" height="10" />
        <rect x="130" y="120" width="10" height="10" />
        <rect x="50" y="130" width="10" height="10" />
        <rect x="60" y="130" width="10" height="10" />
        <rect x="70" y="130" width="10" height="10" />
        <rect x="100" y="130" width="10" height="10" />
        <rect x="120" y="130" width="10" height="10" />
        <rect x="140" y="130" width="10" height="10" />
        <rect x="60" y="140" width="10" height="10" />
        <rect x="80" y="140" width="10" height="10" />
        <rect x="90" y="140" width="10" height="10" />
        <rect x="100" y="140" width="10" height="10" />
        <rect x="120" y="140" width="10" height="10" />
      </g>
    </svg>`);
    setShowQR(true);
  };

  // Handle pay by phone
  const handlePayByPhone = () => {
    if (!phoneNumber || !amount) return;
    
    // In a real app, you'd connect to a payment API here
    // For now, we'll just show an alert
    alert(`Payment of ${formatCurrency(parseFloat(amount))} to ${phoneNumber} initiated!`);
    
    // Reset form
    setPhoneNumber("");
    setAmount("");
    setNote("");
  };

  return (
    <div className="px-4 pt-6 pb-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Pay</h1>
        <p className="text-gray-600">Send money quickly and easily</p>
      </div>
      
      {/* Wallet Balance Card */}
      <Card className="p-4 mb-6 bg-primary text-white">
        <p className="text-sm opacity-80 mb-1">Available Balance</p>
        <h2 className="text-2xl font-bold">
          {wallet ? formatCurrency(wallet.balance) : "Loading..."}
        </h2>
      </Card>

      {/* Payment Tabs */}
      <Tabs defaultValue="scan" className="mb-6" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="scan">Scan QR</TabsTrigger>
          <TabsTrigger value="phone">Pay Phone</TabsTrigger>
          <TabsTrigger value="request">Request</TabsTrigger>
        </TabsList>
        
        <TabsContent value="scan" className="mt-4">
          {!showQR ? (
            <div className="text-center p-6">
              <div className="bg-gray-100 rounded-xl p-10 mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <rect width="3" height="3" x="7" y="7"/>
                  <rect width="3" height="3" x="14" y="7"/>
                  <rect width="3" height="3" x="7" y="14"/>
                  <rect width="3" height="3" x="14" y="14"/>
                </svg>
              </div>
              <Button onClick={generateQRCode} size="lg" className="rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <rect width="3" height="3" x="7" y="7"/>
                  <rect width="3" height="3" x="14" y="7"/>
                  <rect width="3" height="3" x="7" y="14"/>
                  <rect width="3" height="3" x="14" y="14"/>
                </svg>
                Generate Payment QR
              </Button>
            </div>
          ) : (
            <div className="text-center p-6">
              <div className="bg-white rounded-xl p-6 mb-6 flex items-center justify-center border border-gray-200">
                <img src={generatedQR || ""} alt="Payment QR Code" className="w-48 h-48" />
              </div>
              <div className="mb-4">
                <p className="text-lg font-medium">Your PayShap QR Code</p>
                <p className="text-sm text-gray-500">Other Absa users can scan this code to pay you</p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setShowQR(false)} className="flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/>
                    <line x1="16" x2="22" y1="5" y2="5"/>
                    <line x1="19" x2="19" y1="2" y2="8"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                  New Code
                </Button>
                <Button className="flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <rect width="13" height="14" x="8" y="7" rx="2" ry="2"/>
                    <path d="M8 7V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5"/>
                    <path d="M8 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3"/>
                  </svg>
                  Share Code
                </Button>
              </div>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="phone" className="mt-4 space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <Input 
              type="tel" 
              placeholder="Enter phone number" 
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Amount (ZAR)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R</span>
              <Input 
                type="number" 
                className="pl-8" 
                placeholder="0.00" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Note (Optional)</label>
            <Input 
              placeholder="What's this for?" 
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          
          <Button 
            onClick={handlePayByPhone}
            disabled={!phoneNumber || !amount}
            className="w-full rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <line x1="22" x2="11" y1="2" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Money
          </Button>
          
          <div className="pt-4">
            <p className="text-sm font-medium mb-2">Recent Recipients</p>
            <div className="grid grid-cols-4 gap-3">
              {['Sarah J', 'Michael P', 'Thabo M', 'Lerato K'].map((name, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center mb-1">
                    <span className="font-medium text-gray-700">{name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <span className="text-xs text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="request" className="mt-4 space-y-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Request From</label>
            <Input placeholder="Enter phone number or email" />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Amount (ZAR)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R</span>
              <Input type="number" className="pl-8" placeholder="0.00" />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Reason (Optional)</label>
            <Input placeholder="What's this for?" />
          </div>
          
          <Button className="w-full rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3Z"/>
              <path d="M8 17v1a4 4 0 0 0 8 0v-1"/>
              <path d="M11 9h2"/>
            </svg>
            Request Money
          </Button>
        </TabsContent>
      </Tabs>
      
      {/* Payment Methods */}
      <Card className="p-4">
        <h3 className="font-medium mb-3">Payment Methods</h3>
        <div className="flex justify-between items-center py-2 border-b">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect width="20" height="14" x="2" y="5" rx="2"/>
                <line x1="2" x2="22" y1="10" y2="10"/>
              </svg>
            </div>
            <div>
              <p className="font-medium">Absa Gold Account</p>
              <p className="text-xs text-gray-500">••••••••3456</p>
            </div>
          </div>
          <div className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs">Default</div>
        </div>
        <div className="flex justify-between items-center py-3">
          <Button variant="outline" size="sm" className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
              <path d="M12 5v14"/>
              <path d="M5 12h14"/>
            </svg>
            Add Payment Method
          </Button>
        </div>
      </Card>
    </div>
  );
}