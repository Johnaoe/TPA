import Logo from "@/assets/Logo.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <div className="h-10 w-auto overflow-hidden flex items-center">
                        <img alt="logo" src={Logo} className="w-auto h-20 object-cover object-center"/>
                    </div>
                    <p className="my-5">
                        {t('footer.description')}
                    </p>
                    <p>{t('footer.copyright')}</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">{t('footer.programs')}</h4>
                    <p className="my-5">
                        <a
                            href="https://instagram.com/beachbros.lt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-500 hover:text-secondary-500 underline"
                        >
                            {t('footer.program1')}
                        </a>
                    </p>
                    <p className="my-5">{t('footer.program2')}</p>
                    <p>{t('footer.program3')}</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">{t('footer.getInvolved')}</h4>
                    <p className="my-5">{t('footer.getInvolvedDescription')}</p>
                    <p>{t('footer.email')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;