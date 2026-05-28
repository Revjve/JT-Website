export const SITE_NAME = "JT Cleaning"
export const SITE_TITLE =
  "JT Cleaning | Pressure Washing & Cleaning Services"
export const SITE_DESCRIPTION =
  "JT Cleaning provides professional pressure washing and other cleaning services for homes and businesses. Call (920) 691-2356 for a free quote."

export const PHONE_DISPLAY = "(920) 691-2356"
export const PHONE_HREF = "tel:9206912356"
export const PHONE_PLAIN = "9206912356"

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const

export const SERVICES = [
  {
    title: "Pressure Washing",
    description:
      "Restore curb appeal on concrete, siding, fencing, and hard surfaces with careful, controlled washing.",
  },
  {
    title: "House Washing",
    description:
      "Refresh siding and trim with a low-pressure approach that lifts dirt, mildew, and buildup without being harsh.",
  },
  {
    title: "Driveway Cleaning",
    description:
      "Cut through grime, tire marks, and surface staining so your driveway looks cleaner and better maintained.",
  },
  {
    title: "Sidewalk Cleaning",
    description:
      "Brighten walkways and entry paths to improve first impressions and help exterior spaces feel cared for.",
  },
  {
    title: "Deck & Patio Cleaning",
    description:
      "Clear away slippery buildup and surface discoloration so outdoor living areas feel ready to use again.",
  },
  {
    title: "Gutter Cleaning",
    description:
      "Keep gutters flowing properly by removing leaves, debris, and clogs that can create drainage problems.",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Help storefronts, offices, and property managers present a cleaner, more professional exterior to customers.",
  },
  {
    title: "Exterior Surface Cleaning",
    description:
      "From entry pads to retaining walls, JT Cleaning handles the exterior surfaces that make a property stand out.",
  },
] as const

export const BENEFITS = [
  "Reliable service and clear communication",
  "Professional results that improve curb appeal",
  "Affordable pricing with free quotes",
  "Local, friendly service for nearby Wisconsin properties",
  "Careful cleaning methods for the surfaces you value",
  "Residential and commercial exterior cleaning support",
] as const

export const RESULT_PREVIEWS = [
  {
    title: "House wash refresh",
    before: "Oxidation, dirt, and seasonal buildup",
    after: "Cleaner siding with a brighter finish",
  },
  {
    title: "Driveway cleanup",
    before: "Tracked-in grime and dark surface staining",
    after: "Sharper edges and a cleaner arrival point",
  },
  {
    title: "Patio and walkway reset",
    before: "Moss, debris, and slippery spots",
    after: "A cleaner outdoor space ready for guests",
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      "JT Cleaning made our siding and front walk look fresh again. The work was neat, on time, and easy to schedule.",
    name: "Sarah M.",
  },
  {
    quote:
      "We needed the driveway and patio cleaned before family came over, and the difference was noticeable right away.",
    name: "David R.",
  },
  {
    quote:
      "Friendly service, fair pricing, and no runaround. Our storefront looked much better when they were done.",
    name: "Megan T.",
  },
] as const

export const ABOUT_BLURB =
  "JT Cleaning focuses on dependable exterior cleaning that helps homes and businesses look well kept, welcoming, and ready to make a strong first impression. From curb appeal touch-ups to larger cleanup work, the goal is simple: quality results, careful service, and a cleaner property you feel good about."

export const SERVICE_AREA_BLURB =
  "JT Cleaning serves local homes and businesses throughout the surrounding Wisconsin area. Keep this section editable so nearby communities can be added later if needed."

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  image: "/jt-cleaning-logo.png",
  telephone: PHONE_PLAIN,
  areaServed: {
    "@type": "State",
    name: "Wisconsin",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Exterior cleaning services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
      },
    })),
  },
}
