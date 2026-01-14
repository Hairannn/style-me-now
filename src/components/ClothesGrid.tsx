import { motion } from "framer-motion";
import { useState } from "react";

interface ClothingItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  sizes: string[];
}

const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "Silk Drape Blazer",
    category: "Outerwear",
    price: 485,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Cashmere Midi Dress",
    category: "Dresses",
    price: 620,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 3,
    name: "Tailored Wool Trousers",
    category: "Bottoms",
    price: 340,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Linen Button-Down",
    category: "Tops",
    price: 195,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Structured Coat",
    category: "Outerwear",
    price: 890,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop",
    sizes: ["S", "M", "L"],
  },
  {
    id: 6,
    name: "Pleated Maxi Skirt",
    category: "Bottoms",
    price: 275,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0afe1?w=600&h=800&fit=crop",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
];

interface ClothesGridProps {
  onSelectItem: (item: ClothingItem) => void;
  selectedItem: ClothingItem | null;
}

const ClothesGrid = ({ onSelectItem, selectedItem }: ClothesGridProps) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="collection" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Curated Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium">
            The Collection
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clothingItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group cursor-pointer ${
                selectedItem?.id === item.id ? "ring-2 ring-gold" : ""
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectItem(item)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <motion.div
                  initial={false}
                  animate={{
                    opacity: hoveredId === item.id ? 1 : 0,
                  }}
                  className="absolute inset-0 bg-foreground/10 flex items-center justify-center"
                >
                  <span className="px-6 py-3 bg-background text-foreground text-sm font-sans tracking-wide">
                    Select for Try-On
                  </span>
                </motion.div>
                {selectedItem?.id === item.id && (
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-sans">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg">{item.name}</h3>
                <p className="font-sans text-sm">${item.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothesGrid;
export type { ClothingItem };
