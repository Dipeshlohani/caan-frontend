import Banner from "@/components/banner";
import { FiHome } from "react-icons/fi";
export default function SafetyLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      <Banner name="Civil Aviation Safety" title="Civil Aviation Safety" icon={<FiHome />} />
      {children}
    </section>
  );
}