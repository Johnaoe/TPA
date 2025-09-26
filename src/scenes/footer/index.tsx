import Logo from "@/assets/Logo.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-primary-100 pt-8 md:pt-12 pb-12 md:pb-16">
            <div className="justify-content mx-auto w-5/6 gap-8 md:gap-16 md:flex">
                <div className="basis-1/2 mb-8 md:mb-0">
                    <div className="h-16 w-auto overflow-hidden flex items-center mb-4">
                        <img alt="TPA logo" src={Logo} className="w-auto h-16 object-contain"/>
                    </div>
                    <p className="my-4 text-gray-600 leading-relaxed">
                        {t('footer.description')}
                    </p>
                    <div className="space-y-2">
                        <p className="text-sm text-gray-500">{t('footer.copyright')}</p>
                        <p className="text-sm text-blue-600 font-medium">{t('footer.euFunding')}</p>
                    </div>
                </div>

                <div className="basis-1/4 mb-8 md:mb-0">
                    <h4 className="font-bold text-gray-900 mb-4">{t('footer.programs')}</h4>
                    <div className="space-y-3">
                        <p>
                            <a
                                href="https://instagram.com/beachbros.lt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-500 hover:text-secondary-500 underline transition-colors"
                            >
                                {t('footer.program1')}
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.instagram.com/tarptautiniaiprojektai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-500 hover:text-secondary-500 underline transition-colors"
                            >
                                {t('footer.program2')}
                            </a>
                        </p>
                        <p className="text-gray-600">{t('footer.program3')}</p>
                    </div>
                </div>

                <div className="basis-1/4">
                    <h4 className="font-bold text-gray-900 mb-4">{t('footer.getInvolved')}</h4>
                    <p className="mb-4 text-gray-600">{t('footer.getInvolvedDescription')}</p>
                    <a
                        href="mailto:info@tarptautiniaiprojektai.lt"
                        className="text-primary-500 hover:text-secondary-500 underline transition-colors"
                    >
                        {t('footer.email')}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;