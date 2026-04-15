import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ShoppingCart, 
  MapPin, 
  Headphones,
  User,
  ArrowRight,
  CheckCircle,
  Shield,
  Truck,
  CreditCard
} from 'lucide-react';

const coreFeatures = [
  { icon: ShoppingBag, label: 'Product Mall', desc: 'Browse and shop from our curated collection of premium products' },
  { icon: ShoppingCart, label: 'Shopping Cart', desc: 'Easy checkout process with multiple payment options' },
  { icon: MapPin, label: 'Order Tracking', desc: 'Real-time tracking for all your orders' },
  { icon: Headphones, label: 'Customer Service', desc: '24/7 support team ready to help you' },
  { icon: User, label: 'My Profile', desc: 'Manage your account and view order history' },
];

const stats = [
  { value: '5K+', label: 'Products Available' },
  { value: '50+', label: 'Shipping Countries' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support Available' },
];

const benefits = [
  'Premium quality products from verified suppliers',
  'Competitive pricing with no hidden fees',
  'Fast and reliable global shipping',
  'Secure payment processing',
  'Easy returns and refunds',
];

export default function IndividualPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-hover text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in-up">
              Shop Smart, Ship Globally
            </h1>
            <p className="text-xl text-green-100 mb-8 animate-fade-in-up animation-delay-100">
              Direct-to-you dropshipping simplified. Quality products, competitive prices, and worldwide delivery.
            </p>
            <Link 
              to="/login"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors animate-fade-in-up animation-delay-200"
            >
              Start Shopping Now <ArrowRight size={20} />
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need for a seamless shopping experience
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

          <div className="mt-12 text-center">
            <Link 
              to="/login"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Start Shopping Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Shop With Us</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/login"
                className="mt-8 inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                Get Started <ArrowRight size={20} />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Shield className="w-8 h-8 text-primary mb-3" />
                    <div className="text-lg font-semibold text-gray-900">Secure Payment</div>
                    <div className="text-sm text-gray-500">100% Protected</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Truck className="w-8 h-8 text-primary mb-3" />
                    <div className="text-lg font-semibold text-gray-900">Fast Delivery</div>
                    <div className="text-sm text-gray-500">Worldwide</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <CreditCard className="w-8 h-8 text-primary mb-3" />
                    <div className="text-lg font-semibold text-gray-900">Easy Pay</div>
                    <div className="text-sm text-gray-500">Multiple Options</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Headphones className="w-8 h-8 text-primary mb-3" />
                    <div className="text-lg font-semibold text-gray-900">24/7 Support</div>
                    <div className="text-sm text-gray-500">Always Here</div>
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
