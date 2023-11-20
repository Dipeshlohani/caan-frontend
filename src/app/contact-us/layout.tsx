import Banner from "@/components/banner";
import { FiHome } from "react-icons/fi";

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      <Banner name="Contact Us" title="Contact Us" icon={<FiHome />} />
      {children}
    </section>
  );
}