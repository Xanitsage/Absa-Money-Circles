import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { User, UserWallet } from "@shared/schema";
import { formatCurrency } from "@/lib/utils";

// Material Design Icons for badges
import SavingsIcon from '@mui/icons-material/Savings';
import FlagIcon from '@mui/icons-material/Flag';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CasinoIcon from '@mui/icons-material/Casino';

export default function Profile() {
  
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);

  // Fetch user data
  const { data: user } = useQuery<User>({
    queryKey: ['/api/user']
  });

  // Fetch wallet data
  const { data: wallet } = useQuery<UserWallet>({
    queryKey: ['/api/wallet']
  });

  return (
    <div className="px-4 pt-6 pb-28">
      {/* Profile Header */}
      <div className="flex items-center mb-6">
        <Avatar className="h-20 w-20 border-4 border-primary">
          <div className="bg-primary text-white text-xl font-semibold h-full w-full flex items-center justify-center">
            LM
          </div>
        </Avatar>
        <div className="ml-4">
          <h1 className="text-2xl font-bold">Lindokuhle Msiza</h1>
          <p className="text-gray-500">lindokuhle.msiza@gmail.com</p>
          <div className="flex items-center mt-1">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
              Level {user?.level || 1}
            </span>
            <span className="text-xs ml-2 text-gray-500">
              {user?.xpPoints || 0} XP
            </span>
          </div>
        </div>
      </div>



      {/* Card Details (Hidden by default) */}
      {showCardDetails && (
        <Card className="p-4 mb-6 bg-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Your Cards</h3>
            <Button variant="ghost" size="sm">Manage</Button>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-xl flex justify-between items-center shadow-sm">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="14" x="2" y="5" rx="2"/>
                    <line x1="2" x2="22" y1="10" y2="10"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Lindokuhle Msiza - Gold Debit</p>
                  <p className="text-xs text-gray-500">••••••••3456</p>
                </div>
              </div>
              <div className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs">Active</div>
            </div>
            <div className="p-3 bg-white rounded-xl flex justify-between items-center shadow-sm">
              <div className="flex items-center">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="14" x="2" y="5" rx="2"/>
                    <line x1="2" x2="22" y1="10" y2="10"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Lindokuhle Msiza - Rewards Credit</p>
                  <p className="text-xs text-gray-500">••••••••7890</p>
                </div>
              </div>
              <div className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-xs">Active</div>
            </div>
            <Button variant="outline" className="w-full mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M12 5v14"/>
                <path d="M5 12h14"/>
              </svg>
              Add New Card
            </Button>
          </div>
        </Card>
      )}

      {/* Badges/Achievements */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">Your Badges</h3>
        <div className="flex overflow-x-auto space-x-3 pb-2"> {/* Added overflow-x-auto */}
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-1">
              <SavingsIcon style={{ width: '32px', height: '32px' }} className="text-primary" />
            </div>
            <span className="text-xs text-center">Early Saver</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-1">
              <FlagIcon style={{ width: '32px', height: '32px' }} className="text-primary" />
            </div>
            <span className="text-xs text-center">Goal Setter</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-1">
              <GroupsIcon style={{ width: '32px', height: '32px' }} className="text-primary" />
            </div>
            <span className="text-xs text-center">Team Player</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-1">
              <AccessTimeIcon style={{ width: '32px', height: '32px' }} className="text-primary" />
            </div>
            <span className="text-xs text-center">Always on Time</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-1">
              <CasinoIcon style={{ width: '32px', height: '32px' }} className="text-primary" />
            </div>
            <span className="text-xs text-center">Lucky Saver</span>
          </div>
        </div>
      </div>

      {/* Settings */}
      <Card className="p-4 mb-6">
        <h3 className="font-semibold mb-4">Settings</h3>

        <div className="space-y-3">
          

          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gray-500">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
              <span>Notifications</span>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>

          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gray-500">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              </svg>
              <span>Auto-Save</span>
            </div>
            <Switch checked={autoSave} onCheckedChange={setAutoSave} />
          </div>

          <Separator />

          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gray-500">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="M6 8h.01"></path>
                <path d="M10 8h.01"></path>
                <path d="M14 8h.01"></path>
                <path d="M18 8h.01"></path>
                <path d="M8 12h.01"></path>
                <path d="M12 12h.01"></path>
                <path d="M16 12h.01"></path>
                <path d="M7 16h10"></path>
              </svg>
              <span>PIN & Security</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </div>

          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gray-500">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <span>Privacy</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </div>

          <div className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-gray-500">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <span>About</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </div>
        </div>
      </Card>

      <div className="text-center">
        <Button variant="outline" className="text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          Sign Out
        </Button>

      </div>
    </div>
  );
}