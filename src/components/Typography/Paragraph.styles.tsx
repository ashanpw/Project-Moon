import styled from "styled-components/macro";

export const StyledP = styled.p<{color?: string; isBold?: boolean}>`
    color: ${p => p.color ?? null};
    font-weight: ${p => p.isBold ? `600`: null};
    margin-bottom: 1rem;
`;