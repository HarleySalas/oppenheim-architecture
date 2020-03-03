import React from "react";
import { Link } from "gatsby";
import "./footer.scss";

import Facebook from "../../../shared/social/facebook.svg";
import Instagram from "../../../shared/social/instagram.svg";
import Linkedin from "../../../shared/social/linkedin.svg";
import Pinterest from "../../../shared/social/pinterest.svg";

import WayfareLogo from "../../../shared/wayfare-studios-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__row">
          <div className="footer__column">
            <div className="footer__column__wrapper">
              <span className="footer__column__title">Miami</span>
              <span className="footer__column__span">
                245 NE 37th Street
                <br />
                Miami, FL 33137, USA
                <br />
              </span>
              <a href="tel:13055768404">
                <span className="footer__column__tel footer__column__tel--link">
                  tel: 1.305.576.8404
                </span>
                <br />
              </a>
              <span className="footer__column__span">fax: 1.305.576.8433</span>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__column__wrapper">
              <span className="footer__column__title">New York</span>
              <span className="footer__column__span">
                195 Plymouth Street #620
                <br />
                Brooklyn, NY 11201, USA
                <br />
              </span>
              <a href="tel:13055768404">
                <span className="footer__column__tel footer__column__tel--link">
                  tel: 1.305.576.8404
                </span>
                <br />
              </a>
              <span className="footer__column__span">fax: 1.305.576.8433</span>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__column__wrapper">
              <span className="footer__column__title">Europe</span>
              <span className="footer__column__span">
                Kirchplatz 18
                <br />
                CH-4132 Muttenz
                <br />
                Basel, Switzerland
                <br />
              </span>
              <a href="tel:13055768404">
                <span className="footer__column__tel footer__column__tel--link">
                  tel: 1.305.576.8404
                </span>
                <br />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer__container">
        <div className="footer__row">
          <div className="footer__column">
            <div className="footer__column__wrapper">
              <span className="footer__column__title">Main</span>
              <ul className="footer__column__ul">
                <li className="footer__column__li">
                  <Link to="/">Home</Link>
                </li>
                <li className="footer__column__li">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="footer__column__li">
                  <Link to="/company">Company</Link>
                </li>
                <li className="footer__column__li">
                  <Link to="/news">News</Link>
                </li>
                <li className="footer__column__li">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__column__wrapper">
              <span className="footer__column__title">Company</span>
              <ul className="footer__column__ul">
                <li className="footer__column__li">
                  <Link to="/company/about">About</Link>
                </li>
                <li className="footer__column__li">
                  <Link to="/company/team">Team</Link>
                </li>
                <li className="footer__column__li">
                  <Link to="/company/lectures">Lectures</Link>
                </li>
                <li className="footer__column__li">
                  <Link to="/company/awards">Awards</Link>
                </li>
                <li className="footer__column__li">
                  <Link to="/company/careers">Careers</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__column">
            <div className="footer__column__wrapper">
              <span className="footer__column__title">Contact</span>
              <span className="footer__column__span">
                Media & Press Inquiries
              </span>
              <a href="mailto:press@oppenoffice.com" className="mb-1-2">
                <span className="footer__column__tel footer__column__tel--link">
                  press@oppenoffice.com
                </span>
              </a>
              <span className="footer__column__span">
                New Business Inquiries
              </span>
              <a href="mailto:press@oppenoffice.com" className="mb-1-2">
                <span className="footer__column__tel footer__column__tel--link">
                  newbiz@oppenoffice.com
                </span>
              </a>
              <span className="footer__column__span">Career Inquiries</span>
              <a href="mailto:press@oppenoffice.com">
                <span className="footer__column__tel footer__column__tel--link">
                  hr@oppenoffice.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__small-row">
        <div className="container footer__container-small-row footer__container-small-row--top">
          <div className="footer__social-wrapper">
            <a
              href="https://www.facebook.com/oppenheimarchitecture/"
              rel="noopener noreferrer"
              target="_blank"
              className="footer__social-link"
            >
              <Facebook className="footer__social-icon" />
            </a>
            <a
              href="https://www.instagram.com/oppenoffice/"
              rel="noopener noreferrer"
              target="_blank"
              className="footer__social-link"
            >
              <Instagram className="footer__social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/oppenheim-architecture---design/"
              rel="noopener noreferrer"
              target="_blank"
              className="footer__social-link"
            >
              <Linkedin className="footer__social-icon" />
            </a>
            <a
              href="https://www.pinterest.com/oppenoffice/"
              rel="noopener noreferrer"
              target="_blank"
              className="footer__social-link"
            >
              <Pinterest className="footer__social-icon" />
            </a>
          </div>
          <div className="footer__small-right">
            <ul className="footer__top-ul">
              <li className="footer__top-li">
                <Link to="/privacy-policy" className="footer__small-row__link">
                  Privacy Policy
                </Link>
              </li>
              <li className="footer__top-li">
                <Link to="/sitemap" className="footer__small-row__link">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__small-row">
        <div className="container footer__container-small-row footer__container-small-row--bottom">
          <div className="footer__mark-wrapper">
            <WayfareLogo className="footer__mark" />
            <div className="footer__mark__span">
              {" "}
              Website by Wayfare Studios
            </div>
          </div>
          <div className="footer__mark__span">
            &copy; 2020 Oppenheim Architecture
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
