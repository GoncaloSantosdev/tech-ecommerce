import Link from "next/link";
// Components
import { Logo } from "../";
import Button from "../ui/Button";
// Data
import { footerData } from "@/data/footerData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200/50">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="sm" />
            <p className="text-sm text-muted-foreground leading-relaxed tracking-wide">
              {footerData.company.description}
            </p>
            <div className="flex space-x-4">
              {footerData.socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={social.ariaLabel}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Dynamic Sections */}
          {footerData.sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-medium text-foreground tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors duration-200 tracking-wide ${
                        link.highlight
                          ? "text-accent hover:text-accent/80"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-neutral-200/50">
          <div className="max-w-md mx-auto text-center lg:max-w-none lg:text-left lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h3 className="text-sm font-medium text-foreground tracking-wide">
                {footerData.newsletter.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground tracking-wide">
                {footerData.newsletter.description}
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:ml-8">
              <div className="flex max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder={footerData.newsletter.placeholder}
                  className="flex-1 px-4 py-2 text-sm bg-white border border-neutral-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors duration-200"
                />
                {/* Subscribe Button - Using Button Component */}
                <Button
                  variant="primary"
                  className="rounded-l-none rounded-r-lg"
                >
                  {footerData.newsletter.buttonText}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-neutral-200/50 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground tracking-wide">
            {footerData.bottomBar.copyright(currentYear)}
          </p>
          <div className="flex items-center space-x-6">
            {footerData.bottomBar.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
