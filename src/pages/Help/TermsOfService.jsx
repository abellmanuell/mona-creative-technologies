import React from "react";
import HelpContainer from "./components/HelpContainer";
import { Link } from "react-router-dom";

function TermsOfService() {
  return (
    <div>
      <HelpContainer>
        <h1 className="text-xl font-bold">Terms and Conditions</h1>

        <br />

        <main>
          <h6>Effective Date: 15th December, 2025</h6>

          <p>
            These Terms of Use govern your access to and use of all products,
            applications, platforms, training programs, and services operated by
            Mona Creative Technologies.
          </p>

          <br />

          <p>By using any of our Services, you agree to these Terms.</p>

          <br />
          <h4>
            <b>1. Scope of Services</b>
          </h4>
          <br />
          <p>
            Mona Creative Technologies operates a suite of digital products and
            services, including but not limited to:
          </p>
          <br />
          <ul className="list-disc">
            <li>Software applications (web and mobile)</li>
            <li>SaaS platforms</li>
            <li>Training programs</li>
            <li>Consulting and advisory services</li>
          </ul>

          <br />

          <p>
            These Terms apply to
            <strong>all current and future Services</strong>
            unless otherwise stated.
          </p>

          <br />

          <h4>
            <b>2. Acceptable Use</b>
          </h4>
          <br />
          <p>
            You agree to use our Services lawfully and responsibly. You must
            not:
          </p>
          <br />
          <ul className="list-disc">
            <li>Violate applicable laws or regulations</li>
            <li>Infringe intellectual property rights</li>
            <li>Attempt unauthorized access</li>
            <li>Disrupt systems or compromise security</li>
          </ul>

          <br />

          <h4>
            <b>3. Accounts & Access</b>
          </h4>
          <br />
          <p>
            Some Services may require account registration. <br />
            You are responsible for maintaining the confidentiality of your
            credentials and all activities under your account.
          </p>
          <br />
          <ul className="list-disc">
            <li>Violate applicable laws or regulations</li>
            <li>Infringe intellectual property rights</li>
            <li>Attempt unauthorized access</li>
            <li>Disrupt systems or compromise security</li>
          </ul>

          <br />

          <h4>
            <b>4. Intellectual Property</b>
          </h4>
          <br />
          <p>
            All software, content, designs, training materials, and
            documentation provided by Mona Creative Technologies are our
            intellectual property unless stated otherwise.
          </p>

          <br />
          <p>
            Unauthorized copying, redistribution, or modification is prohibited.
          </p>
          <br />

          <h4>
            <b>5. Training & Advisory Disclaimer</b>
          </h4>
          <br />

          <ul className="list-disc">
            <li>
              Training and consulting services are provided for educational and
              advisory purposes
            </li>
            <li>We do not guarantee specific outcomes or results</li>
            <li>Users are responsible for applying insights appropriately</li>
          </ul>

          <br />

          <h4>
            <b>6. Limitation of Liability</b>
          </h4>
          <br />

          <p>
            To the maximum extent permitted by law, Mona Creative Technologies
            shall not be liable for:
          </p>
          <br />

          <ul className="list-disc">
            <li>Indirect or consequential damages</li>
            <li>Loss of data, profits, or business opportunities</li>
            <li>Issues arising from third-party integrations</li>
          </ul>

          <p>Use of our Services is at your own risk.</p>

          <br />

          <h4>
            <b>7. Third-Party Integrations</b>
          </h4>
          <br />

          <p>Our Services may integrate third-party tools.</p>

          <p>
            We do not control or guarantee third-party availability or
            performance.
          </p>

          <br />

          <h4>
            <b>8. Termination</b>
          </h4>
          <br />

          <p>
            We reserve the right to suspend or terminate access to Services for
            violations of these Terms.
          </p>

          <br />

          <h4>
            <b>9. Governing Law</b>
          </h4>
          <br />

          <p>
            These Terms shall be governed by the laws of the Federal Republic of
            Nigeria.
          </p>

          <br />

          <h4>
            <b>10. Changes to Terms</b>
          </h4>
          <br />

          <p>
            We may revise these Terms periodically. Continued use of Services
            constitutes acceptance of updated Terms.
          </p>

          <br />

          <h4>
            <b>11. Contact Information</b>
          </h4>
          <p>For questions regarding these Terms:</p>

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
    </div>
  );
}

export default TermsOfService;
