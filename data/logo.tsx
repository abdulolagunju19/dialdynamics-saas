import { chakra, HTMLChakraProps, Img, useColorModeValue } from '@chakra-ui/react';

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const logoSrc = useColorModeValue(
    '/static/logos/dialdynamics-dark.png', // Dark mode logo
    '/static/logos/dialdynamics-light.png' // Light mode logo
  );

  return <Img src={logoSrc} alt="DialDynamics Logo" width="20%" />;
};
