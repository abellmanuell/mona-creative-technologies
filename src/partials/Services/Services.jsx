import __Slider from "react-slick";
// import { List, ListItem } from "@/components/List/List";
import { Section } from "../../components/Section/Section";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { SectionParagraph } from "../../components/SectionParagraph/SectionParagraph";
import { usePaths } from "../../hooks/usePaths";

import { ServiceItem } from "./ServiceItem";
import { ServiceList } from "./ServiceList";

const Slider = __Slider.default || __Slider;

const images = Object.values(
  import.meta.glob("../../../../images/services/*", {
    eager: true,
    import: "default",
    query: {
      format: "webp",
    },
  })
);

export const Services = () => {
  const { assetBaseURL } = usePaths();
  return (
    <Section name="services">
      <SectionHeading>Services and Offerings</SectionHeading>
      <div className="grid items-center grid-cols-1 gap-4 lg:grid-cols-2">
        <SectionParagraph>
          At Mona Creative Technologies, we deliver solutions across{" "}
          <b>software development, training, research, and consulting</b>
          —designed to help individuals and organizations build, adapt, and
          scale in a digital-first world.
        </SectionParagraph>

        {/* Slides */}
        <div className="flex justify-center overflow-clip">
          <div className="relative">
            <div className="absolute border border-green-500  -inset-8"></div>
            <div className="absolute border border-green-500  -inset-16"></div>
            <div className="absolute border border-green-500  -inset-24"></div>
            <Slider
              fade
              autoplay
              className="rounded-md w-52 h-52 overflow-clip"
            >
              {images.map((img, i) => (
                <div key={i}>
                  <img
                    className="object-cover w-52 h-52"
                    src={assetBaseURL(img)}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Installation Services */}
      <ServiceList>
        <ServiceItem title={"Software Development"}>
          <SectionParagraph>
            We design and develop digital products that solve real problems and
            scale with purpose. Our approach combines technical excellence with
            deep understanding of users, markets, and long-term growth.
          </SectionParagraph>

          <div className="p-4 border-l-2 border-l-green-500 bg-neutral-100">
            We build:
            <br />
            <br />
            <ul>
              <li>- SaaS platforms for startups and growing businesses</li>
              <li>
                - Web applications that are reliable, secure, and user-focused
              </li>
              <li>- Mobile applications that deliver seamless experiences</li>
              <li>
                - Custom software solutions tailored to specific organizational
                needs
              </li>
            </ul>
          </div>

          <SectionParagraph>
            From ideation and product strategy to development and deployment, we
            support you at every stage of the product lifecycle.{" "}
          </SectionParagraph>
        </ServiceItem>

        {/* Sales of Solar Products */}
        <ServiceItem title={"Training & Capacity Building"}>
          <SectionParagraph>
            We believe strong ecosystems are built by skilled people. Our
            training programs are designed to equip individuals and teams with
            practical, in-demand technology skills that translate directly into
            opportunity.
          </SectionParagraph>

          <div className="p-4 border-l-2 border-l-green-500 bg-neutral-100">
            We offer:
            <ul>
              <li>- Web development training</li>
              <li>- Mobile application development training</li>
              <li>- Programming fundamentals and advanced concepts</li>
              <li>
                - Tech training for individuals, groups, and organizations
              </li>
            </ul>
          </div>

          <SectionParagraph>
            Our focus is not just on learning tools, but on building
            problem-solving ability, confidence, and readiness for real-world
            challenges.
          </SectionParagraph>
        </ServiceItem>

        <ServiceItem title={"Others"}>
          <SectionParagraph>
            Traction from other business deals, contributing to overall revenue
            and customer base expansion, though less dominant compared to core
            product sales and development.
          </SectionParagraph>
        </ServiceItem>
      </ServiceList>
    </Section>
  );
};
