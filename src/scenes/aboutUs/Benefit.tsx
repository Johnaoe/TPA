import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Link as ScrollLink } from 'react-scroll';
import type { ReactElement } from 'react';

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    icon: ReactElement;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
        <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        >
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                    {icon}
                </div>
            </div>

            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
            <ScrollLink
                to={SelectedPage.GetInvolved}
                smooth={true}
                duration={500}
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 cursor-pointer"
                onClick={() => setSelectedPage(SelectedPage.GetInvolved)}
            >
                <p>Learn More</p>
            </ScrollLink>
        </motion.div>
    );
};

export default Benefit;