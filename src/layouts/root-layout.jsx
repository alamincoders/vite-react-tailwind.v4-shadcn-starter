import HeaderSection from "@/components/layouts/header";
import Sidebar from "@/components/layouts/sidebar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <HeaderSection />
      <main>
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
