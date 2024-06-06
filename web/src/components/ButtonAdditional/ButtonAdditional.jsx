import { Box, Link } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const ButtonAdditional = () => {
  return (
    <Box className="section-additional" display={"block"} margin={"0 auto"}>
      <Link
        className="button"
        href=""
        fontWeight={"bold"}
        fontSize={"1rem"}
        lineHeight={"24px"}
        borderColor={"#007AFE"}
        color={"#007AFE"}
        padding={"7px 16px"}
        borderRadius={"8px"}
        display={"inline-flex"}
        border={"1px solid"}
        gap={"7px"}
        alignItems={"center"}
      >
        Jelajah ke lebih banyak event
        <Box>
          <FaArrowRight />
        </Box>
      </Link>
    </Box>
  );
};

export default ButtonAdditional;
