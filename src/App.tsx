import Navbar from '@/scenes/navbar';
import Home from '@/scenes/home';
import AboutUs from '@/scenes/aboutUs';
import Projects from '@/scenes/projects';
import GetInvolved from '@/scenes/getInvolved';
import Footer from '@/scenes/footer';
import { useEffect, useState } from 'react';
import { SelectedPage } from '@/shared/types'

function App() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='App bg-gray-20'>
            <Navbar
                isTopOfPage={isTopOfPage}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Home setSelectedPage={setSelectedPage}/>
            <Projects setSelectedPage={setSelectedPage}/>
            <AboutUs setSelectedPage={setSelectedPage}/>
            <GetInvolved setSelectedPage={setSelectedPage}/>
            <Footer />
        </div>
    )
}


export default App
