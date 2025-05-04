
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Notification {
  id: number;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning';
  timestamp: string;
  read: boolean;
}

export default function Notifications() {
  const { data: notifications } = useQuery<Notification[]>({
    queryKey: ['/api/notifications'],
    placeholderData: [
      {
        id: 1,
        title: "Circle Payment Received",
        message: "Sarah contributed R500 to Family Vacation Fund",
        type: "success",
        timestamp: "2024-01-20T10:30:00Z",
        read: false
      },
      {
        id: 2,
        title: "Savings Goal Update",
        message: "You're 75% towards your Holiday Fund goal!",
        type: "info",
        timestamp: "2024-01-19T15:45:00Z",
        read: true
      }
    ]
  });

  return (
    <div className="container max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      
      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="space-y-3">
          {notifications?.map((notification) => (
            <Card 
              key={notification.id} 
              className={`p-4 relative ${!notification.read ? 'border-l-4 border-primary' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{notification.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(notification.timestamp).toLocaleDateString()}
                  </p>
                </div>
                {!notification.read && (
                  <div className="h-2 w-2 rounded-full bg-primary"/>
                )}
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
