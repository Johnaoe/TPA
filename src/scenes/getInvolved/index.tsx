import { useForm } from 'react-hook-form';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphics.jpg';
import HText from '@/shared/HText';
import { useTranslation } from 'react-i18next';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const GetInvolved = ({ setSelectedPage }: Props) => {
    const { t } = useTranslation();
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section id="getinvolved" className="mx-auto w-5/6 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.GetInvolved)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className="text-primary-500">{t('contact.title')}</span> {t('contact.titleHighlight')}
                    </HText>
                    <p className="my-5">
                        {t('contact.description')}
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, y: 50},
                            visible: {opacity: 1, y: 0},
                        }}
                    >
                        <form
                            onSubmit={onSubmit}
                            action="https://formspree.io/f/mblyeewn"
                            method="POST"
                        >
                            <input
                                className={inputStyles}
                                type="text"
                                name="name"
                                placeholder={t('contact.namePlaceholder')}
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && t('contact.required')}
                                    {errors.name.type === "maxLength" && t('contact.maxLength', { count: 100 })}
                                </p>
                            )}

                            <input
                                className={inputStyles}
                                type="email"
                                name="email"
                                placeholder={t('contact.emailPlaceholder')}
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && t('contact.required')}
                                    {errors.email.type === "pattern" && t('contact.invalidEmail')}
                                </p>
                            )}

                            <textarea
                                className={inputStyles}
                                name="message"
                                placeholder={t('contact.messagePlaceholder')}
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && t('contact.required')}
                                    {errors.message.type === "maxLength" && t('contact.maxLength', { count: 2000 })}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                {t('contact.submitButton')}
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5}}
                        transition={{delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: {opacity: 0, y: 50},
                            visible: {opacity: 1, y: 0},
                        }}
                    >
                        <div
                            className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                            <div className="w-full h-80 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover object-[center_50%]"
                                    alt="get-involved-page-graphic"
                                    src={ContactUsPageGraphic}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default GetInvolved;