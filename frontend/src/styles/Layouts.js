import styled from "styled-components";

export const MainLayout = styled.div`
    padding: 2rem;
    height: 100%;
    display: flex;
    gap: 2rem;
    background-color: #375E97; /* Changed background color */
`;

export const InnerLayout = styled.div`
    padding: 2rem;
    width: 100%;
    background-color: #CEE6F2; /* Changed background color */
    border-radius: 20px; /* Added border radius */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Added box shadow for depth */
`;
