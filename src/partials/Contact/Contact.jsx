import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";
import { Section } from "../../components/Section/Section";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { StyledLink } from "../../components/StyledLink/StyledLink";

import { ContactItem } from "./ContactItem";

export const Contact = () => {
  return (
    <Section name="contact">
      <SectionHeading>Contact</SectionHeading>
      <p className="max-w-3xl mx-auto text-center">
        For any enquiries reach out to us via any of the platforms below
      </p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <iframe
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1607.0781612213377!2d7.571591197004133!3d9.027162608250789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e092d192df187%3A0x977fe5ca5b0d7101!2sMona%20Creative%20Technologies!5e0!3m2!1sen!2sng!4v1765659309354!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col gap-4 p-4 bg-neutral-100">
          {/* Address */}
          <ContactItem icon={HiOutlineMapPin}>
            Suite 1, Police Station Corner Shop Opposite ECWA Goodnews II,
            Nyanya FCT Abuja Municipal Area Council Abuja.
          </ContactItem>

          {/* Phones */}
          <ContactItem icon={HiOutlinePhone}>
            <div className="flex flex-col flex-wrap gap-1">
              <StyledLink href="tel:+2349025534431">
                +234-(0)-902-553-4431
              </StyledLink>
            </div>
          </ContactItem>

          {/* Email */}
          <ContactItem icon={HiOutlineEnvelope}>
            <StyledLink href="mailto:mannydev02@gmail.com">
              mannydev02@gmail.com
            </StyledLink>
          </ContactItem>
        </div>
      </div>
    </Section>
  );
};
