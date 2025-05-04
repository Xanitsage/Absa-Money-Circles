import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/utils";
import { MoneyCircle } from "@shared/schema";

// Material Icons
import AddIcon from '@mui/icons-material/Add';
import PeopleIcon from '@mui/icons-material/People';

export default function Circles() {
  const { data: circles, isLoading } = useQuery<MoneyCircle[]>({
    queryKey: ['/api/circles']
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Money Circles</h1>
        <Link href="/create-circle">
          <Button className="flex items-center">
            <AddIcon className="w-5 h-5 mr-1" />
            Create Circle
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="text-center py-8">Loading circles...</div>
      ) : circles && circles.length > 0 ? (
        <div className="space-y-4">
          {circles.map((circle) => (
            <Link key={circle.id} href={`/circle/${circle.id}`}>
              <Card className="p-4 hover:bg-secondary/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{circle.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <PeopleIcon className="w-4 h-4 mr-1" />
                      <span>{circle.memberCount || 1} members</span>
                    </div>
                  </div>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {formatCurrency(circle.targetAmount)}
                  </span>
                </div>
                <Progress value={((circle.currentAmount || 0) / circle.targetAmount) * 100} className="h-2 mt-4" />
                <div className="flex justify-between text-sm mt-2">
                  <span>{formatCurrency(circle.currentAmount || 0)} raised</span>
                  <span className="text-muted-foreground">Target: {formatCurrency(circle.targetAmount)}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <Card className="p-6 text-center">
          <h3 className="font-semibold mb-2">No Money Circles Yet</h3>
          <p className="text-muted-foreground mb-4">Create your first circle to start saving together</p>
          <Link href="/create-circle">
            <Button>Create Your First Circle</Button>
          </Link>
        </Card>
      )}
    </div>
  );
}