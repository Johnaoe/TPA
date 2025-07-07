import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "@/scenes/navbar/Link";
import { SelectedPage } from '@/shared/types'
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import ActionButton from "@/shared/ActionButton.tsx";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/shared/LanguageSwitcher';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const { t } = useTranslation();
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <div className="h-16 w-auto overflow-hidden flex items-center">
                            <img
                                alt="TPA Logo"
                                src={Logo}
                                className="w-28 h-24 object-cover object-center"
                            />
                        </div>
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        page={t('navigation.home')}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}/>
                                    <Link
                                        page={t('navigation.aboutUs')}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}/>
                                    <Link
                                        page={t('navigation.programs')}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}/>
                                    <Link
                                        page={t('navigation.getInvolved')}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}/>
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <LanguageSwitcher/>
                                    <ActionButton setSelectedPage={setSelectedPage}>
        <span className="inline-block min-w-[120px] text-center">
            {t('navigation.becomeMember')}
        </span>
                                    </ActionButton>
                                </div>
                            </div>) : (
                            <div className="flex items-center gap-4">
                                <LanguageSwitcher/>
                                <button
                                    className="rounded-full bg-secondary-500 p-2"
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                >
                                    <Bars3Icon className="h-6 w-6 text-white"/>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* MOBILE MENU MODAL*/}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400"/>
                        </button>
                    </div>
                    {/* MENU ITEMS*/}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            page={t('navigation.home')}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}/>
                        <Link
                            page={t('navigation.aboutUs')}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}/>
                        <Link
                            page={t('navigation.programs')}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}/>
                        <Link
                            page={t('navigation.getInvolved')}
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}/>
                    </div>
                </div>
            )}
        </nav>
    )
}
export default Navbar