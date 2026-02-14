import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface PageShellProps {
  children: React.ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[72px]">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
