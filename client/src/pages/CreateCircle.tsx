import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { createCircleSchema, type CreateCircleData } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function CreateCircle() {
  const [, setLocation] = useLocation();
  const [contributionFrequency, setContributionFrequency] = useState<string>("weekly");
  
  // Set up form with validation
  const form = useForm<CreateCircleData>({
    resolver: zodResolver(createCircleSchema),
    defaultValues: {
      name: "",
      targetAmount: 0,
      targetDate: "",
      contributionFrequency: "weekly",
      autoSave: true,
      celebrateMilestones: true,
    },
  });

  // Create circle mutation
  const { mutate: createCircle, isPending } = useMutation({
    mutationFn: async (data: CreateCircleData) => {
      const response = await apiRequest("POST", "/api/circles", data);
      return await response.json();
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['/api/circles'] });
      setLocation(`/circle/${data.id}`);
    },
  });

  // Form submission handler
  const onSubmit = (data: CreateCircleData) => {
    const fullData = {
      ...data,
      contributionFrequency,
    };
    createCircle(fullData);
  };

  return (
    <div className="px-4 pt-6 pb-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Create a New Circle</h2>
        <p className="text-sm text-gray-600">Save money together with people you trust.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Circle Name</FormLabel>
                <FormControl>
                  <Input placeholder="Give your circle a fun name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="targetAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Savings Goal</FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-gray-500">R</span>
                    <Input 
                      type="number" 
                      placeholder="0.00" 
                      className="pl-8" 
                      {...field}
                      onChange={(e) => field.onChange(parseFloat(e.target.value))}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="targetDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="space-y-2">
            <Label>How Often Should Members Contribute?</Label>
            <div className="grid grid-cols-3 gap-2">
              <Button
                type="button"
                variant={contributionFrequency === "weekly" ? "default" : "outline"}
                className={contributionFrequency === "weekly" ? "bg-primary/10 text-primary" : ""}
                onClick={() => setContributionFrequency("weekly")}
              >
                Weekly
              </Button>
              <Button
                type="button"
                variant={contributionFrequency === "bi-weekly" ? "default" : "outline"}
                className={contributionFrequency === "bi-weekly" ? "bg-primary/10 text-primary" : ""}
                onClick={() => setContributionFrequency("bi-weekly")}
              >
                Bi-weekly
              </Button>
              <Button
                type="button"
                variant={contributionFrequency === "monthly" ? "default" : "outline"}
                className={contributionFrequency === "monthly" ? "bg-primary/10 text-primary" : ""}
                onClick={() => setContributionFrequency("monthly")}
              >
                Monthly
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Invite Members</Label>
            <div className="flex space-x-2 mb-2">
              <Input placeholder="Enter phone number or email" className="flex-1" />
              <Button type="button">Add</Button>
            </div>
            
            <div className="flex space-x-2 mb-3">
              <Button type="button" variant="outline" className="flex-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <path d="M3 13v-2a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v2"/>
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                  <path d="M3 13h18"/>
                </svg>
                Share via WhatsApp
              </Button>
              <Button type="button" variant="outline" className="flex-1 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Email Invite
              </Button>
            </div>
          </div>

          <div className="mb-6 bg-gray-100 rounded-lg p-4">
            <h4 className="font-medium mb-2">Circle Settings</h4>
            
            <FormField
              control={form.control}
              name="autoSave"
              render={({ field }) => (
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <p className="text-sm font-medium">Auto-Save</p>
                    <p className="text-xs text-gray-600">Automatically save a set amount</p>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </div>
              )}
            />
            
            <FormField
              control={form.control}
              name="celebrateMilestones"
              render={({ field }) => (
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Celebrate Milestones</p>
                    <p className="text-xs text-gray-600">Send notifications on achievements</p>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </div>
              )}
            />
          </div>

          <div className="flex space-x-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1 border-primary text-primary rounded-full"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isPending}
              className="flex-1 rounded-full"
            >
              {isPending ? "Creating..." : "Create Circle"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
