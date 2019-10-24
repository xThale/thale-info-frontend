import styled from "styled-components";

/**
 * Black overlay over the whole page
 */
export const BlackPageOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  top: 0;
  left: 0;
  
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%; 
  
  background-color: rgba(0,0,0,0.5);
`;