'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa';
import Link from 'next/link';

type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<FormData>;

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const validateEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Errors = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);

      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      try {
        await emailjs.send(
          'service_cnlhcq5', // Your service ID
          'template_esshcqn', // Your template ID
          templateParams,
          '2rwwu502Od15TPbDz' // Your public key
        );
        setEmailStatus('Email sent successfully!');
        setFormData({ fullName: '', email: '', subject: '', message: '' }); // Clear form
      } catch (error) {
        console.error('Error:', error);
        setEmailStatus('Failed to send email. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div
      style={{
        background: `radial-gradient(circle, #0A8F89 0%, rgba(15, 182, 174, 0.08) 100%)`,
        backgroundColor: '#175864',
      }} className="lg:min-h-[600px] flex items-center justify-center w-full">
    <div className="py-16 lg:py-32 xl:py-20 md:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white  m-auto">
        {/* Left Side */}
        <div className="text-left">
          <header>
            <p className="text-lg mb-2 font-extralight">Get in touch</p>
            <h2 id="contact-heading" className="text-5xl font-bold mb-6">
              Your <span className="text-[#F5A623]">Success</span> <br />
              Starts With A <br /> Conversation
            </h2>
          </header>

          <address className="not-italic mb-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="bg-white/20 p-3 rounded-full">
                <FaPhoneAlt className="text-xl text-white" />
              </span>
              <Link
                href="https://wa.me/+31107660786?text=I%27m%20interested%20in%20your%20services"
                className="text-lg"
              >
                +31 10 766 0786
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <span className="bg-white/20 p-3 rounded-full">
                <FaEnvelope className="text-xl text-white" />
              </span>
              <Link href="mailto:info@itsolutionsworldwide.com" className="text-lg">
                info@itsolutionsworldwide.com
              </Link>
            </div>
          </address>

          <div>
            <p className="text-lg mb-2">Connect with us:</p>
            <div className="flex space-x-4" aria-label="Social media links">
              <Link href="https://www.facebook.com/itsolutionsww" aria-label="Facebook">
                <FaFacebook className="text-2xl hover:text-[#F5A623]" />
              </Link>
              <Link href="https://www.linkedin.com/company/it-solutions-worldwide-bv" aria-label="LinkedIn">
                <FaLinkedin className="text-2xl hover:text-[#F5A623]" />
              </Link>
              <Link href="https://www.instagram.com/itsolutionsworldwide" aria-label="Instagram">
                <FaInstagram className="text-2xl hover:text-[#F5A623]" />
              </Link>
              <Link href="https://www.tiktok.com/@itsolutionsworldwide" aria-label="TikTok">
                <FaTiktok className="text-2xl hover:text-[#F5A623]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="xl:w-[95%] lg:w-[450px] md:w-[550px] md:place-self-center bg-black/10 backdrop-blur-lg p-6 md:p-8 rounded-lg border border-gray-500">
          <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-white mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="p-3 w-full bg-white/10 border border-gray-400 rounded-md text-white placeholder-gray-300"
                  required
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && <p className="text-[#F5A623] text-sm mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="johndoe@example.com"
                  className="p-3 w-full bg-white/10 border border-gray-400 rounded-md text-white placeholder-gray-300"
                  required
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-[#F5A623] text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-white mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Need Web Development Services"
                className="p-3 w-full bg-white/10 border border-gray-400 rounded-md text-white placeholder-gray-300"
                required
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <p className="text-[#F5A623] text-sm mt-1">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-white mb-1">
                Tell us about your project...
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Provide details about your project"
                rows={6}
                className="p-3 w-full bg-white/10 border border-gray-400 rounded-md text-white placeholder-gray-300"
                required
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="text-[#F5A623] text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-white text-[#0C415C] px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-300 cursor-pointer"
                disabled={isLoading}
              >
                
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                <span className="ml-2">→</span>
              </button>
            </div>
          </form>

          {/* Status Message */}
          {emailStatus && (
            <p className={`mt-4 ${emailStatus.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {emailStatus}
            </p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactSection;
