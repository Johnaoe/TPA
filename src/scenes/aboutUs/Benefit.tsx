import { motion } from "framer-motion";
import type { ReactElement } from 'react';

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    icon: ReactElement;
    title: string;
    description: string;
};

const Benefit = ({ icon, title, description }: Props) => {
    return (
        <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-8 text-center h-80 flex flex-col justify-between"
        >
            <div className="flex flex-col items-center flex-grow">
                <div className="mb-4 flex justify-center">
                    <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                        {icon}
                    </div>
                </div>

                <h4 className="font-bold text-lg mb-4">{title}</h4>
                <p className="text-gray-600 leading-relaxed flex-grow flex items-center">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default Benefit;