/**
 * Overlay for the GoogleLoginButton
 */
import styled from "styled-components";

const LoginOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: fixed;
  width: 100%;
  height: 100%; 
  
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
`;

export default LoginOverlay