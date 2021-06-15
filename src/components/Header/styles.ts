import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.header)`
    width: 100%;
    min-width: 1024px;
    max-height: 44px;
    height: 3rem;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: saturate(180%) blur(20px);

    position: fixed;
    top: 0;
    z-index: 99999;
    display: flex;
    justify-content: space-between;
`;
