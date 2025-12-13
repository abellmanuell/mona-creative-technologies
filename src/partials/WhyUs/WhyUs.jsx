import {
  HiCubeTransparent,
  HiOutlineBolt,
  HiOutlineLockClosed,
} from "react-icons/hi2";
import { WiSolarEclipse } from "react-icons/wi";
import { Section } from "../../components/Section/Section";
import { SectionHeading } from "../../components/SectionHeading/SectionHeading";

import { WhyUsParagraph } from "./WhyUsParagraph";

export const WhyUs = () => {
  return (
    <Section name="why-us">
      <SectionHeading>Why Mona Creative Technologies?</SectionHeading>

      <p className="max-w-2xl mx-auto text-center">
        At Mona Creative Technologies, we integrate software development,
        training, research, and consulting to help you innovate, grow, and stay
        ahead.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* First paragraph */}
        <WhyUsParagraph
          className="text-white bg-black"
          icon={HiOutlineBolt}
          title={"We Build With Purpose"}
        >
          We don’t build software for the sake of building. Every product we
          create is rooted in a real problem, a real user, and a clear outcome.
          We take time to understand your needs, your context, and your goals—so
          what we build doesn’t just function, but truly works.
        </WhyUsParagraph>

        {/* Second paragraph */}
        <WhyUsParagraph
          className="bg-green-100"
          icon={WiSolarEclipse}
          title={"We Train With Intention"}
        >
          Our training goes beyond tools and tutorials. We focus on building
          thinking, confidence, and competence. Whether you’re an individual
          learning a new skill or a team upgrading capacity, our training is
          practical, relevant, and designed to translate directly into
          real-world results.
        </WhyUsParagraph>

        {/* Third paragraph */}
        <WhyUsParagraph
          className="text-white bg-black"
          icon={HiCubeTransparent}
          title={"We Consult With Clarity"}
        >
          In a noisy tech ecosystem, clarity is power. Our consulting approach
          helps founders, teams, and organizations make informed
          decisions—cutting through confusion to focus on what matters most. We
          guide you with insight, honesty, and strategy, not assumptions.
        </WhyUsParagraph>

        <WhyUsParagraph
          className="text-white bg-black"
          icon={HiOutlineBolt}
          title={"We Focus on Impact, Not Hype"}
        >
          We are not driven by trends or buzzwords. We care about
          outcomes—products that scale, skills that stick, and strategies that
          deliver value over time. If it doesn’t create meaningful impact, it
          doesn’t belong in our work.
        </WhyUsParagraph>

        <WhyUsParagraph
          className="bg-green-100"
          icon={WiSolarEclipse}
          title={"One Integrated Partner"}
        >
          At Mona Creative Technologies, we bring software development,
          training, research, and consulting together under one roof. This
          integrated approach allows us to support you end-to-end—from idea to
          execution, from learning to leadership. We don’t just help you keep
          up. We help you move forward—with confidence, structure, and purpose.
        </WhyUsParagraph>

        <WhyUsParagraph
          className="text-white bg-black"
          icon={HiCubeTransparent}
          title={""}
        ></WhyUsParagraph>
      </div>
    </Section>
  );
};
