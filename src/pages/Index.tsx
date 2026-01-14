import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClothesGrid, { type ClothingItem } from "@/components/ClothesGrid";
import TryOnSection from "@/components/TryOnSection";
import SizeRecommendation from "@/components/SizeRecommendation";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<ClothingItem | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ClothesGrid 
          onSelectItem={setSelectedItem} 
          selectedItem={selectedItem} 
        />
        <TryOnSection selectedItem={selectedItem} />
        <SizeRecommendation selectedItem={selectedItem} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
