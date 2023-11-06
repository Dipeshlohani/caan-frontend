import Banner from "@/components/banner";
import { FiHome } from "react-icons/fi";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Banner name="About Us" title="About Us" icon={<FiHome />} />
      {children}
    </section>
  );
}
