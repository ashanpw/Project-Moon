import { motion } from "framer-motion";
import styled from "styled-components/macro";

export const GridContainer = styled.div`
    display: grid;
    place-items: center;
    overflow: hidden;
    grid-area: lunar;
`;

export const AnimatedDiv = styled(motion.div)`
grid-area: 1 / 1;
`;



export const StyledImg = styled.img`
    width: 360px;
    margin: auto;
    grid-area: 1 / 1;
`;