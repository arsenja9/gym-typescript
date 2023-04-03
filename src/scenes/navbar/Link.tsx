import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import {SelectedPage} from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

interface LinkProps {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void,
}

const Link: React.FC<LinkProps> = ({page, selectedPage, setSelectedPage}) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

export default Link;