import { Sidenav } from "@/components/navigation/dashboard/Sidenav";
import { TopNav } from "@/components/navigation/dashboard/TopNav";

export default function DashboardLayout({ children }) {
  return (
    <div className="px-4 md:px-7 py-5 md:py-10 max-w-screen">
      <div className="w-full md:flex md:justify-end">
        <div className="w-full md:w-[80%] items-center">
          <TopNav />
        </div>
      </div>
      <div className="w-full flex justify-between flex-col md:flex-row">
        <div className="w-[250pt] md:w-[20%] px-5 py-3 relative">
          <Sidenav />
        </div>
        <div className="w-full lg:px-10 px-4 py-3">{children}</div>
      </div>
    </div>
  );
}
