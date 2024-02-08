import { menuItems } from "../lib/data";
import Footer from "../ui/dashboard/footer/footer";
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

export default function Layout({ children }) {
  return (
    <section className="flex">
      <div className="flex-1 min-h-screen bg-bgSoft p-[20px]">
        <Sidebar />
      </div>

      <div className="flex-[4] p-[20px]">
        <Navbar />
        {children}
        <Footer />
      </div>
    </section>
  );
}
