"use client";
import Link from "next/link";
import settings from "@/settings.json";

const Footer = () => {
  return (
    <div className="legal">
      <div className="legal__copyright">
        © {new Date().getFullYear()}{" "}
        <span className="color-primary"> {settings.seo.title}</span> All Rights Reserved
      </div>
      <div className="menu-footer-container">
        <ul id="menu-footer" className="legal__pages">
        <li>
            <Link
              href={`https://wa.me/${settings.contact.whatsapp}`}
              target="_blank"
              aria-current="page"
            >
              Whatsapp
            </Link>
          </li>
          <li>
            <Link
              href={settings.contact.email}
              target="_blank"
              aria-current="page"
            >
              Contact us
            </Link>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
