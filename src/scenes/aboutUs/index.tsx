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
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    const benefits: Array<BenefitType> = [
        {
            icon: <AcademicCapIcon className="h-6 w-6" />,
            title: t('aboutUs.benefit3.title'),
            description: t('aboutUs.benefit3.description'),
        },
        {
            icon: <HomeModernIcon className="h-6 w-6" />,
            title: t('aboutUs.benefit2.title'),
            description: t('aboutUs.benefit2.description'),
        },
        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            title: t('aboutUs.benefit1.title'),
            description: t('aboutUs.benefit1.description'),
        },
    ];

    return (
        <section id="aboutus" className="mx-auto min-h-full w-5/6 pt-12 md:pt-20 pb-6 md:pb-8">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <HText>{t('aboutUs.title')}</HText>
                    <p className="my-5 text-xl">
                        {t('aboutUs.description')}
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    variants={container}
                    key={t('aboutUs.title')} // Force re-render when language changes
                >
                    {benefits.map((benefit: BenefitType, index) => (
                        <Benefit
                            key={`benefit-${index}`} // Use stable index-based key
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                {/*<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">*/}
                {/*    /!* GRAPHIC *!/*/}
                {/*    <div className="mx-auto w-full max-w-md h-80 overflow-hidden">*/}
                {/*        <img*/}
                {/*            className="w-full h-full object-cover object-[center_15%]"*/}
                {/*            alt="about-us-page-graphic"*/}
                {/*            src={BenefitsPageGraphic}*/}
                {/*        />*/}
                {/*    </div>*/}

                {/*    /!* DESCRIPTION *!/*/}
                {/*    <div>*/}
                {/*        /!* TITLE *!/*/}
                {/*        <div className="relative">*/}
                {/*            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">*/}
                {/*                <motion.div*/}
                {/*                    initial="hidden"*/}
                {/*                    whileInView="visible"*/}
                {/*                    viewport={{ once: true, amount: 0.5 }}*/}
                {/*                    transition={{ duration: 0.5 }}*/}
                {/*                    variants={{*/}
                {/*                        hidden: { opacity: 0, x: 50 },*/}
                {/*                        visible: { opacity: 1, x: 0 },*/}
                {/*                    }}*/}
                {/*                >*/}
                {/*                    <HText>*/}
                {/*                        {t('aboutUs.successTitle')}{" "}*/}
                {/*                        <span className="text-primary-500">{t('aboutUs.successHighlight')}</span>*/}
                {/*                    </HText>*/}
                {/*                </motion.div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        /!* DESCRIPTION *!/*/}
                {/*        <motion.div*/}
                {/*            initial="hidden"*/}
                {/*            whileInView="visible"*/}
                {/*            viewport={{ once: true, amount: 0.5 }}*/}
                {/*            transition={{ delay: 0.2, duration: 0.5 }}*/}
                {/*            variants={{*/}
                {/*                hidden: { opacity: 0, x: 50 },*/}
                {/*                visible: { opacity: 1, x: 0 },*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            <p className="my-5">*/}
                {/*                {t('aboutUs.successDescription1')}*/}
                {/*            </p>*/}
                {/*            <p className="mb-5">*/}
                {/*                {t('aboutUs.successDescription2')}*/}
                {/*            </p>*/}
                {/*        </motion.div>*/}

                {/*        /!* BUTTON *!/*/}
                {/*        <div className="relative mt-16">*/}
                {/*            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">*/}
                {/*                <ActionButton setSelectedPage={setSelectedPage}>*/}
                {/*                    {t('aboutUs.joinButton')}*/}
                {/*                </ActionButton>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </motion.div>
        </section>
    );
};

export default AboutUs;