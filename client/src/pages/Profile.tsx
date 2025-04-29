import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { User } from "@shared/schema";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("account");
  
  // Fetch user data
  const { data: user, isLoading } = useQuery<User>({
    queryKey: ['/api/user']
  });

  if (isLoading || !user) {
    return <div className="p-6 text-center">Loading profile...</div>;
  }

  return (
    <div className="px-4 pt-6 pb-4">
      {/* Profile Header */}
      <div className="flex items-center mb-6">
        <Avatar className="h-20 w-20 border-2 border-primary">
          <AvatarImage src={`https://i.pravatar.cc/150?img=1`} alt={user.fullName} />
          <AvatarFallback className="bg-primary/10 text-primary">
            {user.fullName.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h2 className="text-xl font-bold">{user.fullName}</h2>
          <p className="text-gray-500">{user.email}</p>
          <div className="flex items-center mt-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full mr-2">
              Level {user.level}
            </span>
            <span className="text-xs text-gray-500">
              {user.xpPoints} XP
            </span>
          </div>
        </div>
      </div>

      {/* Wallet Overview */}
      <Card className="p-4 mb-6 bg-primary text-white">
        <h3 className="text-sm opacity-80 mb-1">My Wallet Balance</h3>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            {formatCurrency(user.walletBalance)}
          </h2>
          <Button 
            variant="ghost" 
            className="bg-white/20 text-white rounded-full text-sm"
          >
            <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" y2="12" x2="12"/>
              <line x1="12" y1="8" y2="8" x2="12"/>
            </svg>
            Details
          </Button>
        </div>
      </Card>

      {/* Profile Tabs */}
      <Tabs defaultValue="account" className="mb-6">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-4">
          {/* Personal Information */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Personal Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-1 border-b">
                <span className="text-gray-500">Full Name</span>
                <span>{user.fullName}</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-gray-500">Username</span>
                <span>@{user.username}</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-gray-500">Email</span>
                <span>{user.email}</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-gray-500">Phone</span>
                <span>+27 73 123 4567</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-gray-500">ID Number</span>
                <span>••••••••••5678</span>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-3 text-primary border-primary"
              size="sm"
            >
              Edit Profile
            </Button>
          </Card>
          
          {/* Bank Accounts */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Linked Bank Accounts</h3>
            <div className="bg-gray-50 rounded-lg p-3 mb-3 flex items-center">
              <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="20" height="14" x="2" y="5" rx="2"/>
                  <line x1="2" x2="22" y1="10" y2="10"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-medium">Absa Gold Account</p>
                <p className="text-xs text-gray-500">••••••••3456</p>
              </div>
              <Badge className="bg-green-100 text-green-600 hover:bg-green-100">Primary</Badge>
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-1"
              size="sm"
            >
              <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14"/>
                <path d="M5 12h14"/>
              </svg>
              Link Account
            </Button>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          {/* Notification Settings */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Notification Settings</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-1 border-b">
                <div>
                  <p className="font-medium">Transaction Alerts</p>
                  <p className="text-xs text-gray-500">Get alerts for all transactions</p>
                </div>
                <div className="bg-primary rounded-full w-10 h-6 flex items-center px-1">
                  <div className="bg-white rounded-full w-4 h-4 ml-auto"></div>
                </div>
              </div>
              <div className="flex justify-between items-center py-1 border-b">
                <div>
                  <p className="font-medium">Savings Reminders</p>
                  <p className="text-xs text-gray-500">Weekly reminders to save</p>
                </div>
                <div className="bg-primary rounded-full w-10 h-6 flex items-center px-1">
                  <div className="bg-white rounded-full w-4 h-4 ml-auto"></div>
                </div>
              </div>
              <div className="flex justify-between items-center py-1 border-b">
                <div>
                  <p className="font-medium">Marketing Messages</p>
                  <p className="text-xs text-gray-500">Offers and promotions</p>
                </div>
                <div className="bg-gray-300 rounded-full w-10 h-6 flex items-center px-1">
                  <div className="bg-white rounded-full w-4 h-4"></div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Security Settings */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Security Settings</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <p className="font-medium">Change Password</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <p className="font-medium">Security Questions</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
              <div className="flex justify-between items-center py-2">
                <div className="flex items-center">
                  <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3z"/>
                      <path d="M5 10V9a7 7 0 0 1 14 0v1"/>
                      <line x1="8" y1="17" x2="8" y2="22"/>
                      <line x1="16" y1="17" x2="16" y2="22"/>
                    </svg>
                  </div>
                  <p className="font-medium">Enable Biometrics</p>
                </div>
                <div className="bg-primary rounded-full w-10 h-6 flex items-center px-1">
                  <div className="bg-white rounded-full w-4 h-4 ml-auto"></div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="rewards" className="space-y-4">
          {/* XP Progress */}
          <Card className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Level {user.level} • {user.xpPoints} XP</h3>
              <Badge className="bg-amber-100 text-amber-600 hover:bg-amber-100">{100 - (user.xpPoints % 100)} XP to Level {user.level + 1}</Badge>
            </div>
            <Progress value={user.xpPoints % 100} className="h-3 mb-4" />
            
            <div className="grid grid-cols-5 gap-1 text-center mb-3">
              {[1, 2, 3, 4, 5].map((level) => (
                <div 
                  key={level}
                  className={`rounded-lg py-2 ${level <= user.level ? 'bg-primary/10 text-primary font-medium' : 'bg-gray-100 text-gray-400'}`}
                >
                  {level}
                </div>
              ))}
            </div>
          </Card>
          
          {/* Badges */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Earned Badges</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-amber-100 rounded-full p-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </div>
                <span className="text-xs font-medium">First Saver</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/10 rounded-full p-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                    <path d="M4 22h16"/>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                  </svg>
                </div>
                <span className="text-xs font-medium">Team Player</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 rounded-full p-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <path d="M12.76 2.24a1 1 0 0 0-1.52 0L7.04 7a1 1 0 0 1-.9.37l-5.18-.43a1 1 0 0 0-1.1.7l-1.2 3.97a1 1 0 0 0 .2 1.05l3.3 3.3c.27.27.38.68.28 1.05l-1.2 4.4a1 1 0 0 0 .78 1.28l4.1.73c.37.07.75-.04 1.02-.3l3.3-3.3a1 1 0 0 1 1.3 0l3.3 3.3c.27.27.65.37 1.02.3l4.1-.73a1 1 0 0 0 .78-1.28l-1.2-4.4a1.1 1.1 0 0 1 .28-1.05l3.3-3.3a1 1 0 0 0 .2-1.05l-1.2-3.97a1 1 0 0 0-1.1-.7l-5.18.43a1 1 0 0 1-.9-.37l-4.2-4.76z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-500">Goal Master</span>
              </div>
            </div>
          </Card>
          
          {/* Rewards */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Available Rewards</h3>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-600 rounded-lg p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="m8 12 3 3 5-5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">R50 Voucher</p>
                    <p className="text-xs text-gray-500">Save R1000 to unlock</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Claim</Button>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="bg-gray-200 text-gray-400 rounded-lg p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Free Movie Ticket</p>
                    <p className="text-xs text-gray-500">Complete 3 savings goals</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" disabled>Locked</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Help & Support */}
      <Card className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
              </svg>
            </div>
            <div>
              <p className="font-medium">Help & Support</p>
              <p className="text-xs text-gray-500">Contact our support team</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </div>
      </Card>
      
      {/* Logout Button */}
      <Button 
        variant="outline" 
        className="w-full mt-4 border-primary text-primary"
      >
        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <polyline points="16 17 21 12 16 7"/>
          <line x1="21" y1="12" x2="9" y2="12"/>
        </svg>
        Logout
      </Button>
    </div>
  );
}