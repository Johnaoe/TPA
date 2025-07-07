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
import { useTranslation } from 'react-i18next';

// Define ClassType locally
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

    const projects: Array<ClassType> = [
        {
            name: t('programs.program1.name'),
            description: t('programs.program1.description'),
            image: image1,
        },
        {
            name: t('programs.program2.name'),
            description: t('programs.program2.description'),
            image: image2,
        },
        {
            name: t('programs.program3.name'),
            description: t('programs.program3.description'),
            image: image3,
        },
        {
            name: t('programs.program4.name'),
            description: t('programs.program4.description'),
            image: image4,
        },
        {
            name: t('programs.program5.name'),
            description: t('programs.program5.description'),
            image: image5,
        },
        {
            name: t('programs.program6.name'),
            description: t('programs.program6.description'),
            image: image6,
        },
    ];

    return (
        <section id="programs" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Programs)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>{t('programs.title')}</HText>
                        <p className="py-5">
                            {t('programs.description')}
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap" key={t('programs.title')}>
                        {projects.map((item: ClassType, index) => (
                            <Class
                                key={`program-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default Programs;