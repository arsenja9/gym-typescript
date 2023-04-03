import React from 'react';

interface HTextProps {
    children: React.ReactNode
}

const HText: React.FC<HTextProps> = ({children}) => {
    return (
        <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
            {children}
        </h1>
    );
};

export default HText;