import Link from "next/link";

// components/layout/footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white py-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: 4 columns on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-12">
          {/* Column 1: Logo + Company Info + Social Icons */}
          <div className="md:col-span-1">
            <img
              className="w-auto"
              src="/assets/footer-logo.svg"
              alt="IT Solutions Hub 2010"
            />
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              IT Solutions Hub 2010 delivers innovative IT solutions in supply
              chain management, IT support, digital marketing, and provides
              operational excellence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500">
               <li>
                <Link
                  href="/blogs"
                  className="text-base hover:text-[#236b7a]"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-base hover:text-[#236b7a]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-base hover:text-[#236B7A]">
                  Profile
                </Link>
              </li>
              {/* 
              <li>
                <Link
                  href="/scm-services"
                  className="text-base hover:text-[#236b7a]"
                >
                  SCM Services
                </Link>
              </li> 
              */}
              <li>
                <Link
                  target="_blank"
                  href="/assets/Branding_Guide_For_ITWW.pdf"
                  className="text-base hover:text-[#236b7a]"
                >
                  Our Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-base hover:text-[#236b7a]"
                >
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
                <Link
                  href="/scm-services"
                  className="text-base hover:text-[#236b7a]"
                >
                  SCM Services
                </Link>
              </li>
              <li>
                <Link
                  href="/it-support"
                  className="text-base hover:text-[#236b7a]"
                >
                  IT Support
                </Link>
              </li>
              <li>
                <Link
                  href="/oracle-cloud"
                  className="text-base hover:text-[#236b7a]"
                >
                  Oracle Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-services"
                  className="text-base hover:text-[#236b7a]"
                >
                  Digital Services
                </Link>
              </li>
              <li>
                <Link
                  href="/staffing-support"
                  className="text-base hover:text-[#236b7a]"
                >
                  Staffing Support
                </Link>
              </li>
              <li>
                <Link
                  href="/supply-health-check-info"
                  className="text-base hover:text-[#236b7a]"
                >
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
                <Link
                  href="/contact-us"
                  className="text-base hover:text-[#236b7a]"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/#faq"
                  className="text-base hover:text-[#236b7a]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-base hover:text-[#236b7a]">
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-base hover:text-[#236b7a]"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-base hover:text-[#236b7a]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-12 border-gray-200" />

        {/* Bottom row: disclaimers/contact info */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-evenly space-y-4 md:space-y-0 md:space-x-6">
          <p className="text-sm text-[#236b7a]">
            © ITSolutionsHub. All rights reserved
          </p>
          <span className="text-sm text-[#236b7a]">
            <Link
              href="mailto:info@itsolutionshub2010.com"
              target="_blank"
              rel="noreferrer"
            >
              info@itsolutionshub2010.com
            </Link>
          </span>
          <span className="text-sm text-[#236b7a]">
            Chamber of Commerce No. 72768916
          </span>
        </div>
      </div>
    </footer>
  );
}


