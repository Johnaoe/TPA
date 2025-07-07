import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => changeLanguage('lt')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    i18n.language === 'lt'
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-600 hover:text-primary-500'
                }`}
            >
                LT
            </button>
            <span className="text-gray-400">|</span>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    i18n.language === 'en'
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-600 hover:text-primary-500'
                }`}
            >
                EN
            </button>
        </div>
    );
};

export default LanguageSwitcher;