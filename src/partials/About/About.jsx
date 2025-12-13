import AboutUsImg from "./../../images/about-tech.webp";
import { Section } from "../../components/Section/Section";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";
import { SectionParagraph } from "../../components/SectionParagraph/SectionParagraph";
import { usePaths } from "../../hooks/usePaths";

export const About = () => {
  const { assetBaseURL } = usePaths();
  return (
    <Section name="about">
      <SectionHeading>About Us</SectionHeading>
      <p className="max-w-3xl mx-auto text-center">
        Mona Creative Technologies is a technology innovation company built on
        one clear belief: software should solve real problems and create real
        value.
      </p>

      <div className="grid items-center grid-cols-1 gap-4 mx-auto md:grid-cols-2">
        <div className="flex items-center justify-center row-span-2 p-4 lg:justify-end md:row-span-2">
          <img src={assetBaseURL(AboutUsImg)} className="w-80" />
        </div>

        <SectionParagraph>
          We operate at the intersection of technology, people, and
          purpose—designing digital solutions, training talent, and providing
          strategic guidance to help individuals, startups, and organizations
          grow in a fast-changing digital world.
        </SectionParagraph>

        <SectionParagraph>
          Our work spans software development, training, research, and
          consulting, allowing us to approach problems holistically rather than
          in isolation. We don’t just build products; we think through systems,
          users, and long-term impact.
          <br />
          <br />
          Mona Creative Technologies was born out of a deep awareness of the
          gaps that exist across Africa—gaps in access, efficiency, digital
          tools, and technical capacity. Instead of waiting for solutions, we
          chose to build them. Through intentional software, practical training,
          and thoughtful consulting, we contribute to closing those gaps one
          solution at a time.
        </SectionParagraph>

        <SectionParagraph>
          We are driven by clarity, not noise. By relevance, not trends. Every
          line of code we write, every training we deliver, and every advisory
          session we offer is guided by a single question: Does this truly solve
          a problem?
          <br />
          <br />
          At Mona Creative Technologies, we exist to help ideas move from
          possibility to product, from vision to value—building technology that
          works for people and businesses alike.
        </SectionParagraph>
      </div>
    </Section>
  );
};
