import Banner from '@/components/banner'
import CallToAction from '@/components/cta';
import { FiHome } from "react-icons/fi";


export default function DocumentLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Banner name="Documents" title="Documents" icon={<FiHome />} />
      {children}
    </section>
  );
}
