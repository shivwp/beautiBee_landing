import { useState } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Star, MapPin, Phone, Mail, Calendar, Shield, CreditCard, Clock, Home, Sparkles, ChevronDown, Smartphone, Instagram } from 'lucide-react';
import beautyAppImage from '@/assets/images/beauty-1.png';
import logo from '@/assets/images/logo.svg';
import appleLogo from '@/assets/images/apple-logo.svg';
import playStoreLogo from '@/assets/images/play-store.svg';
import instagramLogo from '@/assets/images/instagram.png';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [activeSection, setActiveSection] = useState<'home' | 'terms' | 'privacy'>('home');

  const features = [
    {
      icon: Home,
      title: 'At-Home Service',
      description: 'Professional beauty services delivered to your doorstep'
    },
    {
      icon: Sparkles,
      title: 'Expert Professionals',
      description: 'Certified and experienced beauty specialists'
    },
    {
      icon: CreditCard,
      title: 'Transparent Pricing',
      description: 'No hidden charges, clear pricing upfront'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Book at your convenience, 7 days a week'
    },
    {
      icon: Shield,
      title: 'Safe & Hygienic',
      description: 'Sanitized tools and safety protocols followed'
    },
    {
      icon: Smartphone,
      title: 'Easy App Booking',
      description: 'Book in 3 simple steps via our mobile app'
    }
  ];

  const serviceCategories = [
    { name: 'Hair Care', icon: '💇‍♀️', services: '15+ Services' },
    { name: 'Nail Art', icon: '💅', services: '20+ Designs' },
    { name: 'Skincare', icon: '✨', services: '12+ Treatments' },
    { name: 'Makeup', icon: '💄', services: '10+ Styles' },
    { name: 'Spa & Massage', icon: '🌸', services: '8+ Therapies' },
    { name: 'Packages', icon: '🎁', services: 'Special Deals' }
  ];

  const popularServices = [
    {
      name: 'Bridal Makeup Package',
      price: '₹5,999',
      duration: '3 hours',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1631120629198-777872b283f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBhcnRpc3QlMjBhcHBseWluZyUyMGNvc21ldGljc3xlbnwxfHx8fDE3NzAwMDk0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Hair Spa & Treatment',
      price: '₹1,299',
      duration: '90 mins',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1511920771146-1a7271092231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyc3R5bGlzdCUyMGN1dHRpbmclMjBoYWlyJTIwc2Fsb258ZW58MXx8fHwxNzY5OTAyNjYxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Luxury Facial Treatment',
      price: '₹1,899',
      duration: '60 mins',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHdvbWFuJTIwZmFjaWFsJTIwdHJlYXRtZW50fGVufDF8fHx8MTc3MDAwOTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Gel Nail Art',
      price: '₹999',
      duration: '45 mins',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1678164685660-d2758081bf00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBwb2xpc2h8ZW58MXx8fHwxNzcwMDA5NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const howItWorks = [
    { step: 1, title: 'Download App', description: 'Get the BeautyZix app from App Store or Google Play' },
    { step: 2, title: 'Choose Service', description: 'Browse and select from our wide range of beauty services' },
    { step: 3, title: 'Book Appointment', description: 'Select date, time and confirm your booking on the app' },
    { step: 4, title: 'Expert Arrives', description: 'Trained professional arrives at your doorstep on time' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Jaipur',
      rating: 5,
      comment: 'Amazing service! The makeup artist was professional and the bridal makeup was exactly what I wanted. Highly recommend BeautyZix!',
      image: 'https://images.unsplash.com/photo-1580746453801-37b0bc56f3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAwMDk0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Anjali Reddy',
      location: 'Jaipur',
      rating: 5,
      comment: 'The hair spa treatment at home was so convenient! No need to travel, and the service was top-notch. Will book again.',
      image: 'https://images.unsplash.com/photo-1763048208932-cbe149724374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiZWF1dHklMjBleHBlcnQlMjBzdHlsaXN0fGVufDF8fHx8MTc3MDAwOTQ2MHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Neha Patel',
      location: 'Jaipur',
      rating: 5,
      comment: 'Loved the facial treatment! My skin feels so fresh and glowing. The beautician was very skilled and friendly.',
      image: 'https://images.unsplash.com/photo-1684014286330-ddbeb4a40c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHRyZWF0bWVudCUyMGZhY2lhbHxlbnwxfHx8fDE3NzAwMDk0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Divya Iyer',
      location: 'Jaipur',
      rating: 5,
      comment: 'Best beauty app ever! Easy booking, great prices, and excellent professionals. My go-to for all beauty needs.',
      image: 'https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBzYWxvbiUyMHdvbWFuJTIwZmFjaWFsJTIwdHJlYXRtZW50fGVufDF8fHx8MTc3MDAwOTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Kavya Menon',
      location: 'Jaipur',
      rating: 5,
      comment: 'The nail art service was fantastic! Beautiful designs and lasted for weeks. Very happy with BeautyZix.',
      image: 'https://images.unsplash.com/photo-1678164685660-d2758081bf00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwbWFuaWN1cmUlMjBwb2xpc2h8ZW58MXx8fHwxNzcwMDA5NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const faqs = [
    {
      question: 'How do I book a service?',
      answer: 'Download the BeautyZix app from App Store or Google Play, browse services, select your preferred date and time, and confirm your booking. Booking is currently available only through our mobile app.'
    },
    {
      question: 'Are the beauty professionals certified?',
      answer: 'Yes, all our beauty professionals are certified, trained, and experienced. We conduct thorough background checks and skill assessments before onboarding.'
    },
    {
      question: 'What safety measures do you follow?',
      answer: 'We follow strict hygiene protocols including sanitized tools, masks, gloves, and temperature checks. All products used are of premium quality and skin-tested.'
    },
    {
      question: 'Can I reschedule or cancel my appointment?',
      answer: 'Yes, you can reschedule or cancel up to 4 hours before your appointment time without any charges through the app or by calling our support team.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods including UPI, credit/debit cards, net banking, and digital wallets. You can also pay cash after service completion.'
    },
    {
      question: 'Which areas do you serve?',
      answer: 'We currently serve Jaipur and are expanding to more cities soon. Stay tuned for updates!'
    }
  ];

  const scrollToApp = () => {
    const appSection = document.getElementById('app-download');
    if (appSection) {
      appSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (activeSection === 'terms') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <button onClick={() => setActiveSection('home')} className="flex items-center gap-3">
              <img src={logo} alt="BeautyZix" className="h-10 w-auto" />

            </button>
            <button
              onClick={() => setActiveSection('home')}
              className="px-6 py-2 bg-gradient-to-r from-amber-400 to-pink-400 text-white rounded-full hover:shadow-lg transition-all"
            >
              Back to Home
            </button>
          </div>
        </header>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-800">
            <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
              Terms & Conditions
            </span>
          </h1>
          <p className="text-gray-600 mb-8">Last updated: February 2, 2026</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Acceptance of Terms</h2>
              <p className="mb-4">
                Welcome to BeautyZix. By accessing and using our mobile application and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
              </p>
              <p>
                These terms apply to all users of the BeautyZix platform, including customers, beauty professionals, and visitors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Service Description</h2>
              <p className="mb-4">
                BeautyZix is a platform that connects customers with professional beauty service providers for at-home beauty treatments. We facilitate booking, scheduling, and payment processing but do not directly provide beauty services.
              </p>
              <p className="mb-4">
                Services include but are not limited to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Hair care and styling services</li>
                <li>Nail art and manicure/pedicure</li>
                <li>Skincare and facial treatments</li>
                <li>Makeup application</li>
                <li>Spa and massage therapies</li>
                <li>Special occasion packages</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Booking and Appointments</h2>
              <p className="mb-4">
                <strong>3.1 Booking Process:</strong> All bookings must be made through the BeautyZix mobile application. Website bookings are not currently available.
              </p>
              <p className="mb-4">
                <strong>3.2 Service Area:</strong> Our services are currently available in Jaipur, Rajasthan. We are continuously expanding to new cities.
              </p>
              <p className="mb-4">
                <strong>3.3 Cancellation Policy:</strong> You may cancel or reschedule appointments up to 4 hours before the scheduled time without any charges. Cancellations made within 4 hours of the appointment may incur a cancellation fee of 20% of the service cost.
              </p>
              <p>
                <strong>3.4 No-Show Policy:</strong> Failure to be present at the scheduled time and location without prior cancellation will result in 100% service charge and may affect your ability to book future appointments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Pricing and Payment</h2>
              <p className="mb-4">
                <strong>4.1 Transparent Pricing:</strong> All service prices are displayed in Indian Rupees (₹) and include applicable taxes. No hidden charges will be added.
              </p>
              <p className="mb-4">
                <strong>4.2 Payment Methods:</strong> We accept UPI, credit/debit cards, net banking, digital wallets, and cash payments.
              </p>
              <p className="mb-4">
                <strong>4.3 Price Changes:</strong> BeautyZix reserves the right to modify service prices at any time. Changes will not affect bookings already confirmed.
              </p>
              <p>
                <strong>4.4 Refunds:</strong> Refunds for cancelled appointments will be processed within 5-7 business days to the original payment method.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">5. User Responsibilities</h2>
              <p className="mb-4">
                <strong>5.1 Accurate Information:</strong> You must provide accurate contact information, location details, and service requirements.
              </p>
              <p className="mb-4">
                <strong>5.2 Safe Environment:</strong> Customers must provide a safe, appropriate environment for beauty professionals to perform services.
              </p>
              <p className="mb-4">
                <strong>5.3 Respectful Conduct:</strong> Users must treat beauty professionals with respect. Any harassment, abuse, or inappropriate behavior will result in immediate account suspension.
              </p>
              <p>
                <strong>5.4 Product Allergies:</strong> Customers must inform beauty professionals of any allergies, skin sensitivities, or medical conditions before service begins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Beauty Professional Standards</h2>
              <p className="mb-4">
                All beauty professionals on our platform are:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Certified and trained in their respective specialties</li>
                <li>Background verified and documented</li>
                <li>Required to follow hygiene and safety protocols</li>
                <li>Insured for liability coverage</li>
                <li>Subject to customer ratings and reviews</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Limitation of Liability</h2>
              <p className="mb-4">
                BeautyZix acts as an intermediary platform. While we conduct thorough vetting of beauty professionals, we are not liable for:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Adverse reactions to products or treatments</li>
                <li>Service quality issues (though we will investigate complaints)</li>
                <li>Personal injuries occurring during service delivery</li>
                <li>Loss or damage to property</li>
              </ul>
              <p className="mt-4">
                Our maximum liability for any claim shall not exceed the total service fee paid for that specific appointment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Intellectual Property</h2>
              <p className="mb-4">
                All content on the BeautyZix platform, including logos, designs, text, graphics, and software, is the property of BeautyZix and protected by intellectual property laws.
              </p>
              <p>
                Users may not copy, modify, distribute, or reproduce any content without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Account Termination</h2>
              <p className="mb-4">
                BeautyZix reserves the right to suspend or terminate user accounts for:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Violation of these terms and conditions</li>
                <li>Fraudulent activity or payment disputes</li>
                <li>Abusive behavior toward beauty professionals or staff</li>
                <li>Multiple no-shows without valid reason</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Dispute Resolution</h2>
              <p className="mb-4">
                Any disputes arising from use of BeautyZix services shall first be attempted to be resolved through good faith negotiation. If unresolved, disputes will be subject to arbitration in Jaipur, Rajasthan, India, under the Arbitration and Conciliation Act, 1996.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">11. Changes to Terms</h2>
              <p className="mb-4">
                BeautyZix may update these Terms and Conditions at any time. Users will be notified of significant changes via the app or email. Continued use of services after changes constitutes acceptance of new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">12. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="bg-gradient-to-br from-amber-50 to-pink-50 p-6 rounded-2xl">
                <p className="mb-2">
                  <strong>Email:</strong> support@beautyzix.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 9667822661
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  if (activeSection === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <button onClick={() => setActiveSection('home')} className="flex items-center gap-3">
              <img src={logo} alt="BeautyZix" className="h-10 w-auto" />

            </button>
            <button
              onClick={() => setActiveSection('home')}
              className="px-6 py-2 bg-gradient-to-r from-amber-400 to-pink-400 text-white rounded-full hover:shadow-lg transition-all"
            >
              Back to Home
            </button>
          </div>
        </header>

        {/* Privacy Policy Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl mb-6 text-gray-800">
            <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-600 mb-8">Last updated: February 2, 2026</p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Introduction</h2>
              <p className="mb-4">
                At BeautyZix, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our mobile application and services.
              </p>
              <p>
                By using BeautyZix, you consent to the data practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Information We Collect</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">2.1 Personal Information</h3>
                <p className="mb-3">We collect the following personal information when you use our services:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Name, email address, and phone number</li>
                  <li>Home address and location details for service delivery</li>
                  <li>Payment information (securely processed through third-party payment gateways)</li>
                  <li>Profile photo (optional)</li>
                  <li>Date of birth (for age verification)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">2.2 Service Information</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Booking history and service preferences</li>
                  <li>Ratings and reviews you provide</li>
                  <li>Communication with beauty professionals and customer support</li>
                  <li>Special requests or allergies mentioned during booking</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">2.3 Technical Information</h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Device information (model, operating system, unique device identifiers)</li>
                  <li>IP address and location data</li>
                  <li>App usage statistics and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">3. How We Use Your Information</h2>
              <p className="mb-4">We use your personal information for the following purposes:</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">3.1 Service Delivery</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Processing and fulfilling service bookings</li>
                    <li>Connecting you with appropriate beauty professionals</li>
                    <li>Sending booking confirmations and reminders</li>
                    <li>Facilitating communication between you and service providers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">3.2 Payment Processing</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Processing payments and refunds</li>
                    <li>Detecting and preventing fraudulent transactions</li>
                    <li>Maintaining payment records for accounting purposes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">3.3 Improvement and Personalization</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Personalizing your experience and service recommendations</li>
                    <li>Analyzing usage patterns to improve our platform</li>
                    <li>Conducting research and development</li>
                    <li>Testing new features and services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">3.4 Communication</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Sending service updates and notifications</li>
                    <li>Providing customer support</li>
                    <li>Sharing promotional offers and deals (with your consent)</li>
                    <li>Sending newsletters and beauty tips (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">3.5 Legal Compliance</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Complying with legal obligations and regulations</li>
                    <li>Enforcing our terms and conditions</li>
                    <li>Protecting against fraud and security threats</li>
                    <li>Resolving disputes and investigating complaints</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Information Sharing</h2>
              <p className="mb-4">We share your information only in the following circumstances:</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">4.1 With Beauty Professionals</h3>
                  <p>We share necessary information (name, contact number, address, service details) with assigned beauty professionals to fulfill your booking.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">4.2 With Service Providers</h3>
                  <p>We work with third-party service providers for payment processing, analytics, cloud storage, and customer support. These providers have access only to information necessary for their functions and are bound by confidentiality agreements.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">4.3 For Legal Reasons</h3>
                  <p>We may disclose information when required by law, court order, or government authority, or to protect our rights, safety, and property.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">4.4 Business Transfers</h3>
                  <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">4.5 With Your Consent</h3>
                  <p>We may share information with other parties when you explicitly consent to such sharing.</p>
                </div>
              </div>

              <p className="mt-4 font-semibold">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Data Security</h2>
              <p className="mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure servers with regular security audits</li>
                <li>Access controls limiting employee access to personal data</li>
                <li>Regular security training for our team</li>
                <li>Secure payment processing through PCI-DSS compliant gateways</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Data Retention</h2>
              <p className="mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records</li>
              </ul>
              <p className="mt-4">
                After you close your account, we may retain certain information for up to 5 years for legal and compliance purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">7. Your Rights</h2>
              <p className="mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                <li><strong>Objection:</strong> Object to processing of your data for marketing purposes</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at support@beautyzix.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">8. Children's Privacy</h2>
              <p>
                BeautyZix is not intended for users under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a child, we will take steps to delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">9. Third-Party Links</h2>
              <p>
                Our app may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">10. Location Data</h2>
              <p className="mb-4">
                We collect and use location data to:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Match you with nearby beauty professionals</li>
                <li>Provide accurate service delivery</li>
                <li>Show location-specific offers and availability</li>
              </ul>
              <p className="mt-4">
                You can control location permissions through your device settings. Disabling location may limit service availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">11. Marketing Communications</h2>
              <p className="mb-4">
                We may send you promotional emails, SMS, or push notifications about:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Special offers and discounts</li>
                <li>New services and features</li>
                <li>Beauty tips and recommendations</li>
              </ul>
              <p className="mt-4">
                You can opt out of marketing communications at any time by:
              </p>
              <ul className="list-disc ml-6 space-y-2 mt-2">
                <li>Clicking unsubscribe in emails</li>
                <li>Replying STOP to SMS messages</li>
                <li>Adjusting notification settings in the app</li>
                <li>Contacting customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">12. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email or app notification. The "Last Updated" date at the top of this policy indicates when it was last revised.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">13. Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gradient-to-br from-amber-50 to-pink-50 p-6 rounded-2xl">
                <p className="mb-2">
                  <strong>Email:</strong> support@beautyzix.com
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> +91 9667822661
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> BeautyZix Technologies Pvt. Ltd., Jaipur, Rajasthan, India
                </p>
                <p className="mt-4 text-sm text-gray-600">
                  We will respond to your inquiries within 7 business days.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  // Main Home Section
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50 px-4 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 text-6xl opacity-20 animate-bounce">🐝</div>
          <div className="absolute bottom-40 left-10 text-4xl opacity-20 animate-bounce delay-1000">🐝</div>
          <div className="absolute top-1/2 right-1/4 text-5xl opacity-20 animate-bounce delay-500">🐝</div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block">
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <img src={logo} alt="BeautyZix" className="h-12 w-auto" />

            </div>
          </div>

          <h1 className="text-5xl md:text-7xl mb-6 text-gray-800">
            Beauty at Your <br />
            <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
              Doorstep
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Professional beauty services at home in Jaipur. Book expert beauticians, makeup artists, and hair stylists in minutes.
          </p>

          <p className="text-lg text-amber-600 mb-8 font-semibold">
            📱 Booking available only on our mobile app
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={scrollToApp}
              className="px-8 py-4 bg-gradient-to-r from-amber-400 to-pink-400 text-white rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Download App to Book
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-full text-lg border-2 border-gray-200 hover:border-amber-400 transition-all duration-300">
              View Services
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>50,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💝</span>
              <span>100% Safe & Hygienic</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800">
            Why Choose <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">BeautyZix</span>?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Your beauty, our priority. Experience premium services at home in Jaipur.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-amber-400 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800">
            Our Service Categories
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Comprehensive beauty solutions for every need
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl mb-2 text-gray-800">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.services}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800">
            Popular Services
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Most loved services by our customers in Jaipur
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold">{service.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg mb-2 text-gray-800">{service.name}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-600">{service.duration}</span>
                  </div>
                  <button
                    onClick={scrollToApp}
                    className="w-full py-2 bg-gradient-to-r from-amber-400 to-pink-400 text-white rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Download App
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800">
            How It Works
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Book your beauty service in 4 simple steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl text-amber-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800">
            What Our Jaipur Customers Say
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Real reviews from real customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{testimonial.comment}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.slice(3).map((testimonial, index) => (
              <div
                key={index + 3}
                className="bg-gradient-to-br from-amber-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section id="app-download" className="py-20 px-4 bg-gradient-to-r from-amber-400 to-pink-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-white">
              <h2 className="text-4xl md:text-5xl mb-4">
                Download the BeautyZix App
              </h2>
              <p className="text-xl mb-4 text-white/90">
                Book beauty services at home in Jaipur!
              </p>
              <p className="text-lg mb-6 text-white/95 font-semibold">
                📱 Booking is only available through our mobile app
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.beautyzix.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
                  <img src={appleLogo} alt="App Store" className="h-8 w-8" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg">App Store</div>
                  </div>
                </a>
                <a href="https://app.beautyzix.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
                  <img src={playStoreLogo} alt="Google Play" className="h-7 w-7" />
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <ImageWithFallback
                src={beautyAppImage}
                alt="BeautyZix App"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">
            Currently Serving in Jaipur
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Expanding to more cities soon!
          </p>

          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-pink-400 px-8 py-4 rounded-2xl text-white text-2xl shadow-lg">
            <MapPin className="w-8 h-8" />
            <span className="font-bold">Jaipur, Rajasthan</span>
          </div>

          <div className="mt-12 bg-gradient-to-br from-amber-50 to-pink-50 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 text-gray-800">Coming Soon To:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Ahmedabad'].map((city, index) => (
                <div key={index} className="px-4 py-2 bg-white rounded-full text-gray-600 shadow-sm">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center mb-4 text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Got questions? We've got answers!
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg text-gray-800">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                      }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Subscribe to get exclusive offers and beauty tips delivered to your inbox
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Thank you for subscribing! We'll send updates to ${email}`);
              setEmail('');
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-amber-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-amber-400 to-pink-400 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logo} alt="BeautyZix" className="h-10 w-auto" />

              </div>
              <p className="text-gray-400">
                Beauty at your doorstep in Jaipur. Professional beauty services delivered to your home with care and expertise.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => setActiveSection('terms')}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection('privacy')}
                    className="hover:text-amber-400 transition-colors"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-4">Contact Us</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <a href="mailto:support@beautyzix.com" className="hover:text-amber-400 transition-colors">
                    support@beautyzix.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <a href="tel:+919667822661" className="hover:text-amber-400 transition-colors">
                    +91 9667822661
                  </a>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="mb-3">Follow Us</h4>
                <div className="flex gap-4 text-2xl">
                  <a href="#" className="hover:scale-110 transition-transform hover:text-pink-600">
                    <img src={instagramLogo} alt="Instagram" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 BeautyZix. All rights reserved. Made with 💝 in Jaipur, India</p>
          </div>
        </div>
      </footer>

      {/* Floating CTA Button */}
      <button
        onClick={scrollToApp}
        className="fixed bottom-6 right-6 px-6 py-4 bg-gradient-to-r from-amber-400 to-pink-400 text-white rounded-full shadow-2xl hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center gap-2 z-50"
      >
        <Smartphone className="w-5 h-5" />
        <span>Download App</span>
      </button>
    </div>
  );
}
