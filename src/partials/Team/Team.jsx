import Slider from "react-slick";
import UserImage from "@/images/user.svg";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";
import { Section } from "@/components/Section/Section";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { usePaths } from "@/hooks/usePaths";

import { TeamSlideButton } from "./TeamSlideButton";

const images = Object.values(
    import.meta.glob("@/images/teams/*", {
        eager: true,
        import: "default",
        query: {
            format: "webp",
        },
    })
);

const members = [
    {
        name: "DUKE NSIKAKABASI NSIKAK",
        position: "Chief Executive Officer",
        image: images[0],
    },
    {
        name: "UMOH, UNWANA RUFUS",
        position: "Head - Product Design and Quality Assurance",
    },
    {
        name: "SUNDAY SANUSI",
        position: "Head of Research",
    },
    {
        name: "EKE JAMES",
        position: "Head - Technical Operations",
    },
];

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],

    prevArrow: (
        <TeamSlideButton>
            <HiOutlineArrowLeft className="w-5 h-5" />
        </TeamSlideButton>
    ),
    nextArrow: (
        <TeamSlideButton right>
            <HiOutlineArrowRight className="w-5 h-5" />
        </TeamSlideButton>
    ),
};

export const Team = () => {
    const { assetBaseURL } = usePaths();

    return (
        <Section name="team">
            <SectionHeading>Our Team</SectionHeading>
            <p className="max-w-3xl mx-auto text-center">
                Nexaenergy parades a highly skilled management team and
                well-qualified Board of Directors, who manage the affairs of the
                company.
            </p>

            <div className="w-full">
                <Slider {...settings}>
                    {members.map((member, i) => (
                        <div key={i}>
                            <div className="flex flex-col items-center justify-center gap-4 text-center">
                                <img
                                    src={assetBaseURL(
                                        member.image || UserImage
                                    )}
                                    alt={member.name}
                                    className="object-cover object-center rounded-full w-52 h-52"
                                />
                                <div>
                                    <h4 className="font-bold">{member.name}</h4>
                                    <h5 className="text-neutral-500">
                                        {member.position}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Section>
    );
};
