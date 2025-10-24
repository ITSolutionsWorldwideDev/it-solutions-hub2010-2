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
              src="/assets/footer-logo.png"
              alt="IT Solutions Worldwide"
            />
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              IT Solutions Worldwide delivers innovative IT solutions in supply
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
                <Link href="/about-us" className="text-base hover:text-[#175864]">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/scm-services"
                  className="text-base hover:text-[#175864]"
                >
                  SCM Services
                </Link>
              </li>
              <li>
                <Link
                  href="/supply-health-check-info"
                  className="text-base hover:text-[#175864]"
                >
                  Supply Health Check
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-base hover:text-[#175864]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-services"
                  className="text-base hover:text-[#175864]"
                >
                  Digital Services
                </Link>
              </li>
               <li>
                <Link
                  href="/blogs"
                  className="text-base hover:text-[#175864]"
                >
                  Blogs
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
                  className="text-base hover:text-[#175864]"
                >
                  SCM Services
                </Link>
              </li>
              <li>
                <Link
                  href="/it-support"
                  className="text-base hover:text-[#175864]"
                >
                  IT Support
                </Link>
              </li>
              <li>
                <Link
                  href="/oracle-cloud"
                  className="text-base hover:text-[#175864]"
                >
                  Oracle Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-services"
                  className="text-base hover:text-[#175864]"
                >
                  Digital Services
                </Link>
              </li>
              <li>
                <Link
                  href="/staffing-support"
                  className="text-base hover:text-[#175864]"
                >
                  Staffing Support
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
                  className="text-base hover:text-[#175864]"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us/#faq"
                  className="text-base hover:text-[#175864]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-base hover:text-[#175864]">
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-base hover:text-[#175864]"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-base hover:text-[#175864]"
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
          <p className="text-sm text-[#175864]">
            © IT Solutions Worldwide. All rights reserved
          </p>
          <span className="text-sm text-[#175864]">
            <Link
              href="mailto:info@itsolutionsworldwide.com"
              target="_blank"
              rel="noreferrer"
            >
              info@itsolutionsworldwide.com
            </Link>
          </span>
          <span className="text-sm text-[#175864]">
            Chamber of Commerce No. 72768916
          </span>
        </div>
      </div>
    </footer>
  );
}


