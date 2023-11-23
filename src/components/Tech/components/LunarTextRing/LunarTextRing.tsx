import { motion } from "framer-motion";
import { AnimatedDiv, GridContainer, StyledImg } from "./LunarTextRing.styles";
import ReactCurvedText from "react-curved-text";

export const LunarTextRing = () => {
  return (
    <GridContainer>
      <AnimatedDiv
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 75, ease: "linear" }}
      >
        <ReactCurvedText
          width={400}
          height={400}
          cx={200}
          cy={200}
          rx={200}
          ry={200}
          reversed={false}
          text=" • TECH • FRONTEND (INT) • BACKEND (ADV.) • CLOUD (ADV) • ML / AI (BEG) • TECH • FRONTEND (INT) • BACKEND (ADV) • CLOUD (ADV) • ML / AI (BEG) • TECH • FRONTEND (INT) • BACKEND (ADV) • CLOUD (ADV) "
          textProps={{ style: { fontSize: 14 } }}
        />
      </AnimatedDiv>

      <StyledImg src="test.png" alt="" />
    </GridContainer>
  );
};

// "TECH • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • "
