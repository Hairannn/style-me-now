import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl tracking-widest font-medium">
          ATELIER
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#collection"
            className="text-sm font-sans tracking-wide text-muted-foreground hover:text-foreground transition-colors"
          >
            Collection
          </a>
          <a
            href="#try-on"
            className="text-sm font-sans tracking-wide text-muted-foreground hover:text-foreground transition-colors"
          >
            Virtual Try-On
          </a>
          <a
            href="#about"
            className="text-sm font-sans tracking-wide text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
        </nav>
        <button className="px-4 py-2 text-sm font-sans tracking-wide border border-foreground hover:bg-foreground hover:text-background transition-all duration-300">
          Shop Now
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
