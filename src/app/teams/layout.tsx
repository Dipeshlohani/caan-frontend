import Banner from "@/components/banner";
import { FiHome } from "react-icons/fi";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      <Banner name="Teams" title="Teams" icon={<FiHome />} />

      {children}
    </section>
  );
}
