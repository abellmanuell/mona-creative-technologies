import React from "react";
import HelpContainer from "./components/HelpContainer";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <HelpContainer>
      <h1 className="text-xl font-bold">Privacy Policy</h1>
      <br />
      <main>
        <h6>Effective Date: 15th December, 2025</h6>

        <p>
          Mona Creative Technologies (“Mona Creative,” “we,” “our,” or “us”)
          operates a portfolio of software applications, digital platforms,
          websites, training programs, and consulting services (collectively,
          the “Services”).
        </p>

        <br />

        <p>
          This Privacy Policy explains how we collect, use, disclose, and
          protect personal information across all our products and services,
          including but not limited to current and future software applications
          developed or managed by Mona Creative Technologies.
        </p>

        <br />

        <p>
          By accessing or using any of our Services, you agree to the practices
          described in this Privacy Policy.
        </p>
        <br />
        <h4>
          <b>1. Information We Collect</b>
        </h4>

        <br />

        <h4>
          <b>a. Information You Provide</b>
        </h4>

        <p>We may collect personal information when you:</p>
        <br />
        <ul className="list-disc">
          <li>Use our websites or applications</li>
          <li>Register for an account or service</li>
          <li>Participate in training programs</li>
          <li>Contact us or submit inquiries</li>
        </ul>

        <br />

        <p>
          This may include:{" "}
          <b>
            Full name, Email address, Phone number, Business or organization
            details, Account credentials (where applicable), Any information you
            voluntarily provide,
          </b>
        </p>
        <br />

        <h4>
          <b>b. Information Collected Automatically</b>
        </h4>

        <p>
          When you interact with our Services, we may automatically collect:
        </p>
        <br />
        <ul className="list-disc">
          <li>Device and browser information</li>
          <li>IP address</li>
          <li>Usage data (pages visited, features used, timestamps)</li>
          <li>Log files and performance metrics</li>
        </ul>
        <br />
        <p>This data helps us improve functionality and user experience.</p>

        <br />

        <h4>
          <b>2. How We Use Information</b>
        </h4>
        <p>We use collected information to:</p>
        <br />
        <ul className="list-disc">
          <li>Operate, maintain, and improve our software and services</li>
          <li>Provide customer support and communication</li>
          <li>Deliver training and consulting services</li>
          <li>Analyze usage and improve performance</li>
          <li>Ensure security and prevent fraud</li>
          <li>Comply with legal and regulatory obligations</li>
        </ul>

        <br />

        <h4>
          <b>3. Products & Services Under Mona Creative Technologies</b>
        </h4>
        <p>This Privacy Policy applies to:</p>
        <br />
        <ul className="list-disc">
          <li>
            All software applications developed or owned by Mona Creative
            Technologies
          </li>
          <li>Websites, dashboards, and digital platforms we operate</li>
          <li>Training programs and consulting engagements</li>
          <li>
            Any future products or services launched under the Mona Creative
            Technologies brand
          </li>
        </ul>

        <br />

        <h4>
          <b>4. Sharing of Information</b>
        </h4>
        <p>We do not sell or rent personal data.</p>
        <p>We may share information only:</p>
        <br />
        <ul className="list-disc">
          <li>
            With trusted third-party service providers assisting our operations
          </li>
          <li>Where legally required</li>
          <li>To protect our rights, users, or systems</li>
        </ul>

        <br />
        <p>
          All partners are required to uphold confidentiality and security
          standards.
        </p>

        <br />

        <h4>
          <b>5. Data Security</b>
        </h4>
        <p>
          We implement reasonable technical and organizational safeguards to
          protect personal information. <br /> While we strive to protect data,
          no digital system is completely secure.
        </p>

        <br />

        <h4>
          <b>6. Cookies & Tracking Technologies</b>
        </h4>
        <p>
          Our websites and applications may use cookies and similar technologies
          to:
        </p>
        <br />
        <p>
          Enhance user experience, Analyze usage patterns, and Improve
          performance
        </p>
        <br />
        <p>Users may manage cookie preferences through browser settings.</p>

        <br />

        <h4>
          <b>7. Third-Party Services</b>
        </h4>
        <p>
          Some Services may integrate third-party tools or links. <br />
          Mona Creative Technologies is not responsible for the privacy
          practices of third-party services.
        </p>
        <br />

        <h4>
          <b>8. Your Rights</b>
        </h4>
        <p>Depending on jurisdiction, you may have the right to:</p>

        <br />
        <ul className="list-disc">
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent for data processing</li>
        </ul>

        <br />

        <p>Requests can be submitted through our official contact channels.</p>

        <br />

        <h4>
          <b>9. Updates to This Policy</b>
        </h4>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted
          with a revised effective date.
        </p>

        <h4>
          <b>10. Contact Information</b>
        </h4>
        <p>For privacy-related inquiries:</p>

        <br />
        <ul>
          <li>
            Email:{" "}
            <Link to="mailto:mannydev02@gmail.com">mannydev02@gmail.com</Link>
          </li>
          <li>
            Contact us: <Link to="tel:+2349025534431">+2349025534431</Link>
          </li>
        </ul>
      </main>
    </HelpContainer>
  );
}

export default PrivacyPolicy;
