import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import ReduxProvider from "@/components/providers/ReduxProvider";
import { BrandPartners } from "@/components/home/BrandPartners";

export default function DashboardLayout({ children }) {
  return (
    <ReduxProvider>
      <Header />
      {children}
      <BrandPartners/>
      <Footer />
      <ScrollToTop />
    </ReduxProvider>
  );
}
