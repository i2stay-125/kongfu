import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShoppingBag, 
  Package, 
  Warehouse, 
  Truck, 
  FileCheck,
  ShoppingCart,
  MapPin,
  Headphones,
  User,
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Shield
} from 'lucide-react';

const enterpriseServices = [
  { icon: Package, label: 'Product Center', desc: 'Massive Selection · Bulk Orders' },
  { icon: Warehouse, label: 'Warehouse', desc: 'Smart Storage · Inventory Alerts' },
  { icon: Truck, label: 'Logistics', desc: 'Multi-Carrier · Full Tracking' },
  { icon: FileCheck, label: 'Customization', desc: 'Flexible Solutions · Exclusive Plans' },
  { icon: Building2, label: 'Apply Now', desc: 'Quick Onboarding · Dedicated Support' },
];

const individualServices = [
  { icon: ShoppingBag, label: 'Product Mall', desc: 'Premium Selection · Quality Guaranteed' },
  { icon: ShoppingCart, label: 'Shopping Cart', desc: 'Easy Checkout · Great Deals' },
  { icon: MapPin, label: 'Order Tracking', desc: 'Real-time Location · Worry-free' },
  { icon: Headphones, label: 'Customer Service', desc: 'Attentive Support · Easy Returns' },
  { icon: User, label: 'My Profile', desc: 'Order Management · Member Benefits' },
];

const features = [
  { icon: Zap, title: 'Fast Processing', desc: 'Orders processed within 24 hours' },
  { icon: Shield, title: 'Quality Guaranteed', desc: 'Professional QC on every order' },
  { icon: Globe, title: 'Global Reach', desc: 'Shipping to 200+ countries' },
  { icon: CheckCircle, title: 'Easy Integration', desc: 'Connect with 7onDrop & more' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-hover text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
              Empower Your Dropshipping Business
            </h1>
            <p className="text-xl lg:text-2xl text-green-100 mb-10 animate-fade-in-up animation-delay-100">
              Complete B2B platform for enterprise · Direct-to-you dropshipping simplified
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
              <Link 
                to="/enterprise"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
              >
                Enterprise Service <ArrowRight size={20} />
              </Link>
              <Link 
                to="/individual"
                className="bg-primary-light/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                Start Shopping <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise & Individual Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Enterprise Card */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-10 border border-primary/20 card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">B2B Platform</span>
                  <h2 className="text-2xl font-bold text-gray-900">Enterprise</h2>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">
                Complete B2B procurement platform with bulk customization options and professional services for your business.
              </p>

              <div className="space-y-4 mb-8">
                {enterpriseServices.map((service) => (
                  <div key={service.label} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{service.label}</div>
                      <div className="text-sm text-gray-500">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/enterprise"
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 w-full"
              >
                Apply Now <ArrowRight size={20} />
              </Link>
            </div>

            {/* Individual Card */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm card-hover">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-gray-700" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">B2C Platform</span>
                  <h2 className="text-2xl font-bold text-gray-900">Individual</h2>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8">
                Premium selection with easy ordering and quality service. Shop smart and ship globally with ease.
              </p>

              <div className="space-y-4 mb-8">
                {individualServices.map((service) => (
                  <div key={service.label} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 transition-colors">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{service.label}</div>
                      <div className="text-sm text-gray-500">{service.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/individual"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 w-full"
              >
                Start Shopping <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose KungFuBuy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive solutions for your dropshipping needs with professional services and global reach.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className={`text-center p-6 rounded-2xl border border-gray-100 card-hover animate-fade-in-up animation-delay-${(index + 1) * 100}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
