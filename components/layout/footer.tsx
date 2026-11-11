import Image from 'next/image';
import Link from "next/link";

// components/layout/footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white py-12 sm:pt-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: 4 columns on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-12">
          {/* Column 1: Logo + Company Info + Social Icons */}
          <div className="md:col-span-1 flex flex-col items-start">
            <Image 
              src="/assets/footer-logo.svg" 
              alt="IT Solutions Hub 2010" 
              width={180} 
              height={60} 
              loading="lazy" 
              className="w-auto h-12 object-contain" 
            />
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              IT Solutions Hub delivers innovative IT solutions in supply
              chain management, IT support, digital marketing, and provides
              operational excellence.
            </p>
            {/* Optional Social Icons Row can be placed here */}
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500">
              <li>
                <Link href="/blogs" className="text-base hover:text-[#236b7a] transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-base hover:text-[#236b7a] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-base hover:text-[#236b7a] transition-colors">
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/assets/Branding_Guide_For_ITWW.pdf"
                  className="text-base hover:text-[#236b7a] transition-colors"
                >
                  Our Branding
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-base hover:text-[#236b7a] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500">
              <li>
                <Link href="/scm-services" className="text-base hover:text-[#236b7a] transition-colors">
                  SCM Services
                </Link>
              </li>
              <li>
                <Link href="/it-support" className="text-base hover:text-[#236b7a] transition-colors">
                  IT Support
                </Link>
              </li>
              <li>
                <Link href="/oracle-cloud" className="text-base hover:text-[#236b7a] transition-colors">
                  Oracle Cloud
                </Link>
              </li>
              <li>
                <Link href="/digital-services" className="text-base hover:text-[#236b7a] transition-colors">
                  Digital Services
                </Link>
              </li>
              <li>
                <Link href="/staffing-support" className="text-base hover:text-[#236b7a] transition-colors">
                  Staffing Support
                </Link>
              </li>
              <li>
                <Link href="/supply-health-check-info" className="text-base hover:text-[#236b7a] transition-colors">
                  Supply Health Check
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500">
              <li>
                <Link href="/contact-us" className="text-base hover:text-[#236b7a] transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/about-us/#faq" className="text-base hover:text-[#236b7a] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-base hover:text-[#236b7a] transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-base hover:text-[#236b7a] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-base hover:text-[#236b7a] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-12 border-gray-200" />

        {/* Bottom row: disclaimers/contact info */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-[#236b7a]">
          <p>© ITSolutionsHub2010. All rights reserved</p>
          <Link
            href="mailto:info@itsolutionshub2010.com"
            className="hover:underline"
          >
            info@itsolutionshub2010.com
          </Link>
          <Link
            href="/iso-certified"
            className="inline-flex items-center gap-2 hover:underline"
          >
            <Image
              src="/assets/iso_logo.png"
              alt="ISO Certified Logo"
              width={24}
              height={22}
              className="w-6 h-auto object-contain"
            />
            <span>ISO Registration Number: IC-QM-2507032</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}