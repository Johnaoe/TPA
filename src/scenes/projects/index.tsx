import { SelectedPage } from '@/shared/types.ts';
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';
import image4 from '@/assets/image4.jpg';
import image5 from '@/assets/image5.jpg';
import image6 from '@/assets/image6.jpg';
import { motion } from 'framer-motion'
import type { ClassType } from "react";
import HText from "@/shared/HText";
import Class from "./Class";

const projects: Array<ClassType> = [
    {
        name: "Beach Volleyball Tournament",
        description:
            "Annual international beach volleyball tournaments bringing together athletes from across Europe. Participants compete, learn, and build lasting friendships while developing their skills and cultural awareness.",
        image: image1,
    },
    {
        name: "Cultural Exchange Weekends",
        image: image2,
    },
    {
        name: "International Sports Festivals",
        description:
            "Multi-sport festivals celebrating European diversity through athletic competition and cultural celebration. These events showcase the power of sports to unite people across borders.",
        image: image3,
    },
    {
        name: "Community Outreach Programs",
        description:
            "Local community engagement projects that bring international participants together with local youth. These programs focus on social inclusion and community development through sports.",
        image: image4,
    },
    {
        name: "Community",
        image: image5,
    },
    {
        name: "Training Classes",
        image: image6,
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
    return (
        <section id="projects" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
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
                        <HText>OUR PROJECTS</HText>
                        <p className="py-5">
                            From beach volleyball tournaments to cultural exchange programs, we're
                            constantly developing new ways to bring Europeans together. Each
                            project combines sports, learning, and cultural exchange to create
                            unforgettable experiences.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {projects.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
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

export default Projects;