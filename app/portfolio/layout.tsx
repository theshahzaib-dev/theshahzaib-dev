import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-6 py-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
