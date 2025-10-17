// app/[locale]/privacy-policy/page.tsx
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="flex justify-center mt-5 mb-10">
      <div className="container mx-6 md:mx-20">
        <h1 className="text-center text-[26px] md:text-[46px] font-semibold mb-3 text-[#2B8C8C]">
          Privacy Policy
        </h1>
        <p>
          Welcome to IT Solutions Worldwide. Your privacy is important to us.
          This Privacy Policy explains how we collect, use, share, and protect
          your personal information when you visit our website{" "}
          <Link href="https://itsolutionsworldwide.com" className="underline">
            https://itsolutionsworldwide.com
          </Link>{" "}
          or engage with our services.
        </p>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          1. Who We Are
        </h2>
        <p>
          IT Solutions Worldwide is a technology solutions provider specializing
          in ERP implementation, supply chain optimization, IT infrastructure
          automation, and related digital services. Our commitment to your
          privacy is based on transparency and trust.
        </p>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          2. Information We Collect
        </h2>
        <p>
          We collect the following types of information: <br />
          <br />
          a. Personal Information You Provide <br />
          <ul className="list-disc ml-10">
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Phone number</li>
            <li>Job title</li>
            <li>
              Any other data you submit via contact forms, newsletter sign-ups,
              or demo requests
            </li>
          </ul>{" "}
          <br />
          b. Automatically Collected Information <br />
          <ul className="list-disc ml-10">
            <li>IP address</li>
            <li>Browser type and device</li>
            <li>Pages visited and time spent</li>
            <li>Referring site and geographic location</li>
            <li>
              Cookies and analytics data (via tools like Google Analytics)
            </li>
          </ul>
        </p>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          3. How We Use Your Information
        </h2>
        <p>
          We use your information to: <br />
          <ul className="list-disc ml-10">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries</li>
            <li>Schedule consultations or demos</li>
            <li>Send newsletters or marketing updates (with your consent)</li>
            <li>Analyze site usage and performance</li>
            <li>Comply with legal obligations</li>
          </ul>
        </p>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          4. Cookies and Tracking Technologies
        </h2>
        <p>
          We use cookies to enhance user experience, analyze site traffic, and
          tailor our marketing. By using our site, you consent to the use of
          cookies in accordance with this policy. <br />
          You can modify your cookie settings in your browser.
        </p>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          5. Data Sharing
        </h2>
        <p>
          We do not sell or rent your personal data. <br />
          We may share data with: <br />
          <ul className="list-disc ml-10">
            <li>
              Trusted third-party service providers (e.g., CRM, email, analytics
              tools)
            </li>
            <li>Legal or regulatory authorities (if required by law)</li>
            <li>
              All third parties are obligated to keep your data secure and
              confidential.
            </li>
          </ul>
        </p>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          6. International Data Transfers
        </h2>
        <p>
          If you are located outside the country where our servers are hosted,
          your data may be transferred and stored internationally. We ensure
          appropriate safeguards are in place for international data transfers,
          particularly under GDPR.
        </p>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          7. Your Data Rights
        </h2>
        <p>
          You have the right to: <br />
        </p>
        <ul className="list-disc ml-10">
          <li>Access, correct, or delete your personal information</li>
          <li>Withdraw consent at any time</li>
          <li>Object to data processing</li>
          <li>
            Lodge a complaint with a data protection authority (if applicable)
          </li>
          <li>
            To exercise your rights, email us at: [Insert your privacy contact
            email]
          </li>
        </ul>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          8. Data Retention
        </h2>
        <p>
          We retain your information only as long as necessary to: <br />
          <ul className="list-disc ml-10">
            <li>Fulfill the purposes outlined in this policy</li>
            <li>Comply with legal or accounting obligations</li>
            <li>Support ongoing business relationships</li>
          </ul>
        </p>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          9. Third-Party Links
        </h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of these websites and recommend
          reviewing their policies separately.
        </p>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          10. Security Measures
        </h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data from unauthorized access, alteration,
          disclosure, or destruction.
        </p>
        <h2 className="text-[22px] md:text-[26px] font-semibold py-2 text-[#2B8C8C]">
          11. Children’s Privacy
        </h2>
        <p>
          Our services are not intended for individuals under 16 years of age.
          We do not knowingly collect data from minors.
        </p>
      </div>
    </div>
  );
}
