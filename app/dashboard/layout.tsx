import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
         <SidebarProvider>
      <DashboardSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    );
};

export default dashboardLayout;