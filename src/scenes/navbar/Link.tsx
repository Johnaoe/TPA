import { Link as ScrollLink } from 'react-scroll';
import { SelectedPage } from '@/shared/types';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
    // Map display text to section IDs
    const getPageId = (pageName: string): SelectedPage => {
        // English mappings
        if (pageName === "Home") return SelectedPage.Home;
        if (pageName === "About Us") return SelectedPage.AboutUs;
        if (pageName === "Programs") return SelectedPage.Programs;
        if (pageName === "Get Involved") return SelectedPage.GetInvolved;

        // Lithuanian mappings
        if (pageName === "Pradžia") return SelectedPage.Home;
        if (pageName === "Apie mus") return SelectedPage.AboutUs;
        if (pageName === "Programos") return SelectedPage.Programs;
        if (pageName === "Prisijunk") return SelectedPage.GetInvolved;

        // Fallback - convert to lowercase and remove spaces
        return page.toLowerCase().replace(/ /g, "") as SelectedPage;
    };

    const targetSection = getPageId(page);

    return (
        <ScrollLink
            to={targetSection}
            smooth={true}
            duration={500}
            className={`${selectedPage === targetSection ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300 cursor-pointer
            `}
            onClick={() => setSelectedPage(targetSection)}
        >
            {page}
        </ScrollLink>
    );
}

export default Link;