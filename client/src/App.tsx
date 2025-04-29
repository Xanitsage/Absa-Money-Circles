import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Circles from "@/pages/Circles";
import CreateCircle from "@/pages/CreateCircle";
import CircleDetail from "@/pages/CircleDetail";
import Profile from "@/pages/Profile";
import Pay from "@/pages/Pay";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/circles" component={Circles} />
        <Route path="/create" component={CreateCircle} />
        <Route path="/circle/:id" component={CircleDetail} />
        <Route path="/profile" component={Profile} />
        <Route path="/pay" component={Pay} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
