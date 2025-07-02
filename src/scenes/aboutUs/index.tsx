import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { type BenefitType, SelectedPage } from "@/shared/types";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.jpg";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Connect Across Borders",
        description:
            "Join a vibrant community of young Europeans. Build friendships and professional networks that span across multiple countries and cultures.",
    },
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Active Learning Through Sports",
        description:
            "Experience personal growth through beach volleyball tournaments, outdoor activities, and team-building events that combine fun with learning.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Skills for Life",
        description:
            "Develop leadership, communication, and intercultural competencies through hands-on project participation and international collaboration.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
    return (
        <section id="aboutus" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>MORE THAN JUST PROJECTS.</HText>
                    <p className="my-5 text-sm">
                        We create meaningful connections between young people across Europe through
                        innovative Erasmus+ projects. Our focus on sports and cultural activities
                        builds lasting friendships and develops essential life skills.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <div className="mx-auto w-full max-w-md h-80 overflow-hidden">
                        <img
                            className="w-full h-full object-cover object-[center_15%]"
                            alt="about-us-page-graphic"
                            src={BenefitsPageGraphic}
                        />
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        HUNDREDS OF YOUNG PEOPLE GETTING{" "}
                                        <span className="text-primary-500">CONNECTED</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                Since our founding, we've brought together participants from over 15 European
                                countries. Our beach volleyball events have become a cornerstone of youth sports
                                exchange, creating lasting friendships and professional networks that extend far
                                beyond the tournament days.
                            </p>
                            <p className="mb-5">
                                Through our innovative approach to combining sports with cultural exchange,
                                participants develop not just athletic skills, but also language abilities,
                                cultural awareness, and leadership capabilities. Every event is designed to
                                break down barriers and build bridges between young Europeans.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Our Community
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutUs;