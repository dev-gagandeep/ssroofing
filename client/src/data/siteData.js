export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' }
];

export const companyDetails = {
  legalName: 'SS Roofing Specialist Limited',
  registrationStatus: 'Private Limited Company',
  registrationLocation: 'Registered in England and Wales',
  registrationNumber: 'To be added before go-live',
  registeredOffice: '123A, Central Avenue, Hayes, Middlesex, UB3 2BS, United Kingdom',
  enquiryEmail: 'enquiries@ssroofingspecialist.co.uk',
  privacyEmail: 'privacy@ssroofingspecialist.co.uk',
  contactPhone: '0800 123 4567',
  websiteUrl: 'https://www.ssroofingspecialist.co.uk'
};

export const trustSignals = [
  {
    title: 'Locally Based in Hayes',
    text: 'A visible operating base in Hayes, Middlesex helps support local trust, faster communication, and stronger local search relevance.'
  },
  {
    title: 'Residential and Commercial Focus',
    text: 'The site clearly serves homeowners, landlords, facilities teams, and commercial property stakeholders across multiple project types.'
  },
  {
    title: 'Safety and Quality-Led Delivery',
    text: 'Messaging across the site reinforces safe working practices, dependable materials, and careful project coordination.'
  },
  {
    title: 'Quote and Enquiry Transparency',
    text: 'Dedicated service pages, internal linking, and clear enquiry routes reduce friction and improve confidence before contact.'
  }
];

export const accreditationHighlights = [
  'Fully insured roofing contractor',
  'Quality-led roofing systems',
  'Responsive maintenance support',
  'Trusted residential and commercial service'
];

export const contentAuthors = [
  {
    name: 'SS Roofing Specialist Editorial Team',
    role: 'Service content and roofing guidance',
    bio: 'This content is prepared to help homeowners, landlords, and commercial property teams understand roofing options, maintenance issues, and practical next steps before requesting a quote.',
    expertise: ['Residential roofing', 'Commercial roofing', 'Roof inspections', 'Planned maintenance']
  }
];

export const keywordStrategy = [
  {
    cluster: 'Primary local commercial intent',
    targetPage: '/',
    keywords: ['roofing company Hayes', 'roofer Hayes', 'roofing contractor Hayes Middlesex', 'roof repairs Hayes']
  },
  {
    cluster: 'Core service intent',
    targetPage: '/services',
    keywords: ['flat roofing Hayes', 'pitched roofing Middlesex', 'commercial roofing West London', 'roof inspections Hayes']
  },
  {
    cluster: 'Service detail intent',
    targetPage: '/services/:slug',
    keywords: ['service + Hayes', 'service + Middlesex', 'service + West London', 'commercial roofing service + local area']
  },
  {
    cluster: 'Informational blog intent',
    targetPage: '/blog and /blog/:slug',
    keywords: ['roof repair advice Hayes', 'flat roof maintenance West London', 'roof inspection signs Hayes', 'guttering maintenance Middlesex']
  },
  {
    cluster: 'Trust and brand intent',
    targetPage: '/about and /contact',
    keywords: ['about roofing company Hayes', 'contact roofer Hayes', 'roofing company UB3', 'roofing quote Hayes']
  }
];

export const localAreas = [
  'Hayes',
  'Middlesex',
  'Hillingdon',
  'Uxbridge',
  'West Drayton',
  'Southall',
  'Ealing',
  'West London'
];

