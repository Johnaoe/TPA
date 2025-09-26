import { SelectedPage } from '@/shared/types';
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';
import image4 from '@/assets/image4.jpg';
import image5 from '@/assets/image5.jpg';
import image6 from '@/assets/image6.jpg';
import { motion } from 'framer-motion';
import HText from "@/shared/HText";
import Class from "./Class";
import ProgramModal from "./ProgramModal";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface ClassType {
    name: string;
    description?: string;
    image: string;
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Programs = ({ setSelectedPage }: Props) => {
    const { t } = useTranslation();
    const [selectedProgram, setSelectedProgram] = useState<{
        name: string;
        description: string;
        image: string;
        index: number;
    } | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects: Array<ClassType> = [
        {
            name: t('programs.activity1.name'),
            description: t('programs.activity1.description'),
            image: image1,
        },
        {
            name: t('programs.activity2.name'),
            description: t('programs.activity2.description'),
            image: image2,
        },
        {
            name: t('programs.activity3.name'),
            description: t('programs.activity3.description'),
            image: image3,
        },
        {
            name: t('programs.activity4.name'),
            description: t('programs.activity4.description'),
            image: image4,
        },
        {
            name: t('programs.activity5.name'),
            description: t('programs.activity5.description'),
            image: image5,
        },
        {
            name: t('programs.activity6.name'),
            description: t('programs.activity6.description'),
            image: image6,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const handleLearnMore = (program: { name: string; description: string; image: string; index: number }) => {
        setSelectedProgram(program);
        setIsModalOpen(true);
    };

    const handleGetInvolved = (programName: string) => {
        // Close modal first, then navigate after a short delay
        setTimeout(() => {
            // Scroll to the very bottom of the page (contact form)
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });

            // Alternative: Find and scroll to contact form element
            const contactFormElement = document.getElementById('getinvolved');
            if (contactFormElement) {
                // Add some extra padding to ensure form is fully visible
                const yOffset = -20;
                const y = contactFormElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
            }

            // Store program info for form pre-filling
            sessionStorage.setItem('selectedProgram', programName);

            // Trigger a custom event to notify the contact form
            const event = new CustomEvent('programSelected', {
                detail: { programName }
            });
            window.dispatchEvent(event);

            // Update selected page
            setSelectedPage(SelectedPage.GetInvolved);
        }, 300); // Slightly longer delay to ensure smooth modal close
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Delay clearing selectedProgram to allow exit animation
        setTimeout(() => setSelectedProgram(null), 300);
    };

    return (
        <>
            <section id="programs" className="w-full bg-primary-100 pt-8 md:pt-12 pb-12 md:pb-20">
                <motion.div
                    onViewportEnter={() => setSelectedPage(SelectedPage.Programs)}
                >
                    <motion.div
                        className="mx-auto w-5/6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, x: -50},
                            visible: {opacity: 1, x: 0},
                        }}
                    >
                        <div className="md:w-3/5 mb-8 md:mb-12">
                            <HText>{t('programs.title')}</HText>
                            <p className="py-5 text-lg">
                                {t('programs.description')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Grid Layout for Programs */}
                    <motion.div
                        className="mx-auto w-5/6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.2}}
                    >
                        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            {projects.map((item: ClassType, index) => (
                                <motion.div
                                    key={`program-${index}`}
                                    variants={itemVariants}
                                    className="w-full"
                                >
                                    <Class
                                        name={item.name}
                                        description={item.description}
                                        image={item.image}
                                        index={index}
                                        onLearnMore={handleLearnMore}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Program Detail Modal */}
            <ProgramModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                program={selectedProgram}
                onGetInvolved={handleGetInvolved}
            />
        </>
    );
};

export default Programs;