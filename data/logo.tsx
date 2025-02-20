import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react';

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const fillColor = useColorModeValue('#1A202C', '#F7FAFC'); // Light mode: Dark text, Dark mode: Light text
  const secondaryColor = useColorModeValue('#375793', '#A0C1E8'); // Adjust contrast for both modes

  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 172"
      {...props}
    >
      {/* Main Logo Shape */}
      <path
        d="M102.555 43.984C108.969 49.272 113.593 55.72 115 64c.979 10.316-.243 19.04-5.813 27.875C102.056 98.803 94.983 101.863 85 102c-6.944-.784-13.193-3.718-17.875-8.938C65.049 90.073 64.09 88.596 64 85c.988-4.4 2.161-7.505 6-10 4.976-.654 8.762-.825 13 2v2c4.19.398 4.19.398 7.813-1.375C93.216 74.335 93.39 72.055 93 68c-2.474-4.853-4.817-7.272-10-9-5.965-.7-10.96-.55-16 3-6.008 5.57-10.072 12.537-10.563 20.813.483 9.158 4.167 16.344 10.688 22.687 5.22 4.406 10.326 6.741 16.875 8.5l3 1c14.466.912 24.109-1.583 36-10l1-1c3.054-.442 5.95-.477 9 0 2.756 2.182 4.436 3.872 6 7 .134 3.673.167 6.499-1 10h-2l-1 3c-12.656 10.193-29.818 15.427-46 14-13.415-1.664-25.506-6.255-36-15v-2h-2c-10.556-10.746-15.889-23.405-16.375-38.25C34.827 70.84 38.429 60.306 46 51h2l.715-1.777c3.618-6.257 11.611-9.817 18.328-11.735.646-.16 1.292-.322 1.957-.488l2.625-.688c11.093-1.46 21.75 1.302 30.93 7.672Z"
        fill={secondaryColor} // Adjusted for contrast
      />
      
      {/* DialDynamics Text */}
      <text
        x="140" // Adjust positioning if needed
        y="110"
        fontSize="70"
        fontWeight="600"
        fill={fillColor} // Uses dynamic color to ensure visibility
        fontFamily="'Poppins', 'Inter', 'Montserrat', sans-serif"
      >
        DialDynamics
      </text>
    </chakra.svg>
  );
};
