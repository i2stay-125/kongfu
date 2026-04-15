import { Link } from 'react-router-dom';
import { 
  Package, 
  Warehouse, 
  Truck, 
  FileCheck,
  Building2,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
  BarChart3
} from 'lucide-react';

const coreFeatures = [
  { icon: Package, label: 'Product Center', desc: 'Access thousands of products from verified suppliers with competitive pricing' },
  { icon: Warehouse, label: 'Warehouse Management', desc: 'Real-time inventory tracking across multiple warehouses globally' },
  { icon: Truck, label: 'Global Logistics', desc: 'Multi-carrier shipping solutions with full tracking visibility' },
  { icon: FileCheck, label: 'Quality Inspection', desc: 'Professional QC team ensures product quality before shipping' },
  { icon: Building2, label: 'Custom Solutions', desc: 'Tailored fulfillment solutions for your specific business needs' },
];

const stats = [
  { value: '10K+', label: 'Products Available' },
  { value: '50+', label: 'Countries Served' },
  { value: '99.5%', label: 'Order Accuracy' },
  { value: '24/7', label: 'Customer Support' },
];

const benefits = [
  'Seamless Integration with major e-commerce platforms',
  'Automated order processing and fulfillment',
  'Competitive wholesale pricing',
  'Dedicated account manager',
  'Real-time analytics and reporting',
];

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in-up">
              Enterprise B2B Service Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-100">
              Complete procurement and fulfillment solutions designed for growing businesses. From sourcing to delivery, we've got you covered.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-colors animate-fade-in-up animation-delay-200"
            >
              Contact Sales <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to run a successful dropshipping business
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreFeatures.map((feature) => (
              <div 
                key={feature.label} 
                className="bg-white rounded-2xl p-6 border border-gray-200 text-center card-hover"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.label}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enterprise Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Get Started <ArrowRight size={20} />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Users className="w-8 h-8 text-primary mb-3" />
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-500">Active Partners</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Globe className="w-8 h-8 text-primary mb-3" />
                    <div className="text-2xl font-bold text-gray-900">200+</div>
                    <div className="text-sm text-gray-500">Countries</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <BarChart3 className="w-8 h-8 text-primary mb-3" />
                    <div className="text-2xl font-bold text-gray-900">50M+</div>
                    <div className="text-sm text-gray-500">Orders Fulfilled</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Package className="w-8 h-8 text-primary mb-3" />
                    <div className="text-2xl font-bold text-gray-900">10K+</div>
                    <div className="text-sm text-gray-500">Products</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
