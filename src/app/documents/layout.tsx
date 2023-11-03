import Banner from '@/components/banner'
import SubsribeBanner from "@/components/subscribe";
import { FiHome } from "react-icons/fi";


export default function DocumentLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Banner name="Documents" title="" icon={<FiHome />} />
      {children}
      <SubsribeBanner />
    </section>
  );
}
