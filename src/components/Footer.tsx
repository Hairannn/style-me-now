import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="about" className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-12"
        >
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl mb-4">ATELIER</h3>
            <p className="text-background/70 font-sans text-sm leading-relaxed max-w-sm">
              Redefining the fashion experience with AI-powered virtual try-on 
              technology. See yourself in every piece before you buy.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-3 font-sans text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Outerwear
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Dresses
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Help</h4>
            <ul className="space-y-3 font-sans text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="border-t border-background/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50 font-sans">
            © 2024 ATELIER. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50 font-sans">
            <a href="#" className="hover:text-background transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
