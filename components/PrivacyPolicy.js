"use client";
import React from "react";
import TitleBar from "./TitleBar";
import RightSidebar from "./RightSidebar";

const PrivacyPolicy = () => {
  return (
    <>
      <TitleBar
        title="Privacy Policy"
        day={new Date().getDate().toString().padStart(2, "0")}
        year={new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "2-digit",
        })}
      />
      <div className="detail">
        <div className="description">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div style={{ padding: "20px" }}>
              <p>Last updated: June 1, 2024</p>
              <p>
                Welcome to our blog. We value your privacy and are committed to
                protecting your personal information. This Privacy Policy
                outlines how we collect, use, and safeguard your data when you
                visit our site and use our services.
              </p>

              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  and any other information you voluntarily provide when
                  subscribing to our newsletter or contacting us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website, such as your IP address, browser type, pages visited,
                  and time spent on each page.
                </li>
                <li>
                  <strong>Cookies:</strong> Data files stored on your device
                  that help us enhance your browsing experience.
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>To provide and maintain our blog.</li>
                <li>
                  To send you newsletters and updates about new job postings and
                  scholarship opportunities.
                </li>
                <li>To improve our website and user experience.</li>
                <li>
                  To respond to your inquiries and provide customer support.
                </li>
              </ul>

              <h2>3. Sharing Your Information</h2>
              <p>
                We do not sell or rent your personal information to third
                parties. We may share your information in the following
                circumstances:
              </p>
              <ul>
                <li>
                  With service providers who help us operate our website and
                  provide our services.
                </li>
                <li>When required by law or to protect our legal rights.</li>
                <li>
                  In connection with a business transfer, such as a merger or
                  acquisition.
                </li>
              </ul>

              <h2>4. Security</h2>
              <p>
                We take reasonable measures to protect your personal information
                from unauthorized access, use, or disclosure. However, no
                internet transmission is completely secure, and we cannot
                guarantee absolute security.
              </p>

              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and receive a copy of your personal data.</li>
                <li>Correct any inaccuracies in your data.</li>
                <li>Request the deletion of your personal data.</li>
                <li>Object to or restrict the processing of your data.</li>
              </ul>
              <p>
                If you wish to exercise any of these rights, please contact us.
              </p>

              <h2>6. Links to Other Websites</h2>
              <p>
                Our blog may contain links to other websites. We are not
                responsible for the privacy practices or content of these
                external sites. We encourage you to review their privacy
                policies before providing any personal information.
              </p>

              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and we will notify you of any
                significant updates.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us.
              </p>

              <p>
                Thank you for visiting our blog. We appreciate your trust and
                will continue to work hard to protect your privacy.
              </p>
            </div>
          </div>
          <div style={{ marginTop: "auto" }}></div>
        </div>
        <div className="right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
