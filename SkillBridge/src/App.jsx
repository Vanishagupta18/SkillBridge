import React, { useState } from 'react';
import { ShoppingBag, Users, TrendingUp, MessageSquare, Bell, Sun, Moon, Menu, X, Heart, Star, MapPin, Search, Filter, ArrowRight, Check } from 'lucide-react';
import Logo from './assets/L.jpg'; // adjust the path according to your folder structure
import heroImage from './assets/Hero1.jpg';
import story1 from './assets/Story1.webp';
import story2 from './assets/Story2.jpg';
import story3 from './assets/Story3.jpg';
import artisan1 from "./assets/artisan1.jpg";
import artisan2 from "./assets/artisan2.jpeg";
import artisan3 from "./assets/artisan3.webp";
import artisan4 from "./assets/aritisan4.jpg";

export default function ArtConnect() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [userRole, setUserRole] = useState(null);
  const [jobFilters, setJobFilters] = useState({ type: 'all', skill: 'all', location: 'all' });

  const artisans = [
  { 
    id: 1, 
    name: 'Rajesh Kumar', 
    craft: 'Handwoven Textiles', 
    location: 'Varanasi, UP', 
    rating: 4.8, 
    image: artisan1,
    sales: 234, 
    funded: 85 
  },
  { 
    id: 2, 
    name: 'Priya Sharma', 
    craft: 'Jewelry Design', 
    location: 'Khurja, UP', 
    rating: 4.9, 
    image: artisan2,
    sales: 189, 
    funded: 92 
  },
  { 
    id: 3, 
    name: 'Anjali Devi', 
    craft: 'Pottery & Ceramics', 
    location: 'Jaipur, RJ', 
    rating: 4.7, 
    image: artisan3,
    sales: 312, 
    funded: 78 
  },
  { 
    id: 4, 
    name: 'Vikram Singh', 
    craft: 'Wood Carving', 
    location: 'Saharanpur, UP', 
    rating: 4.6, 
    image: artisan4,
    sales: 156, 
    funded: 65 
  }
];
const categories = ["All", "Textiles", "Pottery", "Jewelry", "Woodwork"];
 const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArtisans = artisans.filter(
    (artisan) =>
      (selectedCategory === "All" || artisan.category === selectedCategory) &&
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const investments = [
    { id: 1, title: 'Traditional Silk Loom Expansion', artisan: 'Priya Sharma', goal: 50000, raised: 42500, backers: 12 },
    { id: 2, title: 'Modern Pottery Studio Setup', artisan: 'Rajesh Kumar', goal: 75000, raised: 69000, backers: 18 },
    { id: 3, title: 'Jewelry Export Initiative', artisan: 'Anjali Devi', goal: 100000, raised: 78000, backers: 25 }
  ];

  const testimonials = [
    { name: 'Meera Patel', role: 'Artisan', text: 'ArtConnect helped me reach customers worldwide. My sales increased by 300%!' },
    { name: 'Arun Mehta', role: 'Investor', text: 'Investing in artisans gives me great returns while supporting local crafts.' },
    { name: 'Kavita Reddy', role: 'Artisan', text: 'The platform is easy to use and the community is incredibly supportive.' }
  ];
const stories = [
    {
      id: 1,
      title: "From Village to Global Market",
      desc: "How Priya's handwoven textiles reached customers in 15 countries...",
      img: story1,
    },
    {
      id: 2,
      title: "Clay Art Turned Into Business",
      desc: "Ravi transformed his pottery skills into a successful e-commerce venture...",
      img: story2,
    },
    {
      id: 3,
      title: "Weaving Dreams with Bamboo",
      desc: "Anita’s eco-friendly bamboo crafts got international recognition...",
      img: story3,
    },
  ];

  const faqs = [
  {
    question: "How can I contact an artisan?",
    answer: "You can view the artisan's profile and use the provided contact options to reach out directly."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit/debit cards, UPI, and net banking for secure transactions."
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery times vary depending on the artisan and your location, typically 7–15 days."
  },
  {
    question: "Can I request custom orders?",
    answer: "Yes! Most artisans accept custom orders. You can message them directly through their profile."
  }
];

  const jobs = [
    { 
      id: 1, 
      title: 'Social Media Manager for Textile Business', 
      employer: 'Priya Sharma', 
      type: 'Part-time', 
      payType: 'Paid',
      salary: '₹15,000/month',
      location: 'Remote', 
      skills: ['Social Media', 'Content Creation', 'Marketing'],
      description: 'Help promote handwoven textiles on Instagram and Facebook. Create engaging content and manage online presence.',
      posted: '2 days ago',
      applicants: 12
    },
    { 
      id: 2, 
      title: 'Assistant Potter & Clay Preparation', 
      employer: 'Rajesh Kumar', 
      type: 'Full-time', 
      payType: 'Paid',
      salary: '₹18,000/month',
      location: 'Khurja, UP', 
      skills: ['Pottery', 'Manual Work', 'Art'],
      description: 'Join our pottery studio to assist with clay preparation, basic molding, and studio maintenance.',
      posted: '5 days ago',
      applicants: 8
    },
    { 
      id: 3, 
      title: 'Jewelry Photography Intern', 
      employer: 'Anjali Devi', 
      type: 'Internship', 
      payType: 'Stipend',
      salary: '₹8,000/month',
      location: 'Jaipur, RJ', 
      skills: ['Photography', 'Editing', 'Creative'],
      description: 'Learn jewelry photography while helping create stunning product images for our online store.',
      posted: '1 week ago',
      applicants: 15
    },
    { 
      id: 4, 
      title: 'Business Development Associate', 
      employer: 'ArtConnect Foundation', 
      type: 'Full-time', 
      payType: 'Funded Project',
      salary: '₹25,000/month',
      location: 'Remote', 
      skills: ['Business Development', 'Communication', 'Networking'],
      description: 'Help connect artisans with corporate buyers and export opportunities. Funded by NGO partnership.',
      posted: '3 days ago',
      applicants: 22
    },
    { 
      id: 5, 
      title: 'Traditional Craft Teacher', 
      employer: 'Skill India Initiative', 
      type: 'Part-time', 
      payType: 'Volunteer',
      salary: 'Certificate + Experience',
      location: 'Varanasi, UP', 
      skills: ['Teaching', 'Traditional Crafts', 'Communication'],
      description: 'Teach traditional weaving techniques to young learners. Make a difference in preserving heritage crafts.',
      posted: '4 days ago',
      applicants: 6
    },
    { 
      id: 6, 
      title: 'E-commerce Website Developer', 
      employer: 'Vikram Singh', 
      type: 'Freelance', 
      payType: 'Project-based',
      salary: '₹30,000 (one-time)',
      location: 'Remote', 
      skills: ['Web Development', 'E-commerce', 'WordPress'],
      description: 'Build a professional e-commerce website for wood carving products with payment integration.',
      posted: '1 day ago',
      applicants: 18
    }
  ];

  const bgClass = darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50';
  const textClass = darkMode ? 'text-gray-100' : 'text-gray-900';
  const cardClass = darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const secondaryTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';

  const Navigation = () => (
    <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
           <div className='text-3xl'><img src={Logo} alt="Logo" className="w-20 h-16" /></div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setCurrentPage('home')} className={`${currentPage === 'home' ? 'text-orange-600' : secondaryTextClass} hover:text-orange-600 transition`}>Home</button>
            <button onClick={() => setCurrentPage('about')} className={`${currentPage === 'about' ? 'text-orange-600' : secondaryTextClass} hover:text-orange-600 transition`}>About</button>
            <button onClick={() => setCurrentPage('marketplace')} className={`${currentPage === 'marketplace' ? 'text-orange-600' : secondaryTextClass} hover:text-orange-600 transition`}>Marketplace</button>
            <button onClick={() => setCurrentPage('investments')} className={`${currentPage === 'investments' ? 'text-orange-600' : secondaryTextClass} hover:text-orange-600 transition`}>Invest</button>
            <button onClick={() => setCurrentPage('jobs')} className={`${currentPage === 'jobs' ? 'text-orange-600' : secondaryTextClass} hover:text-orange-600 transition`}>Jobs</button>
            <button onClick={() => setCurrentPage('blog')} className={`${currentPage === 'blog' ? 'text-orange-600' : secondaryTextClass} hover:text-orange-600 transition`}>Stories</button>
            <button onClick={() => setCurrentPage('contact')} className={`${currentPage === 'contact' ? 'text-orange-600' : secondaryTextClass} hover:text-orange-600 transition`}>Contact</button>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} hover:scale-110 transition-transform`}>
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
            {!userRole && (
              <>
                <button onClick={() => setUserRole('artisan')} className="hidden md:block px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition">
                  Join as Artisan
                </button>
                <button onClick={() => setUserRole('investor')} className="hidden md:block px-4 py-2 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition">
                  Join as Investor
                </button>
              </>
            )}
            {userRole && (
              <button onClick={() => setCurrentPage('dashboard')} className="hidden md:block px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition">
                Dashboard
              </button>
            )}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Home</button>
            <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">About</button>
            <button onClick={() => { setCurrentPage('marketplace'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Marketplace</button>
            <button onClick={() => { setCurrentPage('investments'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Invest</button>
            <button onClick={() => { setCurrentPage('jobs'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Jobs</button>
            <button onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Stories</button>
            <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left py-2">Contact</button>
            {!userRole && (
              <>
                <button onClick={() => setUserRole('artisan')} className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg">
                  Join as Artisan
                </button>
                <button onClick={() => setUserRole('investor')} className="w-full px-4 py-2 border-2 border-orange-500 text-orange-600 rounded-lg">
                  Join as Investor
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );

  const HomePage = () => (
    <div>
  <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[0-px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Empowering <span className="text-orange-600">Artisans</span> to Grow
        </h1>
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-8">
          Connecting creativity with opportunity. Helping artisans showcase their work and reach global investors.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-lg">
            Join as Artisan
          </button>
          <button className="px-8 py-3 border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold rounded-lg">
            Become an Investor
          </button>
        </div>
      </div>
    </section>


     <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-12">
          Featured Artisans
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artisans.map(artisan => (
            <div 
              key={artisan.id} 
              className="bg-white border rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <img 
                  src={artisan.image} 
                  alt={artisan.name} 
                  className="w-32 h-32 object-cover rounded-full border-4 border-orange-200 shadow-md transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-800 text-center">{artisan.name}</h3>
              <p className="text-gray-500 text-center mb-3">{artisan.craft}</p>

              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-600">{artisan.location}</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-800">{artisan.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{artisan.sales} sales</span>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                  View Profile
                </button>
                <button className="p-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section className={`${darkMode ? 'bg-gray-800' : 'bg-orange-50'} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${textClass} text-center mb-12`}>How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold ${textClass} mb-2`}>1. Create Profile</h3>
              <p className={secondaryTextClass}>Artisans showcase their crafts, investors discover opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold ${textClass} mb-2`}>2. Connect & Trade</h3>
              <p className={secondaryTextClass}>Buy handcrafted products or fund artisan projects</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-bold ${textClass} mb-2`}>3. Grow Together</h3>
              <p className={secondaryTextClass}>Track growth, earn returns, and build lasting partnerships</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold ${textClass} text-center mb-12`}>What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className={`${cardClass} border rounded-2xl p-6`}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className={`${textClass} mb-4 italic`}>"{testimonial.text}"</p>
                <div>
                  <p className={`font-bold ${textClass}`}>{testimonial.name}</p>
                  <p className={`text-sm ${secondaryTextClass}`}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const MarketplacePage = () => (
    <div className="py-16 bg-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-orange-700 mb-8">Explore Marketplace</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* 🔸 Sidebar Filter Section */}
          <aside className="w-full md:w-1/4 bg-white border rounded-2xl p-6 shadow-sm h-fit">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5 text-orange-500" />
              Filter by Category
            </h2>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition 
                    ${
                      selectedCategory === cat
                        ? "bg-orange-500 text-white font-semibold"
                        : "hover:bg-orange-100 text-gray-700"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* 🔸 Main Content */}
          <main className="flex-1">
            {/* Search Bar */}
            <div className="flex relative mb-8">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search artisans, products, crafts..."
                className="w-full pl-10 pr-4 py-3 bg-white border rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Artisan Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArtisans.length > 0 ? (
                filteredArtisans.map((artisan) => (
                  <div
                    key={artisan.id}
                    className="bg-white border rounded-2xl hover:shadow-lg transition-transform transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="relative h-56 w-full">
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <h3 className="absolute bottom-3 left-3 text-white text-lg font-semibold drop-shadow-md">
                        {artisan.name}
                      </h3>
                    </div>

                    <div className="p-5">
                      <p className="text-gray-600 mb-2">{artisan.craft}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-gray-600">{artisan.location}</span>
                      </div>
                      <button className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                        View Products
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center col-span-full">
                  No artisans found in this category.
                </p>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
  

  const InvestmentsPage = () => (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl font-bold ${textClass} mb-8`}>Investment Opportunities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map(inv => {
            const percentage = (inv.raised / inv.goal) * 100;
            return (
              <div key={inv.id} className={`${cardClass} border rounded-2xl p-6 hover:shadow-xl transition-all`}>
                <h3 className={`text-xl font-bold ${textClass} mb-2`}>{inv.title}</h3>
                <p className={`${secondaryTextClass} mb-4`}>by {inv.artisan}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className={`text-sm ${secondaryTextClass}`}>₹{inv.raised.toLocaleString()} raised</span>
                    <span className={`text-sm ${secondaryTextClass}`}>{percentage.toFixed(0)}%</span>
                  </div>
                  <div className={`w-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                    <div className="h-full bg-gradient-to-r from-orange-500 to-amber-600" style={{width: `${percentage}%`}}></div>
                  </div>
                  <p className={`text-sm ${secondaryTextClass} mt-2`}>Goal: ₹{inv.goal.toLocaleString()}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm ${secondaryTextClass}`}>{inv.backers} backers</span>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                    Invest Now
                  </button>
                  <button className="py-2 px-4 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition">
                    Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const Dashboard = () => {
    const dashboardData = userRole === 'artisan' ? {
      title: 'Artisan Dashboard',
      stats: [
        { label: 'Total Sales', value: '₹45,230', icon: ShoppingBag, color: 'orange' },
        { label: 'Active Orders', value: '12', icon: TrendingUp, color: 'blue' },
        { label: 'Messages', value: '8', icon: MessageSquare, color: 'green' },
        { label: 'Profile Views', value: '342', icon: Users, color: 'purple' }
      ]
    } : {
      title: 'Investor Dashboard',
      stats: [
        { label: 'Total Invested', value: '₹2,50,000', icon: TrendingUp, color: 'orange' },
        { label: 'Active Investments', value: '5', icon: ShoppingBag, color: 'blue' },
        { label: 'ROI', value: '18%', icon: TrendingUp, color: 'green' },
        { label: 'Artisans Supported', value: '12', icon: Users, color: 'purple' }
      ]
    };

    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-4xl font-bold ${textClass}`}>{dashboardData.title}</h1>
            <button onClick={() => setUserRole(null)} className="px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition">
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardData.stats.map((stat, idx) => (
              <div key={idx} className={`${cardClass} border rounded-2xl p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-orange-500" />
                  <Bell className={`w-5 h-5 ${secondaryTextClass}`} />
                </div>
                <p className={`text-3xl font-bold ${textClass} mb-2`}>{stat.value}</p>
                <p className={secondaryTextClass}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={`${cardClass} border rounded-2xl p-6`}>
              <h2 className={`text-2xl font-bold ${textClass} mb-4`}>Recent Activity</h2>
              <div className="space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-0">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <p className={`font-semibold ${textClass}`}>New order received</p>
                      <p className={`text-sm ${secondaryTextClass}`}>2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${cardClass} border rounded-2xl p-6`}>
              <h2 className={`text-2xl font-bold ${textClass} mb-4`}>Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition">
                  {userRole === 'artisan' ? 'Add New Product' : 'Browse Artisans'}
                </button>
                <button className="w-full py-3 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition">
                  {userRole === 'artisan' ? 'Create Funding Proposal' : 'View My Investments'}
                </button>
                <button className="w-full py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  View Messages
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
const AboutPage = () => (
  <div className="relative py-16">
    {/* Background image with blur and dark overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center blur-4px brightness-50"
      style={{ backgroundImage: `url(${heroImage})` }}
    ></div>

    {/* Main content */}
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <h1 className={`text-4xl font-bold mb-8 text-center`}>About SkillBridge</h1>

      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-6 leading-relaxed">
          To empower traditional artisans by connecting them with global markets and investment opportunities,
          preserving cultural heritage while fostering economic growth.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="leading-relaxed">
          Founded in 2025, SkillBridge bridges the gap between skilled artisans and modern commerce. We believe
          every handcrafted piece tells a story, and every artisan deserves the tools to thrive in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">
          <p className="text-4xl font-bold text-orange-400 mb-2">500+</p>
          <p>Artisans Supported</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">
          <p className="text-4xl font-bold text-orange-400 mb-2">₹2Cr+</p>
          <p>Funds Raised</p>
        </div>

        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">
          <p className="text-4xl font-bold text-orange-400 mb-2">50K+</p>
          <p>Products Sold</p>
        </div>
      </div>
    </div>
  </div>
);


  const BlogPage = () => {

  return (
   <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Success Stories
        </h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image with overlay */}
              <div className="relative h-100 w-full">
                <img
                  src={story.img}
                  alt={story.title}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-orange-900/60 group-hover:via-orange-500/30 transition-all duration-700"></div>
              </div>

              {/* Text content */}
              <div className="absolute bottom-0 p-6 text-white z-10 transition-all duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl font-semibold mb-2">{story.title}</h3>
                <p className="text-gray-200 mb-3">{story.desc}</p>
                <button className="text-orange-300 font-semibold hover:text-orange-400 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


  const ContactPage = () => (
  <div className="py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className={`text-4xl font-bold ${textClass} mb-8 text-center`}>Get In Touch</h1>
      
      {/* Contact Form */}
      <div className={`${cardClass} border rounded-2xl p-8 mb-16`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className={`block text-sm font-semibold ${textClass} mb-2`}>Name</label>
            <input type="text" className={`w-full px-4 py-3 ${cardClass} border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none`} />
          </div>
          <div>
            <label className={`block text-sm font-semibold ${textClass} mb-2`}>Email</label>
            <input type="email" className={`w-full px-4 py-3 ${cardClass} border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none`} />
          </div>
        </div>
        <div className="mb-6">
          <label className={`block text-sm font-semibold ${textClass} mb-2`}>Message</label>
          <textarea rows="5" className={`w-full px-4 py-3 ${cardClass} border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none`}></textarea>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition">
          Send Message
        </button>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className={`font-semibold ${textClass} mb-2`}>Email</h3>
              <p className={secondaryTextClass}>support@SkillBridge.com</p>
            </div>
            <div>
              <h3 className={`font-semibold ${textClass} mb-2`}>Phone</h3>
              <p className={secondaryTextClass}>+91 98765 43210</p>
            </div>
            <div>
              <h3 className={`font-semibold ${textClass} mb-2`}>Location</h3>
              <p className={secondaryTextClass}>New Delhi, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 rounded-2xl p-8">
        <h2 className={`text-3xl font-bold ${textClass} text-center mb-12`}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="border rounded-lg p-4 bg-white hover:shadow-md transition">
              <summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  </div>
);

  const JobsPage = () => {
    const filteredJobs = jobs.filter(job => {
      if (jobFilters.type !== 'all' && job.type !== jobFilters.type) return false;
      if (jobFilters.location !== 'all' && job.location !== jobFilters.location) return false;
      return true;
    });

    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className={`text-4xl font-bold ${textClass} mb-2`}>Jobs & Opportunities</h1>
              <p className={`${secondaryTextClass}`}>Find work in the artisan community or hire talented professionals</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition flex items-center gap-2">
              <span className="text-xl">+</span> Post a Job
            </button>
          </div>

          <div className={`${cardClass} border rounded-2xl p-6 mb-8`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className={`block text-sm font-semibold ${textClass} mb-2`}>Search Jobs</label>
                <div className="relative">
                  <Search className={`absolute left-3 top-3 w-5 h-5 ${secondaryTextClass}`} />
                  <input type="text" placeholder="Keywords..." className={`w-full pl-10 pr-4 py-2.5 ${cardClass} border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none`} />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-semibold ${textClass} mb-2`}>Job Type</label>
                <select 
                  value={jobFilters.type}
                  onChange={(e) => setJobFilters({...jobFilters, type: e.target.value})}
                  className={`w-full px-4 py-2.5 ${cardClass} border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none`}
                >
                  <option value="all">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-semibold ${textClass} mb-2`}>Location</label>
                <select 
                  value={jobFilters.location}
                  onChange={(e) => setJobFilters({...jobFilters, location: e.target.value})}
                  className={`w-full px-4 py-2.5 ${cardClass} border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none`}
                >
                  <option value="all">All Locations</option>
                  <option value="Remote">Remote</option>
                  <option value="Varanasi, UP">Varanasi, UP</option>
                  <option value="Khurja, UP">Khurja, UP</option>
                  <option value="Jaipur, RJ">Jaipur, RJ</option>
                </select>
              </div>
              <div>
                <label className={`block text-sm font-semibold ${textClass} mb-2`}>Pay Type</label>
                <select className={`w-full px-4 py-2.5 ${cardClass} border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none`}>
                  <option value="all">All</option>
                  <option value="paid">Paid</option>
                  <option value="stipend">Stipend</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="funded">Funded Project</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.map(job => (
              <div key={job.id} className={`${cardClass} border rounded-2xl p-6 hover:shadow-xl transition-all`}>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                        💼
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold ${textClass} mb-2`}>{job.title}</h3>
                        <p className={`${secondaryTextClass} mb-3`}>Posted by {job.employer} • {job.posted}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                            {job.type}
                          </span>
                          <span className={`px-3 py-1 ${job.payType === 'Volunteer' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} rounded-full text-sm font-medium`}>
                            {job.payType}
                          </span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {job.location}
                          </span>
                        </div>

                        <p className={`${textClass} mb-3`}>{job.description}</p>

                        <div className="flex flex-wrap gap-2 mb-3">
                          {job.skills.map((skill, idx) => (
                            <span key={idx} className={`px-2 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded text-sm ${secondaryTextClass}`}>
                              {skill}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <span className={`text-lg font-bold text-orange-600`}>{job.salary}</span>
                          <span className={`text-sm ${secondaryTextClass}`}>• {job.applicants} applicants</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex md:flex-col gap-2 md:w-32">
                    <button className="flex-1 md:flex-none py-2 px-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition">
                      Apply Now
                    </button>
                    <button className="flex-1 md:flex-none py-2 px-4 border-2 border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`${darkMode ? 'bg-gradient-to-r from-orange-900/30 to-amber-900/30' : 'bg-gradient-to-r from-orange-50 to-amber-50'} rounded-2xl p-8 mt-12`}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className={`text-3xl font-bold ${textClass} mb-4`}>💡 Skill Development Corner</h2>
              <p className={`${secondaryTextClass} mb-6`}>
                Enhance your skills with free courses and workshops designed for artisans and creative professionals
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`${cardClass} border rounded-xl p-4`}>
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className={`font-bold ${textClass} mb-1`}>Digital Marketing</h3>
                  <p className={`text-sm ${secondaryTextClass}`}>Learn to grow your online presence</p>
                </div>
                <div className={`${cardClass} border rounded-xl p-4`}>
                  <div className="text-3xl mb-2">📸</div>
                  <h3 className={`font-bold ${textClass} mb-1`}>Product Photography</h3>
                  <p className={`text-sm ${secondaryTextClass}`}>Capture stunning product images</p>
                </div>
                <div className={`${cardClass} border rounded-xl p-4`}>
                  <div className="text-3xl mb-2">💰</div>
                  <h3 className={`font-bold ${textClass} mb-1`}>Business Basics</h3>
                  <p className={`text-sm ${secondaryTextClass}`}>Master pricing and accounting</p>
                </div>
              </div>
              <button className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg hover:shadow-lg transition">
                Explore All Courses
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPage = () => {
    if (userRole && currentPage === 'dashboard') return <Dashboard />;
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'about': return <AboutPage />;
      case 'marketplace': return <MarketplacePage />;
      case 'investments': return <InvestmentsPage />;
      case 'jobs': return <JobsPage />;
      case 'blog': return <BlogPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} transition-colors duration-300`}>
      <Navigation />
      {renderPage()}
      
      <footer className={`${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-3xl"><img src={Logo} alt="Logo" className="w-20 h-16" /></div>
              
              </div>
              <p className={secondaryTextClass}>Empowering artisans, connecting opportunities.</p>
            </div>
            <div>
              <h3 className={`font-bold ${textClass} mb-4`}>Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setCurrentPage('about')} className={`${secondaryTextClass} hover:text-orange-600`}>About Us</button></li>
                <li><button onClick={() => setCurrentPage('marketplace')} className={`${secondaryTextClass} hover:text-orange-600`}>Marketplace</button></li>
                <li><button onClick={() => setCurrentPage('investments')} className={`${secondaryTextClass} hover:text-orange-600`}>Invest</button></li>
                <li><button onClick={() => setCurrentPage('jobs')} className={`${secondaryTextClass} hover:text-orange-600`}>Jobs</button></li>
                <li><button onClick={() => setCurrentPage('blog')} className={`${secondaryTextClass} hover:text-orange-600`}>Blog</button></li>
              </ul>
            </div>
            <div>
              <h3 className={`font-bold ${textClass} mb-4`}>Support</h3>
              <ul className="space-y-2">
                <li><button className={`${secondaryTextClass} hover:text-orange-600`}>Help Center</button></li>
                <li><button className={`${secondaryTextClass} hover:text-orange-600`}>Terms of Service</button></li>
                <li><button className={`${secondaryTextClass} hover:text-orange-600`}>Privacy Policy</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className={`${secondaryTextClass} hover:text-orange-600`}>Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className={`font-bold ${textClass} mb-4`}>Newsletter</h3>
              <p className={`${secondaryTextClass} mb-4`}>Stay updated with latest artisan stories</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className={`flex-1 px-3 py-2 ${cardClass} border rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none`} />
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} text-center ${secondaryTextClass}`}>
            <p>&copy; 2025 SkillBridge. All rights reserved. Made with ❤️ for artisans.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
