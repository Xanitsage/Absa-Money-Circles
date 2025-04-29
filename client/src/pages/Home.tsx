import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ProgressCircle from "@/components/ui/progress-circle";
import { UserWallet, SavingsGoal, MoneyCircle } from "@shared/schema";

export default function Home() {
  const { data: wallet, isLoading: isLoadingWallet } = useQuery<UserWallet>({
    queryKey: ['/api/wallet']
  });

  const { data: savings, isLoading: isLoadingSavings } = useQuery<SavingsGoal[]>({
    queryKey: ['/api/savings']
  });

  const { data: circles, isLoading: isLoadingCircles } = useQuery<MoneyCircle[]>({
    queryKey: ['/api/circles']
  });

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', { 
      style: 'currency', 
      currency: 'ZAR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Calculate progress percentage
  const calculateProgress = (current: number, target: number) => {
    return Math.round((current / target) * 100);
  };

  return (
    <div className="px-4 pt-6 pb-4">
      {/* Wallet Card */}
      <div className="bg-primary rounded-xl p-6 text-white mb-6">
        <p className="text-sm opacity-80 mb-1">My Wallet Balance</p>
        <h2 className="text-3xl font-bold mb-4">
          {isLoadingWallet ? "Loading..." : formatCurrency(wallet?.balance || 0)}
        </h2>
        <div className="flex space-x-2">
          <button className="bg-white bg-opacity-20 rounded-full py-2 px-4 text-sm font-medium flex items-center">
            <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14"/>
              <path d="M5 12h14"/>
            </svg>
            Add Money
          </button>
          <button className="bg-white bg-opacity-20 rounded-full py-2 px-4 text-sm font-medium flex items-center">
            <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2"/>
              <line x1="2" x2="22" y1="10" y2="10"/>
            </svg>
            Cards
          </button>
        </div>
      </div>

      {/* Missions Tracker */}
      <Card className="p-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg">My Missions</h3>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">Level 2</span>
        </div>
        <Progress value={65} className="h-4 mb-2" />
        <div className="flex justify-between text-xs">
          <span>65 XP</span>
          <span>100 XP needed for Level 3</span>
        </div>
        <div className="mt-4 flex space-x-2">
          <div className="flex-1 bg-gray-100 rounded-lg p-3 text-center">
            <span className="text-amber-500 text-lg block mb-1">🪙</span>
            <span className="text-xs">Save R500 more</span>
          </div>
          <div className="flex-1 bg-gray-100 rounded-lg p-3 text-center">
            <span className="text-primary text-lg block mb-1">👥</span>
            <span className="text-xs">Invite a friend</span>
          </div>
          <div className="flex-1 bg-gray-100 rounded-lg p-3 text-center">
            <span className="text-green-500 text-lg block mb-1">❓</span>
            <span className="text-xs">Take a quiz</span>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <button className="flex flex-col items-center">
          <div className="bg-gray-100 rounded-full p-3 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <line x1="22" x2="11" y1="2" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </div>
          <span className="text-xs">Send</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="bg-gray-100 rounded-full p-3 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <rect width="3" height="3" x="7" y="7"/>
              <rect width="3" height="3" x="14" y="7"/>
              <rect width="3" height="3" x="7" y="14"/>
              <rect width="3" height="3" x="14" y="14"/>
            </svg>
          </div>
          <span className="text-xs">Pay QR</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="bg-gray-100 rounded-full p-3 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <span className="text-xs">Request</span>
        </button>
        <button className="flex flex-col items-center">
          <div className="bg-gray-100 rounded-full p-3 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <circle cx="12" cy="12" r="1"/>
              <circle cx="19" cy="12" r="1"/>
              <circle cx="5" cy="12" r="1"/>
            </svg>
          </div>
          <span className="text-xs">More</span>
        </button>
      </div>

      {/* My Savings */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">My Savings</h3>
          <Link href="/savings" className="text-primary text-sm font-medium">See All</Link>
        </div>
        
        {isLoadingSavings ? (
          <div className="py-8 text-center">Loading savings...</div>
        ) : savings && savings.length > 0 ? (
          savings.map((saving) => (
            <Card key={saving.id} className="p-4 mb-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{saving.name}</h4>
                <span className={`text-xs ${
                  saving.status === 'On Track' 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-amber-100 text-amber-600'
                } px-2 py-1 rounded-full`}>
                  {saving.status}
                </span>
              </div>
              <Progress 
                value={calculateProgress(saving.currentAmount, saving.targetAmount)} 
                className={`h-2 mb-2 ${
                  saving.status === 'On Track' ? 'bg-green-500' : 'bg-amber-500'
                }`} 
              />
              <div className="flex justify-between text-sm">
                <span className="font-medium">{formatCurrency(saving.currentAmount)} saved</span>
                <span className="text-gray-500">Goal: {formatCurrency(saving.targetAmount)}</span>
              </div>
            </Card>
          ))
        ) : (
          <Card className="p-4 text-center">
            <p>No savings goals yet</p>
            <button className="mt-2 text-primary font-medium">Create a goal</button>
          </Card>
        )}
      </div>

      {/* Money Circles */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">My Circles</h3>
          <Link href="/circles" className="text-primary text-sm font-medium">See All</Link>
        </div>
        
        {isLoadingCircles ? (
          <div className="py-8 text-center">Loading circles...</div>
        ) : circles && circles.length > 0 ? (
          circles.map((circle) => (
            <Link href={`/circle/${circle.id}`} key={circle.id}>
              <Card className="p-4 mb-3">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <div className={`${
                      calculateProgress(circle.currentAmount, circle.targetAmount) >= 75
                        ? 'bg-amber-100 text-amber-500'
                        : 'bg-primary/10 text-primary'
                    } rounded-full p-2 mr-3`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">{circle.name}</h4>
                      <p className="text-xs text-gray-500">{circle.memberCount} members</p>
                    </div>
                  </div>
                  <ProgressCircle 
                    percentage={calculateProgress(circle.currentAmount, circle.targetAmount)} 
                    isCelebrating={calculateProgress(circle.currentAmount, circle.targetAmount) >= 75}
                  />
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{formatCurrency(circle.currentAmount)} saved</span>
                  <span className="text-gray-500">Goal: {formatCurrency(circle.targetAmount)}</span>
                </div>
                <div className="mt-3 flex overflow-hidden">
                  <div className="flex -space-x-2">
                    {circle.members.slice(0, 3).map((member, index) => (
                      <div 
                        key={index}
                        className="w-6 h-6 bg-primary text-white rounded-full border border-white flex items-center justify-center text-xs font-medium"
                      >
                        {member.id}
                      </div>
                    ))}
                    {circle.members.length > 3 && (
                      <div className="w-6 h-6 rounded-full border border-white bg-gray-100 flex items-center justify-center text-xs">
                        +{circle.members.length - 3}
                      </div>
                    )}
                  </div>
                  <div className="ml-auto flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-1">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                    <span className="text-xs">{circle.unreadMessages} new</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <Card className="p-4 text-center">
            <p>No circles yet</p>
            <Link href="/circles">
              <button className="mt-2 text-primary font-medium">Join a circle</button>
            </Link>
          </Card>
        )}
      </div>
    </div>
  );
}
