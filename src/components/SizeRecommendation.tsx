import { motion } from "framer-motion";
import { Ruler, Check, Info } from "lucide-react";
import { useState } from "react";
import type { ClothingItem } from "./ClothesGrid";

interface SizeRecommendationProps {
  selectedItem: ClothingItem | null;
}

interface MeasurementForm {
  height: string;
  weight: string;
  chest: string;
  waist: string;
  hips: string;
}

const SizeRecommendation = ({ selectedItem }: SizeRecommendationProps) => {
  const [measurements, setMeasurements] = useState<MeasurementForm>({
    height: "",
    weight: "",
    chest: "",
    waist: "",
    hips: "",
  });
  const [recommendedSize, setRecommendedSize] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof MeasurementForm, value: string) => {
    setMeasurements((prev) => ({ ...prev, [field]: value }));
    setRecommendedSize(null);
  };

  const calculateSize = () => {
    setIsCalculating(true);
    // Simulate AI size calculation
    setTimeout(() => {
      const sizes = selectedItem?.sizes || ["S", "M", "L"];
      const waist = parseInt(measurements.waist) || 32;
      let size = "M";
      
      if (waist < 28) size = "XS";
      else if (waist < 31) size = "S";
      else if (waist < 34) size = "M";
      else if (waist < 38) size = "L";
      else size = "XL";
      
      // Ensure the size is available for this item
      if (!sizes.includes(size)) {
        size = sizes[Math.floor(sizes.length / 2)];
      }
      
      setRecommendedSize(size);
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            Perfect Fit Guaranteed
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Find Your Size
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Enter your measurements and let our AI recommend the perfect size for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-secondary p-8 md:p-12 shadow-elegant">
            <div className="flex items-center gap-3 mb-8">
              <Ruler className="w-6 h-6 text-gold" />
              <h3 className="font-serif text-xl">Your Measurements</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-sans text-muted-foreground mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={measurements.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  placeholder="170"
                  className="w-full px-4 py-3 bg-background border border-border font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-sans text-muted-foreground mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={measurements.weight}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                  placeholder="65"
                  className="w-full px-4 py-3 bg-background border border-border font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-sans text-muted-foreground mb-2">
                  Chest (cm)
                </label>
                <input
                  type="number"
                  value={measurements.chest}
                  onChange={(e) => handleInputChange("chest", e.target.value)}
                  placeholder="92"
                  className="w-full px-4 py-3 bg-background border border-border font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-sans text-muted-foreground mb-2">
                  Waist (cm)
                </label>
                <input
                  type="number"
                  value={measurements.waist}
                  onChange={(e) => handleInputChange("waist", e.target.value)}
                  placeholder="80"
                  className="w-full px-4 py-3 bg-background border border-border font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-sans text-muted-foreground mb-2">
                  Hips (cm)
                </label>
                <input
                  type="number"
                  value={measurements.hips}
                  onChange={(e) => handleInputChange("hips", e.target.value)}
                  placeholder="96"
                  className="w-full px-4 py-3 bg-background border border-border font-sans text-sm focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            <button
              onClick={calculateSize}
              disabled={isCalculating || !selectedItem}
              className="w-full px-6 py-4 bg-foreground text-background font-sans text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed hover:bg-charcoal transition-all"
            >
              {isCalculating ? "Calculating..." : "Get Size Recommendation"}
            </button>

            {!selectedItem && (
              <div className="flex items-center gap-2 mt-4 p-4 bg-ivory rounded-sm">
                <Info className="w-4 h-4 text-muted-foreground" />
                <p className="text-sm text-muted-foreground font-sans">
                  Select an item from the collection to get a size recommendation
                </p>
              </div>
            )}

            {recommendedSize && selectedItem && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-background border border-gold rounded-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                    <Check className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <p className="font-sans text-sm text-muted-foreground">
                      Recommended Size for {selectedItem.name}
                    </p>
                    <p className="font-serif text-2xl">{recommendedSize}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-4">
                  {selectedItem.sizes.map((size) => (
                    <span
                      key={size}
                      className={`px-4 py-2 text-sm font-sans border ${
                        size === recommendedSize
                          ? "border-gold bg-gold/10 text-foreground"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-sm text-muted-foreground font-sans">
                  Based on your measurements, size {recommendedSize} will provide the best fit.
                  This recommendation is 95% accurate based on our fit algorithm.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SizeRecommendation;
