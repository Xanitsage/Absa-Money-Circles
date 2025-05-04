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
import AbsaAppHome from "@/pages/AbsaAppHome";
import Notifications from "@/pages/Notifications"; // Import the Notifications component

function Router() {
  return (
    <Switch>
      <Route path="/absa-app" component={AbsaAppHome} />
      <Route path="*">
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/circles" component={Circles} />
            <Route path="/create" component={CreateCircle} />
            <Route path="/circle/:id" component={CircleDetail} />
            <Route path="/profile" component={Profile} />
            <Route path="/pay" component={Pay} />
            <Route path="/notifications" component={Notifications} /> {/* Added Notifications route */}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
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