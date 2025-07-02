import useMediaQuery from "@/hooks/useMediaQuery";
import {SelectedPage} from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.jpg";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import {motion} from "framer-motion";
import {Link as ScrollLink} from 'react-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return <section
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full mb:pb-0"
    >
        {/* IMAGE AND MAIN HEADER*/}
        <motion.div
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
            {/* MAIN HEADER*/}
            <div className="z-10 mt-32 md:basis-3/5">
                {/* HEADINGS*/}
                <motion.div
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -100},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <div className="relative">
                        <div
                            className="before:absolute before:-top-20 before:-left-20  before:z-[-1] md:before:content-evolvetext">
                            <img alt="home-page-text" src={HomePageText}/>
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                        Empowering young Europeans through sports, culture, and international
                        collaboration. Join our community and be part of amazing Erasmus+ projects
                        that connect hearts and minds across borders.
                    </p>
                </motion.div>
                {/* ACTIONS */}
                <motion.div
                    className="mt-8 flex items-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -100},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>Join Our Community</ActionButton>
                    <ScrollLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer"
                        to={SelectedPage.GetInvolved}
                        smooth={true}
                        duration={500}
                        onClick={() => setSelectedPage(SelectedPage.GetInvolved)}
                    >
                        <p>Learn More</p>
                    </ScrollLink>
                </motion.div>
            </div>
            {/* IMAGE*/}
            <div className="flex basis-3/5 justify-center mt-4 sm:mt-6 md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <div className="w-full max-w-xs h-48 sm:max-w-sm sm:h-64 md:max-w-lg md:h-[500px] overflow-hidden">
                    <img
                        className="w-full h-full object-cover object-[center_70%]"
                        alt="home-pageGraphic"
                        src={HomePageGraphic}
                    />
                </div>
            </div>
        </motion.div>
        {/* SPONSORS */}
        {/*{isAboveMediumScreens && (*/}
        {/*    <div className="h-[150px] w-full bg-primary-100 py-10">*/}
        {/*        <div className="mx-auto w-5/6">*/}
        {/*            <div className="flex w-3/5 items-center justify-between gap-8">*/}
        {/*                <img alt="redbull-sponsors" src={SponsorRedBull}/>*/}
        {/*                <img alt="forbes-sponsors" src={SponsorForbes}/>*/}
        {/*                <img alt="Fortune-sponsors" src={SponsorFortune}/>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*)}*/}
        <div>

        </div>
    </section>;

};

export default Home;