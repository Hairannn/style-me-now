import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <h1 className="font-serif text-8xl mb-4">404</h1>
        <p className="text-xl text-muted-foreground font-sans mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-sans text-sm tracking-wide hover:bg-charcoal transition-all duration-300"
        >
          Return Home
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
