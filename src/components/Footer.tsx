import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                <span className="text-primary">Kungfu</span>
                <span className="text-white">Buy</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              KungFuBuy is a dynamic dropshipping agent dedicated to providing efficient dropshipping services for dropshippers worldwide. With our in-house sourcing team, self-operated warehouse, and professional packaging and fulfillment crew.
            </p>
            <p className="text-sm text-primary font-medium">
              Your Gateway to Global Dropshipping
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/enterprise" className="hover:text-primary transition-colors">Enterprise</a></li>
              <li><a href="/individual" className="hover:text-primary transition-colors">Individual</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>contact@kungfubuy.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>+86 130-5451-7917</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span>Yantai, Shandong, China</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2026 KungFuBuy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
