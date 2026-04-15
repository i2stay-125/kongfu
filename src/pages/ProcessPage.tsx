import { Link } from 'react-router-dom';
import { ArrowRight, UserPlus, FileText, RefreshCcw, Truck, Globe, Headphones, Puzzle } from 'lucide-react';

const steps = [
  { 
    number: 1, 
    icon: UserPlus, 
    title: 'Account Setup', 
    desc: 'Register for a KungFuBuy account and complete verification' 
  },
  { 
    number: 2, 
    icon: FileText, 
    title: 'Sync Products', 
    desc: 'Browse our catalog and sync products to your store' 
  },
  { 
    number: 3, 
    icon: RefreshCcw, 
    title: 'Order Fulfillment', 
    desc: 'Orders automatically processed when customers purchase' 
  },
  { 
    number: 4, 
    icon: Truck, 
    title: 'Ship & Deliver', 
    desc: 'We handle packaging and global shipping to your customers' 
  },
];

const features = [
  { icon: Puzzle, title: 'Seamless Integration', desc: 'Connect with 7onDrop and major e-commerce platforms' },
  { icon: RefreshCcw, title: 'Automated Fulfillment', desc: 'Orders processed automatically, 24/7' },
  { icon: Globe, title: 'Global Shipping', desc: 'Delivery to 200+ countries worldwide' },
  { icon: Headphones, title: '24/7 Support', desc: 'Professional team ready to assist anytime' },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
              How to Launch Dropshipping
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-100">
              Get started with KungFuBuy in four simple steps. We've made dropshipping easy.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-colors animate-fade-in-up animation-delay-200"
            >
              How We Work <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 Simple Steps</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow our streamlined process to start your dropshipping journey
            </p>
          </div>

          {/* Desktop: Horizontal Steps */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-16 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-primary via-primary-light to-primary" />
              
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step) => (
                  <div key={step.number} className="relative">
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm text-center card-hover">
                      {/* Step Number */}
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: Vertical Steps */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, stepIdx) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  {stepIdx < steps.length - 1 && (
                    <div className="w-1 h-12 bg-primary/30" />
                  )}
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined workflow ensures efficient order processing from supplier to customer
            </p>
          </div>

          {/* Workflow Diagram */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { label: 'Supplier', color: 'bg-blue-500' },
                { label: 'KungFuBuy', color: 'bg-primary' },
                { label: '7onDrop', color: 'bg-purple-500' },
                { label: 'Customer', color: 'bg-orange-500' },
              ].map((item, idx) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`${item.color} text-white px-6 py-3 rounded-xl font-semibold`}>
                    {item.label}
                  </div>
                  {idx < 3 && (
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-6 border border-gray-200 text-center card-hover">
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

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful dropshippers who trust KungFuBuy for their business
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
