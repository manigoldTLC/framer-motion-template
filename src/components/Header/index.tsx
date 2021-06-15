import React from 'react';
import { useViewportScroll, useTransform } from 'framer-motion';

import { Container } from './styles';
import HeaderItens from '../Header/HeaderItens/index'

const Header: React.FC = () => {
    const { scrollYProgress } = useViewportScroll()

    const headerY = useTransform(
        scrollYProgress,
        [0.188, 0.198],
        ['0%', '-100%']
    );

    return (
        <Container style={{y: headerY}}>
            <HeaderItens />
        </Container>
    );
}

export default Header;
