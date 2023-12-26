import Banner from "@/components/banner";
import { FiHome } from "react-icons/fi";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      <Banner name="Search Results" title="Search Results" icon={<FiHome />} />
      {children}
    </section>
  );
}