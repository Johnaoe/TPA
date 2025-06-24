import { Link as ScrollLink } from 'react-scroll';
import type { SelectedPage } from '@/shared/types';

type Props = {
    page: string;
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({
                  page,
                  selectedPage,
                  setSelectedPage,
              }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <ScrollLink
            to={lowerCasePage}
            smooth={true}
            duration={500}
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
            transition duration-500 hover:text-primary-300 cursor-pointer
            `}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </ScrollLink>
    );
}

export default Link;