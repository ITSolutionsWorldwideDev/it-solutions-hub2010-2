// app/[locale]/supply-health-check-info/page.tsx

// import initServerI18n from "@/utils/serverTranslation";
import BannerSection from "@/components/layout/banner-section";
import Link from "next/link";

// export default async function SupplyHealth({
//   params,
// }: {
//   params: { locale: string };
// }) {
  // const { locale } = await params;

  // const i18nInstance = await initServerI18n(locale);
  // const t = await i18nInstance.getFixedT(locale, "common");

export default async function SupplyHealth() {

  const slides = [
    {
      backgroundImage: "/assets/images/Supply_check_background_Image.png",
      heading: "Supply Chain Health Check",
    },
  ];
  const sections = [
    {
      content:
        "Our Supply Chain Health Check evaluates key metrics such as efficiency, cost, and resilience to identify improvement opportunities. Using advanced diagnostic tools, we assess performance and highlight risks. This service helps optimize operations, reduce disruptions, and enhance overall supply chain strength. Start your assessment today to drive smarter supply chain decisions. ",
    },
    {
      title: "Supply Chain Health Check Tool in Netherlands ",
      content:
        "Our Supply Chain Health Check Tool in the Netherlands is designed to help businesses evaluate and enhance the performance, resilience, and efficiency of their supply chains. Tailored to the Dutch market and European logistics landscape, this tool provides a comprehensive analysis of critical areas such as supplier performance, inventory management, lead times, cost control, and risk exposure. Whether you're facing disruptions, scaling operations, or seeking optimization opportunities, our tool delivers actionable insights to support smarter decision-making. By using real-time data and industry benchmarks, we help identify bottlenecks, reduce operational costs, and improve supply chain agility. Ideal for manufacturers, retailers, and logistics providers operating in or through the Netherlands, our Health Check Tool enables proactive risk management and strategic improvements. Start your supply chain transformation today with a customized assessment built to strengthen your operations and drive long-term success in the dynamic European market.",
    },
    {
      title:
        "Boost supply chain health with our SCM tool. Track metrics across People, Planet, Profit, and more to optimize your operations and reduce risk. ",
      content:
        "Boost your supply chain health with our advanced Supply Chain Management (SCM) tool, designed to give you full visibility and control over your operations. By tracking key metrics across People, Planet, and Profit, our tool helps you evaluate performance holistically—ensuring your supply chain is not only efficient but also ethical and sustainable. Monitor workforce productivity, labor standards, environmental impact, and profitability in real time. With this comprehensive view, you can quickly identify vulnerabilities, adapt to changes, and implement improvements that align with both your business goals and ESG (Environmental, Social, Governance) commitments. Our SCM tool goes beyond traditional analytics by integrating risk assessment and scenario planning features to enhance resilience. Whether you're managing global suppliers or local logistics, you can use the data to make smarter, faster decisions that minimize disruptions and reduce costs. It’s ideal for companies aiming to build a future-ready supply chain that meets evolving customer expectations and regulatory demands. Gain the insights you need to optimize operations, strengthen supplier relationships, and drive continuous improvement. Start using our SCM tool today and take a proactive step toward a more transparent, sustainable, and profitable supply chain.",
    },
    {
      title: "Comprehensive Supply Chain Health Check Tool in the Netherlands ",
      content:
        "Our Comprehensive Supply Chain Health Check Tool in the Netherlands offers businesses a thorough evaluation of their end-to-end supply chain performance. Specifically tailored to the Dutch and broader European logistics landscape, the tool assesses critical components such as supplier reliability, inventory control, transportation efficiency, and cost management. It uses key performance indicators across People, Planet, and Profit to provide a balanced, strategic view of your supply chain’s overall health. Whether you’re a manufacturer, distributor, or retailer, this tool helps you identify inefficiencies, reduce risks, and discover opportunities for improvement. With real-time data and actionable insights, you can boost operational resilience, ensure compliance with regulations, and drive sustainable growth. Perfect for organizations aiming to stay agile in a competitive global market, our health check tool is your gateway to building a smarter, more efficient, and future-ready supply chain in the Netherlands. Start your optimization journey today.",
    },
    {
      title: "Why Your Business Needs a Supply Chain Health Check ",
      content:
        "Understanding the importance of supply chain health is essential for businesses aiming to thrive in today’s competitive and unpredictable market. A supply chain health check allows you to assess the overall performance of your supply chain and identify areas that need improvement. One of the key aspects of this process is conducting a supply chain risk assessment to uncover potential disruptions, supplier issues, or compliance gaps before they escalate. By analyzing key metrics and operational workflows, you can uncover inefficiencies and streamline processes to optimize supply chain operations. This not only improves efficiency and reduces costs but also enhances resilience and sustainability. For businesses looking to improve responsiveness, manage risk, and drive long-term value, a comprehensive health check provides the insights needed to take informed, strategic action. Regular assessments help ensure your supply chain remains agile, robust, and ready to meet evolving customer and market demands.",
    },
    {
      title: "What Our SCM Health Check Tool Offers",
      content:
        "Our SCM Health Check Tool is a powerful supply chain assessment tool designed to give businesses a clear, data-driven view of their supply chain operations. It evaluates critical supply chain performance metrics such as lead times, inventory levels, supplier reliability, and cost efficiency. By using real-time data and benchmarking against industry standards, the tool helps identify inefficiencies, risks, and opportunities for improvement. This comprehensive analysis supports smarter decisions and long-term planning. Integrated as part of our advanced supply chain optimization software, the tool enables companies to streamline processes, reduce costs, and enhance responsiveness. Whether you're facing supply disruptions, seeking sustainability improvements, or aiming to scale operations, our tool provides the insights you need to adapt and thrive. Ideal for businesses of all sizes and industries, our SCM Health Check Tool empowers you to build a more agile, resilient, and high-performing supply chain tailored to today’s complex logistics landscape.",
    },
    {
      title: "Key Metrics We Track: 5P Framework",
      content:
        "Our 5P Framework focuses on tracking essential ESG supply chain metrics to provide a holistic view of your supply chain’s sustainability and performance. This framework covers People, Planet, Profit, Process, and Performance, ensuring a balanced approach to managing both environmental and social impacts alongside financial goals. Through a sustainable supply chain assessment, we evaluate factors such as labor practices, carbon footprint, waste reduction, and cost efficiency. By integrating these ESG supply chain metrics, businesses can align their operations with global sustainability standards and meet increasing regulatory demands. Our tool delivers data-driven supply chain insights that enable informed decision-making, helping you identify risks, improve transparency, and optimize resource use. Whether your goal is to reduce environmental impact or enhance social responsibility while maintaining profitability, the 5P Framework guides you toward building a resilient and responsible supply chain that supports long-term success.",
    },
    {
      title: "How the Supply Chain Health Check Works",
      content:
        "The supply chain health check begins with a thorough supply chain diagnostic process designed to identify strengths, weaknesses, and potential risks within your operations. This process involves collecting data from multiple sources, including suppliers, logistics, inventory, and production. Our supply chain analysis steps then evaluate key performance indicators such as lead times, cost efficiency, and supplier reliability. Using advanced operational efficiency tools, the system analyzes this data to pinpoint bottlenecks, inefficiencies, and areas for improvement. The results are presented in a clear, actionable report that highlights risks and opportunities across the supply chain. This structured approach enables businesses to make informed decisions, optimize workflows, and enhance overall supply chain resilience. By regularly conducting this health check, companies can stay ahead of disruptions, reduce costs, and continuously improve their supply chain’s agility and responsiveness.",
    },
    {
      title: "Why Choose ITWW in the Netherlands for Supply Chain Optimization",
      content:
        "ITWW stands out as a leading provider of supply chain consulting in the Netherlands, offering tailored solutions to optimize your supply chain operations. With a team of experienced supply chain experts in the Netherlands, ITWW brings deep industry knowledge and local market insight to help businesses navigate complex logistics and regulatory challenges. Their expertise spans end-to-end supply chain management, ensuring efficient and resilient operations. ITWW also specializes in automation and SCM services in the Netherlands, leveraging the latest technologies to streamline processes, reduce costs, and improve accuracy. Whether you’re looking to enhance visibility, boost operational efficiency, or implement sustainable practices, ITWW delivers innovative, data-driven solutions customized for your business needs. Partnering with ITWW means gaining a trusted advisor committed to driving continuous improvement and helping your supply chain thrive in a competitive and fast-evolving market.",
    },
    {
      title: "Start Your Supply Chain Health Check Today ",
      content:
        "Take the first step toward a stronger, more efficient supply chain by scheduling your supply chain health check in the Netherlands today. Our comprehensive SCM tool demo allows you to explore the features and benefits of our advanced supply chain management software before committing. Designed specifically for businesses operating in the Dutch and European markets, this tool helps you identify risks, optimize processes, and improve overall supply chain performance. Whether you’re looking to enhance visibility, reduce costs, or boost sustainability, our supply chain health check provides actionable insights tailored to your unique needs. Don’t wait for disruptions to impact your operations—get started with SCM software that empowers you to make informed decisions and drive continuous improvement. Contact us now to book your demo and begin transforming your supply chain into a competitive advantage with our proven solutions in the Netherlands. ",
    },
  ];

  return (
    <div>
      <main>
        <section>
          <BannerSection slides={slides} />
          <div className="max-w-7xl mx-auto p-6 space-y-8">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white">
                {section.title && (
                  <h2 className="text-2xl font-semibold text-[#278083]">
                    {section.title}
                  </h2>
                )}
                {/* {section.subtitle && (
                  <h3 className="text-lg font-medium text-black">
                    {section.subtitle}
                  </h3>
                )} */}
                <p className="text-gray-700 mt-2 mb-4">{section.content}</p>
                {/* {section.image && (
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[500px] object-cover object-top mb-4"
                  />
                )} */}
              </div>
            ))}
            <div className="mt-10 flex justify-center">
              <Link
                href="/supply-health-check"
                className="bg-[#278083] text-white py-3 px-6 rounded-full text-lg items-center gap-2 shadow-md hover:bg-[#1f6460] transition"
              >
                Click Here To Start Your Free Scan
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
