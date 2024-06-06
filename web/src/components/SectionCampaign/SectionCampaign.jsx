import { Box, Image } from "@chakra-ui/react";

const SectionCampaign = () => {
  return (
    <Box className="section-campaign">
      <Box
        className="tns-outer"
        width={"100%"}
        margin={"0 auto"}
        borderRadius={"16px"}
        overflow={"hidden"}
        display={"grid"}
        height={"fit-content"}
        maxWidth={"1244px"}
        gridTemplateRows={"1fr"}
        position={"relative"}
      >
        <Box className="tns-ovh" overflow={"hidden"}>
          <Image src="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20230916/1694851228_wsZ3Xw.jpg" />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionCampaign;
