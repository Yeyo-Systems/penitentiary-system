import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const LoaderStyled = styled.div<{ primaryColor: string }>`
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid transparent;
  border-radius: 50%;
  border-right-color: ${(props) => props.primaryColor};
  animation: ${rotate} 1s infinite linear;

  &::before,
  &::after {
    content: '';
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: ${rotate} 2s infinite;
  }

  &::after {
    margin: 8px;
    animation-duration: 3s;
  }
`;

export const Loader = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  return <LoaderStyled primaryColor={primaryColor} />;
};
