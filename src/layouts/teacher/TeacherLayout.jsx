import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopNav from "./TopNav";

export default function TeacherLayout() {
  return (
    <div className="flex flex-col   w-full overflow-hidden">
      <TopNav />
      <div className="flex flex-col flex-grow xl:px-[80px]  relative min-h-screen -mt-[14px] md:-mt-[64px] 2xl:-mt-[70px] dark:bg-[#1A1A1A] ">
        <Outlet />
      </div>
      <Footer className="flex-shrink-0" />
    </div>
  );
}

