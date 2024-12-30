import { Header } from "@/components/Header";
import { CategoryGrid } from "@/components/CategoryGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="animate-fade-in">
        <CategoryGrid />
      </main>
    </div>
  );
};

export default Index;