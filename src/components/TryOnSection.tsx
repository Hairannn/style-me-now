import { motion } from "framer-motion";
import { Upload, Camera, User, Sparkles } from "lucide-react";
import { useState, useRef } from "react";
import type { ClothingItem } from "./ClothesGrid";

interface TryOnSectionProps {
  selectedItem: ClothingItem | null;
}

const TryOnSection = ({ selectedItem }: TryOnSectionProps) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setShowResult(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTryOn = () => {
    if (uploadedImage && selectedItem) {
      setIsProcessing(true);
      // Simulate AI processing
      setTimeout(() => {
        setIsProcessing(false);
        setShowResult(true);
      }, 2000);
    }
  };

  return (
    <section id="try-on" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-sans">
            AI-Powered Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Virtual Try-On
          </h2>
          <p className="text-muted-foreground font-sans max-w-xl mx-auto">
            Upload your photo and see yourself wearing any piece from our collection.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-background p-8 shadow-elegant">
              <h3 className="font-serif text-xl mb-6">1. Upload Your Photo</h3>
              
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative aspect-[3/4] border-2 border-dashed border-border rounded-sm flex flex-col items-center justify-center cursor-pointer hover:border-gold transition-colors bg-ivory/50"
              >
                {uploadedImage ? (
                  <img
                    src={uploadedImage}
                    alt="Your photo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                      <User className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="font-sans text-muted-foreground mb-2">
                      Click to upload your photo
                    </p>
                    <p className="text-sm text-muted-foreground/60">
                      Full body photo works best
                    </p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-foreground text-sm font-sans hover:bg-foreground hover:text-background transition-all"
                >
                  <Upload className="w-4 h-4" />
                  Upload Photo
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-border text-sm font-sans text-muted-foreground hover:border-foreground hover:text-foreground transition-all">
                  <Camera className="w-4 h-4" />
                  Take Photo
                </button>
              </div>
            </div>
          </motion.div>

          {/* Result Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-background p-8 shadow-elegant">
              <h3 className="font-serif text-xl mb-6">2. Preview Your Look</h3>
              
              <div className="relative aspect-[3/4] bg-ivory/50 rounded-sm flex flex-col items-center justify-center overflow-hidden">
                {isProcessing ? (
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gold border-t-transparent"
                    />
                    <p className="font-sans text-muted-foreground">
                      AI is creating your look...
                    </p>
                  </div>
                ) : showResult && uploadedImage && selectedItem ? (
                  <div className="relative w-full h-full">
                    <img
                      src={uploadedImage}
                      alt="Try-on result"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background/90 backdrop-blur-sm p-6 text-center">
                        <Sparkles className="w-8 h-8 mx-auto mb-3 text-gold" />
                        <p className="font-serif text-lg mb-1">{selectedItem.name}</p>
                        <p className="text-sm text-muted-foreground font-sans">
                          Virtual try-on preview
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 text-muted-foreground/30" />
                    <p className="font-sans text-muted-foreground">
                      Your virtual try-on will appear here
                    </p>
                    {!selectedItem && (
                      <p className="text-sm text-muted-foreground/60 mt-2">
                        Select an item from the collection first
                      </p>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={handleTryOn}
                disabled={!uploadedImage || !selectedItem || isProcessing}
                className="w-full mt-6 px-6 py-4 bg-foreground text-background font-sans text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed hover:bg-charcoal transition-all"
              >
                {isProcessing ? "Processing..." : "Generate Try-On"}
              </button>

              {selectedItem && (
                <div className="mt-4 p-4 bg-secondary rounded-sm">
                  <p className="text-sm text-muted-foreground font-sans">Selected:</p>
                  <p className="font-serif">{selectedItem.name}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TryOnSection;
