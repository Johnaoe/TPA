import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type Props = {
    name: string;
    description?: string;
    image: string;
    index: number;
    onLearnMore: (program: { name: string; description: string; image: string; index: number }) => void;
};

const Class = ({ name, description, image, index, onLearnMore }: Props) => {
    const { t } = useTranslation();

    const getImageClasses = (name: string) => {
        const baseClasses = "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110";

        // Update with new program names for better image positioning
        switch(name) {
            case "Traditional Kibinai Making Workshop":
            case "Kibininės Kepimo Dirbtuvės":
            case "Tradicinės Kibininės Kepimo Dirbtuvės":
                return `${baseClasses} object-center`;
            case "Equestrian Therapy & Nature Activities":
            case "Jojimo Terapija ir Gamtos Veiklos":
                return `${baseClasses} object-[center_40%]`;
            case "Tatar Cultural Heritage Workshops":
            case "Totorių Kultūros Paveldo Dirbtuvės":
            case "Totorių Kultūros Paveldo Pažinimas":
                return `${baseClasses} object-[center_30%]`;
            case "Nature-Based Educational Programs":
            case "Gamtos Švietimo Programos":
            case "Gamtos Švietimo ir Sveikatingumo Veiklos":
                return `${baseClasses} object-bottom`;
            case "Artisan Chocolate Workshop":
            case "Šokolado Kūrimo Dirbtuvės":
            case "Sveiko Šokolado Kūrimo Dirbtuvės":
                return `${baseClasses} object-[center_60%]`;
            case "Trakai Historical & Wellness Journey":
            case "Trakų Istorijos ir Sveikatos Kelionės":
            case "Trakų Istorijos ir Aktyvus Turizmas":
                return `${baseClasses} object-[center_70%]`;
            default:
                return `${baseClasses} object-center`;
        }
    };

    const handleCardClick = () => {
        onLearnMore({
            name,
            description: description || '',
            image,
            index
        });
    };

    return (
        <motion.div
            className="group relative w-full h-[400px] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={handleCardClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick();
                }
            }}
            aria-label={`Learn more about ${name}`}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    className={getImageClasses(name)}
                    alt={`${name}`}
                    src={image}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h3 className="text-xl font-bold mb-3 leading-tight">
                        {name}
                    </h3>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <p className="text-sm leading-relaxed text-gray-200 group-hover:text-white transition-colors duration-300 mb-4">
                            {description}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Learn More Indicator */}
                <motion.div
                    className="flex items-center text-primary-300 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ x: -10 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <span className="text-sm font-medium">
                        {t('programs.learnMore', { defaultValue: 'Learn more' })}
                    </span>
                    <motion.svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                </motion.div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-primary-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Hover indicator ring */}
            <div className="absolute inset-0 border-2 border-primary-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
    );
};

export default Class;