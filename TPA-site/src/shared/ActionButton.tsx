import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { SelectedPage } from '@/shared/types';

type Props = {
    children:  React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <ScrollLink
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white cursor-pointer"
            to={SelectedPage.ContactUs}
            smooth={true}
            duration={500}
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        >
            {children}
        </ScrollLink>
    )
}

export default ActionButton