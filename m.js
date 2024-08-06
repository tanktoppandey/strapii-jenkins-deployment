import { IMS2img, IMSimg, IMS1img, IMS3img } from "./ImageData";

const IMAGE = "image";
const MAINHEADING = "MainHeading";
const SUBHEADINGS = "SubHeadings";
const PARAGRAPH = "paragraph";
const CUSTOMIMAGE = "customImage";
const H3HEADING = "H3-Headings";
const SPECIALLISTS = "SpecialLists";
const CONSULTUS = "consultus";

export const IMSContent = [
  {
    type: IMAGE,
    src: IMSimg,
    alt: "IMS logo",
  },
  {
    type: MAINHEADING,
    title:
      "Transform Your Business: A Comprehensive Guide to Custom Inventory Management Systems for SMEs",
  },
  {
    type: PARAGRAPH,
    value:
      "In the fast-paced world of small and medium enterprises (SMEs), managing inventory efficiently is a significant challenge. One-size-fits-all solutions fall short; what's needed is a tailored approach. Let's explore the game-changing potential of a Custom Inventory Management System (IMS) — not just the numbers that highlight its importance, but also the clear advantages it offers over traditional methods.",
  },
  {
    type: SUBHEADINGS,
    title: "Tailored Solutions for SME Success",
  },
  {
    type: PARAGRAPH,
    value:
      "Managing inventory remains a daunting task for SMEs. Enter the Custom IMS ( Inventory Management Systems), a solution crafted to monitor and track goods, addressing the unique needs of each business type. Unlike generic off-the-shelf options, a custom IMS is a strategic investment designed to elevate your business performance.",
  },
  {
    type: SUBHEADINGS,
    title: "Benefits Across Industries",
  },
  {
    type: CUSTOMIMAGE,
    value: IMS2img,
    alt: "IMS Sample-2",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{Retail:}} Real-time tracking for a seamless stock management experience, eliminating excess inventory and stockouts.",
      "{{Wholesale:}} Optimized order fulfilment, streamlined warehouse space, and automated reorder processes for enhanced customer loyalty.",
      "{{Manufacturing:}} Facilitates optimized production, savings, and improved production cycles aligned with demand.",
      "{{E-commerce:}} Ensures accurate inventory and swift order fulfilment for a seamless shopping experience.",
      "{{Healthcare:}} Streamlines supply chain operations, ensuring the availability of critical medical supplies and enhancing patient care.",
      "{{Food and Beverage:}} Achieves precise inventory control, minimizing food waste, and automates reorder processes for a seamless dining experience.",
      "{{Automotive:}} Aligns production with demand, reduces lead times, and ensures the availability of essential parts for assembly.",
    ],
  },
  {
    type: PARAGRAPH,
    value:
      "Each industry gains unique benefits from a tailored IMS, turning challenges into opportunities for growth, efficiency, and customer satisfaction.",
  },
  {
    type: SUBHEADINGS,
    title: "Custom IMS vs. Off-the-Shelf Solutions",
  },
  {
    type: CUSTOMIMAGE,
    value: IMS1img,
    alt: "IMS Sample 1",
  },

  {
    type: H3HEADING,
    title: "1. Tailored Functionality:",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{Specific Business Needs:}} Aligned with your unique processes and workflows.",
      "{{Elimination of Unnecessary Features:}} Streamlined system with only necessary features for improved user experience.",
    ],
  },
  {
    type: H3HEADING,
    title: "2. Operational Efficiency:",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{Automation Precision:}} Targeted automation reduces errors and speeds up processes.",
      "{{Workflow Optimization:}} Seamlessly integrates into existing processes, minimizing disruptions.",
    ],
  },
  {
    type: H3HEADING,
    title: "3. Cost Efficiency:",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{No Licensing Fees for Unnecessary Features:}} Pay for only the features needed, minimizing unnecessary expenses.",
      "{{Reduced Training Costs:}} Built with existing staff knowledge, reducing the need for extensive training.",
    ],
  },
  {
    type: H3HEADING,
    title: "4. Real-time Visibility and Analytics:",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{Immediate Data Access:}} Real-time visibility into inventory levels for informed decision-making.",
      "{{Comprehensive Analytics:}} S Advanced analytics tools tailored to specific needs for better decision-making.",
    ],
  },
  {
    type: H3HEADING,
    title: "5. Integration Capabilities:",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{Seamless Collaboration:}} Integration with existing software systems for improved productivity.",
      "{{Adaptability to Future Technologies:}} Designed with flexibility for compatibility with emerging technologies.",
    ],
  },
  {
    type: H3HEADING,
    title: "6. Flexibility and Scalability:",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{Adaptable to Changing Business Needs:}} Easily modified as business processes evolve.",
      "{{Scalability for Growth:}} Scales with the business, accommodating increased data volume and additional features.",
    ],
  },
  {
    type: SUBHEADINGS,
    title: "The Data-Driven Advantage",
  },
  {
    type: CUSTOMIMAGE,
    value: IMS3img,
    alt: "IMS Sample 3",
  },
  {
    type: PARAGRAPH,
    value: "Statistics underline the need for a dedicated solution:",
  },
  {
    type: SPECIALLISTS,
    value: [
      "A {{10%}} reduction in inventory costs with reduced stock-outs and overstocks.",
    ],
    href: "https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/vertical-solutions/retail/vision-study/retail-vision-study-2017-en-gb.pdf",
    text: " [Zebra]",
  },

  {
    type: SPECIALLISTS,
    value: [
      "Inventory distortion costed businesses {{$1.8 trillion}} in 2020. ",
    ],
    href: "https://www.ihlservices.com/product/inventorydistortion/",
    text: " [IHL Services]",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{74%}} of businesses faced delays in shipments, emphasizing the need for streamlined supply chain processes. ",
    ],
    href: "https://www.capgemini.com/research/supply-chain-resilience/",
    text: " [Capgemini]",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{72%}} of retailers plan to reinvent their supply chain for real-time visibility. ",
    ],
    href: "https://www.zebra.com/content/dam/zebra_new_ia/en-us/solutions-verticals/vertical-solutions/retail/vision-study/retail-vision-study-2017-en-gb.pdf",
    text: " [Zebra]",
  },
  {
    type: PARAGRAPH,
    value: "Statistics reveal ongoing challenges:",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{75%}} of supply chain professionals aim to improve inventory management. ",
    ],
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{48%}} of executives acknowledge the need to reevaluate warehouse locations. ",
    ],
    href: "https://www.forbes.com/forbes-insights/our-work/transportation-2023/",
    text: " [Forbes]",
  },
  {
    type: SPECIALLISTS,
    value: [
      "{{24%}} of small businesses still track inventory with pen and paper. ",
    ],
  },
  {
    type: SPECIALLISTS,
    value: ["Human error remains the top issue in {{46%}} of warehouses. "],
  },
  {
    type: SPECIALLISTS,
    value: [
      "Shockingly, {{7%}} of small businesses don't track inventory at all. ",
    ],
  },
  {
    type: PARAGRAPH,
    value:
      "The statistics highlight the reality—inventory management challenges persist, and a Custom IMS is not just an option but a strategic necessity for SMEs aiming to thrive in the competitive market. It not only translates into direct cost savings but also contributes to overall operational efficiency.",
  },
  {
    type: PARAGRAPH,
    value:
      "An effective IMS helps mitigate distortion by providing accurate and real-time insights into inventory levels, preventing financial losses associated with discrepancies. The fact that 72% of retailers plan to reinvent their supply chain for real-time visibility highlights the growing recognition of the role IMS plays in enhancing supply chain efficiency.",
  },
  {
    type: SUBHEADINGS,
    title: "Unleash Your Business Potential with Our Expertise",
  },
  {
    type: PARAGRAPH,
    value:
      "In conclusion, these insights illustrate the transformative power of a custom IMS for SMEs. It's not just software; it's a strategic investment empowering businesses to overcome challenges, reduce costs, and embrace a future marked by efficiency and growth.",
  },
  {
    type: CONSULTUS,
  },
  {
    type: PARAGRAPH,
    value:
      "At Anubit Solutions, we recognize the unique demands of your industry, and we specialize in crafting tailored IMS solutions that precisely align with your business needs. Our commitment is to empower your business with real-time visibility, accurate inventory tracking, and streamlined supply chain processes. With our expertise, you can mitigate the financial impact of inventory distortion, reduce costs, and enhance overall operational efficiency.",
  },
  {
    type: PARAGRAPH,
    value:
      "Partnering with Anubit Solutions means more than just acquiring software; it's a strategic investment in the resilience and future growth of your enterprise. We have a proven track record of helping businesses like yours overcome inventory management challenges, ensuring you stay ahead in today's competitive landscape.",
  },
  {
    type: PARAGRAPH,
    value:
      "Don't let outdated processes hold your business back. At Anubit Solutions, we specialize in creating highly customizable IMS solutions tailored to the unique needs of your business, all in a cost-effective manner. Your success story starts with a custom IMS – your key to unlocking business excellence. Contact us today, and let's embark on this transformative journey together.",
  },
];

//////////////////////////////////////////////

const FIELDSECTIONS = [
  {
    id: 2,
    __component: "main-heading.mainheading",
    type: "main-heading",
    title: "ojndjoqncojqo",
  },
  {
    id: 1,
    __component: "sub-headings.subheadings",
    type: "sub-heading",
    title: "kqjdsbqojwbxjqlx",
  },
  {
    id: 2,
    __component: "image.image",
    type: "image",
    alt: "image",
  },
];
