import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    program: {
        name: string;
        description: string;
        image: string;
        index: number;
    } | null;
    onGetInvolved?: (programName: string) => void;
};

const ProgramModal = ({ isOpen, onClose, program, onGetInvolved }: Props) => {
    const { t } = useTranslation();

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle ESC key press
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.keyCode === 27) onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!program) return null;

    const handleGetInvolved = () => {
        if (program && onGetInvolved) {
            onGetInvolved(program.name);
            onClose();
        }
    };

    // Get translated content from translation files
    const getTranslatedInfo = (index: number) => {
        const activityKey = `programs.activity${index + 1}`;

        return {
            details: t(`${activityKey}.details`),
            location: t(`${activityKey}.location`),
            benefits: t(`${activityKey}.benefits`).split('|').filter(Boolean),
            partners: t(`${activityKey}.partners`)
        };
    };

    const info = getTranslatedInfo(program.index);

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.5
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"/>

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-6xl h-[90vh] max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-30 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                            aria-label="Close modal"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>

                        <div className="flex flex-col lg:flex-row h-full min-h-0">
                            {/* Image Section */}
                            <div className="lg:w-1/2 h-64 lg:h-auto relative">
                                <img
                                    src={program.image}
                                    alt={program.name}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:to-black/40"/>
                            </div>

                            {/* Content Section */}
                            <motion.div
                                className="lg:w-1/2 p-4 md:p-6 lg:p-8 overflow-y-auto max-h-full"
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <div className="space-y-6">
                                    {/* Title */}
                                    <div>
                                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                                            {program.name}
                                        </h2>
                                        <div className="text-sm text-primary-600 font-medium mb-4">
                                            {t('programs.subtitle')}
                                        </div>
                                        <div className="w-16 h-1 bg-primary-500 rounded-full"/>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                            {t('programs.aboutProject')}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {program.description}
                                        </p>
                                        {info.details && (
                                            <p className="text-gray-600 leading-relaxed">
                                                {info.details}
                                            </p>
                                        )}
                                    </div>

                                    {/* Benefits */}
                                    {info.benefits.length > 0 && (
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                                {t('programs.keyBenefits')}
                                            </h3>
                                            <div className="grid grid-cols-2 gap-2">
                                                {info.benefits.map((benefit, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center text-sm text-gray-600"
                                                    >
                                                        <div
                                                            className="w-2 h-2 bg-primary-500 rounded-full mr-2 flex-shrink-0"/>
                                                        {benefit.trim()}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Location & Partners */}
                                    <div className="space-y-4">
                                        {info.location && (
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                                    {t('programs.location')}
                                                </h3>
                                                <p className="text-gray-600 flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-primary-500 flex-shrink-0"
                                                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2}
                                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                                    </svg>
                                                    {info.location}
                                                </p>
                                            </div>
                                        )}

                                        {info.partners && (
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                                    {t('programs.partners')}
                                                </h3>
                                                <p className="text-gray-600 flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-primary-500 flex-shrink-0"
                                                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth={2}
                                                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                                                    </svg>
                                                    {info.partners}
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* CTA Button */}
                                    <div className="pt-6 border-t border-gray-200">
                                        <button
                                            type="button"
                                            onClick={handleGetInvolved}
                                            className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                                        >
                                            <span>{t('programs.getInvolved')}</span>
                                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProgramModal;