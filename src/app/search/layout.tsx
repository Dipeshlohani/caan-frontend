import Banner from "@/components/banner";
import { FiHome } from "react-icons/fi";
import Search from "@/components/search/Search"; // Import your Search component

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      <Banner name="Search Result" title="Search Results" icon={<FiHome />} />
      <Search />
      {children}
    </section>
  );
}