export const services = [
  {
    title: 'Flat Roofing',
    slug: 'flat-roofing',
    category: 'Roofing Systems',
    description:
      'Durable flat roofing systems installed for homes, schools, offices, and managed properties with careful detailing around drainage and insulation.',
    benefits: ['Long-lasting membrane systems', 'Energy-efficient performance', 'Minimal disruption during installation'],
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Pitched Roofing',
    slug: 'pitched-roofing',
    category: 'Roofing Systems',
    description:
      'Traditional and modern pitched roof installations delivered with attention to weatherproofing, ventilation, and kerb appeal.',
    benefits: ['Tile and slate expertise', 'Improved drainage performance', 'Strong visual finish for residential projects'],
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Roof Repairs',
    slug: 'roof-repairs',
    category: 'Repairs & Maintenance',
    description:
      'Responsive repair services for leaks, storm damage, slipped tiles, flashing issues, and ongoing maintenance concerns.',
    benefits: ['Rapid fault diagnosis', 'Targeted cost-effective repairs', 'Prevents more expensive damage'],
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Commercial Roofing',
    slug: 'commercial-roofing',
    category: 'Commercial & Specialist',
    description:
      'Reliable commercial roofing support for warehouses, retail units, offices, and mixed-use developments across the UK.',
    benefits: ['Planned works and reactive support', 'Health and safety conscious delivery', 'Solutions suited to live sites'],
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Roof Inspections',
    slug: 'roof-inspections',
    category: 'Repairs & Maintenance',
    description:
      'Professional inspections for property owners, buyers, and facilities teams to identify wear, defects, and lifecycle risks early.',
    benefits: ['Clear condition reporting', 'Helps plan maintenance budgets', 'Supports property due diligence'],
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Metal Roofing',
    slug: 'metal-roofing',
    category: 'Commercial & Specialist',
    description:
      'Metal roofing systems specified for commercial and industrial properties where durability, detailing, and weather resistance are essential.',
    benefits: ['Low-maintenance roof finishes', 'Suitable for industrial environments', 'Strong long-term performance'],
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Roof Access & Safety Systems',
    slug: 'roof-access-safety-systems',
    category: 'Commercial & Specialist',
    description:
      'Support for safe roof access planning, compliant working-at-height considerations, and integrated safety-focused roofing solutions.',
    benefits: ['Improves maintenance access', 'Supports safer live-site working', 'Practical for commercial properties'],
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Exterior Cladding',
    slug: 'exterior-cladding',
    category: 'Commercial & Specialist',
    description:
      'Exterior cladding support to improve envelope performance, visual presentation, and weather protection on commercial properties.',
    benefits: ['Improved external appearance', 'Envelope protection', 'Suitable for refurbishment projects'],
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Rooflight Replacement',
    slug: 'rooflight-replacement',
    category: 'Commercial & Specialist',
    description:
      'Rooflight replacement services for ageing or damaged units to improve daylighting, weatherproofing, and roof performance.',
    benefits: ['Improves natural light', 'Reduces weather ingress risk', 'Supports refurbishment programmes'],
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Environmental Roofing',
    slug: 'environmental-roofing',
    category: 'Commercial & Specialist',
    description:
      'Environmental roofing solutions designed around thermal performance, drainage considerations, and sustainable building goals.',
    benefits: ['Supports energy-conscious design', 'Improves roof performance', 'Suitable for modern specifications'],
    image:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Flat to Pitched Roof Conversions',
    slug: 'flat-to-pitched-roof-conversions',
    category: 'Roofing Systems',
    description:
      'Conversion solutions for properties moving from flat to pitched roofing to improve drainage, lifespan, and visual character.',
    benefits: ['Improves water run-off', 'Enhances kerb appeal', 'Can reduce repeat maintenance issues'],
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Guttering & Maintenance',
    slug: 'guttering-maintenance',
    category: 'Repairs & Maintenance',
    description:
      'Routine guttering, clearance, and preventative maintenance services to keep roofing systems draining effectively throughout the year.',
    benefits: ['Helps prevent overflow issues', 'Supports roof lifespan', 'Ideal for planned property upkeep'],
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];

export const overviewServices = [
  'Flat Roofing',
  'Pitched Roofing',
  'Roof Repairs',
  'Commercial Roofing',
  'Guttering & Maintenance'
];

export const serviceMenuGroups = [
  {
    title: 'Roofing Systems',
    description: 'Installation-led services for residential and commercial roofs.',
    items: ['Flat Roofing', 'Pitched Roofing', 'Flat to Pitched Roof Conversions']
  },
  {
    title: 'Repairs & Maintenance',
    description: 'Responsive repairs, inspections, and planned maintenance support.',
    items: ['Roof Repairs', 'Roof Inspections', 'Guttering & Maintenance']
  },
  {
    title: 'Commercial & Specialist',
    description: 'Broader envelope and specialist works for commercial buildings.',
    items: [
      'Commercial Roofing',
      'Metal Roofing',
      'Roof Access & Safety Systems',
      'Exterior Cladding',
      'Rooflight Replacement',
      'Environmental Roofing'
    ]
  }
];

export const whyChooseUs = [
  {
    title: 'Experienced Team',
    text: 'Our team brings practical roofing knowledge across domestic, commercial, and maintenance-led projects.'
  },
  {
    title: 'Fully Insured',
    text: 'We operate professionally with appropriate insurance cover and a strong focus on safe delivery.'
  },
  {
    title: 'High-Quality Materials',
    text: 'We use trusted roofing materials designed for reliable long-term performance in UK weather conditions.'
  },
  {
    title: 'Fast Response',
    text: 'Prompt communication and efficient scheduling help keep repairs and planned works moving.'
  }
];

export const industries = [
  {
    title: 'Residential',
    text: 'Roofing services for homeowners, landlords, and developers requiring dependable craftsmanship and a tidy finish.',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Commercial',
    text: 'Tailored roofing support for offices, retail units, schools, hospitality sites, and multi-property portfolios.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Industrial',
    text: 'Practical solutions for industrial buildings where safety, durability, and programme control are essential.',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  }
];

export const testimonials = [
  {
    quote:
      'SS Roofing Specialist Limited handled our flat roof replacement professionally from the first survey through to completion. Communication was excellent throughout.',
    author: 'Property Manager, Birmingham'
  },
  {
    quote:
      'We needed urgent roof repairs after heavy rain and the team responded quickly, explained the issue clearly, and resolved it without fuss.',
    author: 'Homeowner, Manchester'
  },
  {
    quote:
      'Reliable commercial roofing contractor with a professional approach on a live site. The quality of finish and site conduct were both impressive.',
    author: 'Facilities Lead, Leeds'
  }
];

export const projects = [
  {
    title: 'Commercial Roof Refurbishment',
    description: 'Complete refurbishment of an ageing roof system for a logistics unit, improving weather protection and thermal performance.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Residential Pitched Roof Renewal',
    description: 'Replacement of worn roof tiles and underlay for a family home, with upgraded ridge detailing and improved ventilation.',
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Industrial Roof Repairs Programme',
    description: 'Targeted repair works across an operational industrial facility to address leaks, flashing failures, and drainage issues.',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Flat Roof Installation',
    description: 'New waterproof flat roofing system installed for a mixed-use extension with clean detailing and robust drainage design.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Retail Unit Maintenance Works',
    description: 'Planned guttering and maintenance package delivered to reduce reactive issues and protect the building envelope.',
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Roof Condition Inspection',
    description: 'Detailed condition review and reporting for a prospective buyer to support risk assessment and budgeting.',
    image:
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=900&q=80'
  }
];

export const blogPosts = [
  {
    slug: 'roof-repair-or-roof-replacement-hayes-homeowners',
    title: 'Roof Repair or Roof Replacement? A Practical Guide for Hayes Homeowners',
    excerpt:
      'Learn when a local roof repair is enough and when a full roof replacement is the smarter long-term choice for properties in Hayes and the wider Middlesex area.',
    datePublished: '2026-03-31',
    author: 'SS Roofing Specialist Limited',
    category: 'Residential Roofing',
    relatedServices: ['Roof Repairs', 'Pitched Roofing', 'Flat to Pitched Roof Conversions'],
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80'
    ],
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
    content: [
      {
        heading: 'How to tell whether a repair is still cost-effective',
        paragraphs: [
          'For many homes in Hayes, a roof repair is the right option when the issue is isolated and the wider roof structure remains sound. Common examples include slipped tiles, localised flashing defects, minor leak points, or early storm damage affecting one section of the roof.',
          'A targeted repair can be the most sensible choice when the roof is still performing well overall, the underlay remains serviceable, and there are no repeated signs of widespread deterioration across multiple elevations.'
        ]
      },
      {
        heading: 'When replacement becomes the better long-term decision',
        paragraphs: [
          'A full roof replacement should be considered when repairs are becoming frequent, water ingress is affecting internal finishes, or the roof covering is nearing the end of its useful life. Repeated patch repairs can become poor value when the same issues continue returning after heavy rain or winter weather.',
          'For older homes in Middlesex and West London, replacement can also improve ventilation, thermal performance, and overall reliability. In many cases, the most cost-effective route is not the cheapest short-term repair, but the option that reduces repeat expenditure over the next several years.'
        ]
      },
      {
        heading: 'Why local inspection matters',
        paragraphs: [
          'Roof decisions should be based on the actual condition of the roof, not assumptions. A professional inspection can identify whether the issue is isolated, whether water is travelling from another defect, and whether hidden elements such as battens or membranes have also been affected.',
          'For homeowners in Hayes, a clear inspection and written scope can help make a confident decision between repair and replacement without overspending.'
        ]
      }
    ]
  },
  {
    slug: 'flat-roof-maintenance-checklist-commercial-buildings',
    title: 'Flat Roof Maintenance Checklist for Commercial Buildings in West London',
    excerpt:
      'A practical maintenance checklist for commercial property managers looking to reduce leaks, extend roof lifespan, and avoid expensive disruption.',
    datePublished: '2026-03-31',
    author: 'SS Roofing Specialist Limited',
    category: 'Commercial Roofing',
    relatedServices: ['Commercial Roofing', 'Flat Roofing', 'Guttering & Maintenance'],
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80'
    ],
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
    content: [
      {
        heading: 'Prioritise regular visual checks',
        paragraphs: [
          'Commercial flat roofs benefit from planned visual inspections, especially after heavy rainfall, strong winds, and winter weather. Standing water, blocked outlets, membrane damage, and edge detail movement are all early warning signs that should be addressed before they develop into operational issues.',
          'For warehouses, offices, schools, and retail buildings in West London, a proactive maintenance routine can significantly reduce emergency callouts and business disruption.'
        ]
      },
      {
        heading: 'Keep drainage and gutters clear',
        paragraphs: [
          'One of the most common causes of flat roof failure is poor water management. Blocked gutters, outlets, and downpipes can force water to pond on the roof surface, increasing stress on joints and waterproofing layers.',
          'Routine clearance and drainage checks are especially important on buildings surrounded by trees or exposed to seasonal debris.'
        ]
      },
      {
        heading: 'Record issues before they escalate',
        paragraphs: [
          'A simple maintenance record helps facilities teams track recurring defects, confirm where repairs have been completed, and plan future budgets more accurately.',
          'When a roofing contractor provides a clear report with photographs, identified risks, and recommended priorities, property managers are in a much stronger position to protect the building and justify maintenance spend.'
        ]
      }
    ]
  },
  {
    slug: 'signs-your-roof-needs-an-inspection-hayes',
    title: '7 Signs Your Roof Needs a Professional Inspection in Hayes',
    excerpt:
      'Spot the warning signs early and avoid more expensive roofing problems with a timely inspection for your Hayes property.',
    datePublished: '2026-03-31',
    author: 'SS Roofing Specialist Limited',
    category: 'Roof Inspections',
    relatedServices: ['Roof Inspections', 'Roof Repairs', 'Guttering & Maintenance'],
    gallery: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80'
    ],
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80',
    content: [
      {
        heading: 'Why inspections matter before damage becomes visible indoors',
        paragraphs: [
          'Many roofing issues begin externally long before they become obvious inside the property. By the time staining appears on ceilings or walls, water may already have travelled through multiple layers of the roof build-up.',
          'A timely inspection helps identify weaknesses in coverings, flashings, ridges, valleys, and drainage details before they escalate into more disruptive repairs.'
        ]
      },
      {
        heading: 'Common warning signs homeowners should not ignore',
        paragraphs: [
          'Warning signs can include slipped tiles, repeated minor leaks, overflowing gutters, visible sagging, cracked mortar, damp patches in loft spaces, or unusual debris around downpipes after wind and rain.',
          'For properties in Hayes and surrounding areas, weather exposure and seasonal changes can accelerate minor defects if they are left untreated.'
        ]
      },
      {
        heading: 'What a professional inspection should provide',
        paragraphs: [
          'A proper roof inspection should not just say that a problem exists. It should help explain where the defect is, what risk it creates, and whether the best response is repair, maintenance, or longer-term replacement planning.',
          'This gives homeowners a much clearer basis for decision-making, especially when budgeting for works over the coming months.'
        ]
      }
    ]
  },
  {
    slug: 'guttering-maintenance-tips-for-west-london-properties',
    title: 'Guttering Maintenance Tips for Properties in Hayes and West London',
    excerpt:
      'Simple guttering maintenance steps can help protect roofs, walls, and drainage systems from avoidable water damage.',
    datePublished: '2026-03-31',
    author: 'SS Roofing Specialist Limited',
    category: 'Guttering & Maintenance',
    relatedServices: ['Guttering & Maintenance', 'Roof Repairs', 'Commercial Roofing'],
    gallery: [
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80'
    ],
    image:
      'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80',
    content: [
      {
        heading: 'Why gutter maintenance matters more than many property owners realise',
        paragraphs: [
          'Guttering plays a direct role in protecting the wider roofing system. When rainwater is not being directed away properly, it can overflow onto walls, fascia boards, soffits, and entrances, increasing the risk of damp and localised deterioration.',
          'Routine maintenance is one of the simplest ways to avoid preventable water-management issues on both residential and commercial properties.'
        ]
      },
      {
        heading: 'What to check during routine maintenance',
        paragraphs: [
          'A basic maintenance check should look for blockages, standing debris, loose brackets, leaks at joints, and downpipes that are not draining properly. Overflow marks on external walls are often a useful early clue that guttering is underperforming.',
          'Autumn and winter are especially important times to check guttering in West London due to leaf fall and seasonal storms.'
        ]
      },
      {
        heading: 'When to call a roofing professional',
        paragraphs: [
          'If guttering problems are recurring, there may be a wider issue with falls, fixings, roof edges, or local roof defects. In those cases, a roofing specialist can review the full picture instead of treating the symptoms in isolation.',
          'This can save time and reduce repeat callouts, particularly for landlords and commercial property managers.'
        ]
      }
    ]
  }
];
