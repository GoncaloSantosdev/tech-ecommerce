export const footerData = {
  company: {
    name: "TechHub",
    description:
      "Your premium destination for the latest technology. Experience innovation with Apple-quality design and service.",
  },
  sections: [
    {
      title: "Products",
      links: [
        { name: "Smartphones", href: "/collections/smartphones" },
        { name: "Laptops", href: "/collections/laptops" },
        { name: "Accessories", href: "/collections/accessories" },
        { name: "Gaming", href: "/collections/gaming" },
        { name: "Sale Items", href: "/collections/sale", highlight: true },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/support/contact" },
        { name: "Shipping Info", href: "/support/shipping" },
        { name: "Returns & Exchanges", href: "/support/returns" },
        { name: "Warranty", href: "/support/warranty" },
        { name: "FAQ", href: "/support/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  socialLinks: [
    {
      name: "Twitter",
      href: "/social/twitter",
      ariaLabel: "Twitter",
      icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
    },
    {
      name: "Instagram",
      href: "/social/instagram",
      ariaLabel: "Instagram",
      icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.901 8.246 7.052 7.756 8.349 7.756s2.448.49 3.324 1.297c.876.807 1.366 1.958 1.366 3.255s-.49 2.448-1.297 3.324c-.876.876-2.027 1.366-3.324 1.366z",
    },
    {
      name: "LinkedIn",
      href: "/social/linkedin",
      ariaLabel: "LinkedIn",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
  ],
  newsletter: {
    title: "Stay Updated",
    description: "Get the latest product releases and exclusive offers.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
  bottomBar: {
    copyright: (year: number) => `© ${year} TechHub. All rights reserved.`,
    links: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookies", href: "/cookies" },
    ],
  },
};
