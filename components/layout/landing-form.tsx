// components/layout/landing-form.tsx
'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRouter } from 'next/navigation';

interface FormInputProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const FormInput = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
}: FormInputProps) => (
  <div>
    <label htmlFor={id} className="block text-white mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-3 w-full bg-white bg-opacity-10 border border-gray-400 rounded-md text-white placeholder-gray-300"
    />
    {error && <p className="text-[#F5A623] text-sm mt-1">{error}</p>}
  </div>
);


const LandingForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email || !validateEmail(formData.email))
      newErrors.email = 'Invalid email';
    if (!formData.company) newErrors.company = 'Company name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.subject) newErrors.subject = 'Subject is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);

      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      try {
        await emailjs.send(
          'service_cnlhcq5', // Your EmailJS service ID
          'template_esshcqn', // Your template ID
          templateParams,
          '2rwwu502Od15TPbDz' // Your public key
        );
        setEmailStatus('Email sent successfully!');
        router.push('/thank-you'); // Redirect to a thank you page
      } catch (error) {
        console.error('Email error:', error);
        setEmailStatus('Failed to send email. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section
      className="2xl:max-w-[700px] xl:w-[40vw] lg:w-[450px] md:w-[450px] w-[300px] md:place-self-center bg-black bg-opacity-10 backdrop-blur-lg p-4 md:p-8 rounded-lg border border-gray-500"
      aria-labelledby="contact-form-heading"
    >
      <h2 id="contact-form-heading" className="sr-only">
        Contact Us
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Full name*"
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <FormInput
            label="Email address*"
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
        </div>

        {/* Company & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Company*"
            id="company"
            name="company"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleInputChange}
            error={errors.company}
          />
          <FormInput
            label="Phone Number*"
            id="phone"
            name="phone"
            placeholder="123-456-7890"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
          />
        </div>

        {/* Subject */}
        <FormInput
          label="Subject*"
          id="subject"
          name="subject"
          placeholder="I need a website"
          value={formData.subject}
          onChange={handleInputChange}
          error={errors.subject}
        />

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-white mb-1">
            Tell us about your project...
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Describe your project..."
            value={formData.message}
            onChange={handleInputChange}
            className="p-3 w-full bg-white bg-opacity-10 border border-gray-400 rounded-md text-white placeholder-gray-300"
            rows={6}
          />
          {errors.message && (
            <p className="text-[#F5A623] text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-white text-[#0C415C] px-6 py-3 rounded-md text-lg font-medium flex items-center space-x-2 hover:bg-gray-300 cursor-pointer"
          >
            <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
            <span className="ml-2">→</span>
          </button>
        </div>
      </form>

      {/* Status Messages */}
      {emailStatus && (
        <p className="mt-4 text-white font-medium">{emailStatus}</p>
      )}
    </section>
  );
};

export default LandingForm;
