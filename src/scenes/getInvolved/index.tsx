import { useForm } from 'react-hook-form';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphics.jpg';
import HText from '@/shared/HText';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

type FormData = {
    name: string;
    email: string;
    message: string;
};

const GetInvolved = ({ setSelectedPage }: Props) => {
    const { t } = useTranslation();
    const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        setValue,
        formState: { errors },
    } = useForm<FormData>();

    const generateProgramMessage = (programName: string) => {
        const currentLanguage = localStorage.getItem('i18nextLng') || 'en';

        const messages = {
            'lt': `Sveiki!

Norėčiau sužinoti daugiau apie programą "${programName}" ir kaip galėčiau dalyvauti. 

Prašau susisiekite su manimi dėl išsamesnės informacijos apie:
• Registracijos procesą ir reikalavimus
• Dalyvavimo sąlygas ir datas
• Programos trukmę ir vietą
• Kitas svarbias detales

Ačiū už jūsų laiką!`,
            'en': `Hello!

I would like to learn more about the "${programName}" program and how I can participate.

Please contact me with detailed information about:
• Registration process and requirements
• Participation conditions and dates
• Program duration and location
• Other important details

Thank you for your time!`
        };

        return messages[currentLanguage as keyof typeof messages] || messages['en'];
    };

    useEffect(() => {
        const handleProgramSelected = (event: CustomEvent) => {
            const { programName } = event.detail;
            const prefilledMessage = generateProgramMessage(programName);
            setValue('message', prefilledMessage);

            // Enhanced visual feedback
            const messageField = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
            if (messageField) {
                messageField.style.transition = 'all 0.5s ease';
                messageField.style.backgroundColor = '#10b981';
                messageField.style.color = 'white';
                messageField.style.transform = 'scale(1.02)';
                messageField.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.5)';

                // Focus the field
                setTimeout(() => {
                    messageField.focus();
                    messageField.setSelectionRange(0, 0); // Cursor at start
                }, 500);

                // Reset styles after animation
                setTimeout(() => {
                    messageField.style.backgroundColor = '';
                    messageField.style.color = '';
                    messageField.style.transform = '';
                    messageField.style.boxShadow = '';
                }, 3000);
            }
        };

        // Add event listener
        window.addEventListener('programSelected', handleProgramSelected as EventListener);

        // Check for stored program on component mount
        const storedProgram = sessionStorage.getItem('selectedProgram');
        if (storedProgram) {
            const prefilledMessage = generateProgramMessage(storedProgram);
            setValue('message', prefilledMessage);
            sessionStorage.removeItem('selectedProgram');
        }

        return () => {
            window.removeEventListener('programSelected', handleProgramSelected as EventListener);
        };
    }, [setValue]);

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    return (
        <section id="getinvolved" className="mx-auto w-5/6 pt-4 md:pt-8 pb-8 md:pb-12">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.GetInvolved)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
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
                <div className="mt-4 md:mt-8 justify-between gap-4 md:gap-8 md:flex">
                    <motion.div
                        className="mt-6 md:mt-10 basis-3/5 md:mt-0"
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
                                placeholder={t('contact.namePlaceholder')}
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                                aria-label={t('contact.namePlaceholder')}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500" role="alert">
                                    {errors.name.type === "required" && t('contact.required')}
                                    {errors.name.type === "maxLength" && t('contact.maxLength', {count: 100})}
                                </p>
                            )}

                            <input
                                className={inputStyles}
                                type="email"
                                placeholder={t('contact.emailPlaceholder')}
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                                aria-label={t('contact.emailPlaceholder')}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500" role="alert">
                                    {errors.email.type === "required" && t('contact.required')}
                                    {errors.email.type === "pattern" && t('contact.invalidEmail')}
                                </p>
                            )}

                            <textarea
                                className={`${inputStyles} transition-all duration-300 min-h-[120px]`}
                                placeholder={t('contact.messagePlaceholder')}
                                rows={6}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                                aria-label={t('contact.messagePlaceholder')}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500" role="alert">
                                    {errors.message.type === "required" && t('contact.required')}
                                    {errors.message.type === "maxLength" && t('contact.maxLength', {count: 2000})}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2"
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
                            <div className="w-full h-80 overflow-hidden rounded-lg shadow-lg">
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