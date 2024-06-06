import { Box, Flex, Grid, Heading, Link, Image } from "@chakra-ui/react";

const SectionTopSelling = () => {
  return (
    <Box
      className="section top-selling"
      backgroundColor={"#152955"}
      padding={"30px"}
    >
      <Box
        className="section-wrapper"
        maxWidth={"100%"}
        display={"grid"}
        gridTemplateRows={"1fr"}
        gridRowGap={"20px"}
        position={"relative"}
        margin={"0 auto"}
      >
        <Flex
          className="section-title"
          justifyContent={"space-between"}
          alignItems={"center"}
          columnGap={"12px"}
        >
          <Flex
            className="label-title"
            alignItems={"center"}
            flexWrap={"wrap"}
            columnGap={"6px"}
          >
            <Heading color={"#fff"} fontSize={"24px"}>
              Paling Laku Keras!
            </Heading>
          </Flex>
        </Flex>
        <Grid
          className="section-content"
          position={"relative"}
          display={"grid"}
        >
          <Box>
            <Box
              className="top-selling-list"
              display={"inline-block"}
              overflowX={"scroll"}
              overflowY={"hidden"}
              whiteSpace={"nowrap"}
            >
              <Flex
                display={"inline-flex"}
                alignItems={"center"}
                marginRight={"16px"}
              >
                <Box
                  className="number"
                  maxHeight={"145px"}
                  lineHeight={"100%"}
                  fontWeight={"700"}
                  color={"#fff"}
                  fontSize={"10rem"}
                >
                  1
                </Box>
                <Box
                  className="thumbnail"
                  borderRadius={"8px"}
                  overflow={"hidden"}
                  marginLeft={"8px"}
                  position={"relative"}
                  width={"280px"}
                  height={"auto"}
                >
                  <Link target="_blank" href="" />
                  <Image
                    objectFit={"cover"}
                    src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230816023518.jpg"
                  />
                </Box>
              </Flex>
              <Flex
                display={"inline-flex"}
                alignItems={"center"}
                marginRight={"16px"}
              >
                <Box
                  className="number"
                  maxHeight={"145px"}
                  lineHeight={"100%"}
                  fontWeight={"700"}
                  color={"#fff"}
                  fontSize={"10rem"}
                >
                  2
                </Box>
                <Box
                  className="thumbnail"
                  borderRadius={"8px"}
                  overflow={"hidden"}
                  marginLeft={"8px"}
                  position={"relative"}
                  width={"280px"}
                  height={"auto"}
                >
                  <Link target="_blank" href="" />
                  <Image
                    objectFit={"cover"}
                    src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20231017065915.png"
                  />
                </Box>
              </Flex>
              <Flex
                display={"inline-flex"}
                alignItems={"center"}
                marginRight={"16px"}
              >
                <Box
                  className="number"
                  maxHeight={"145px"}
                  lineHeight={"100%"}
                  fontWeight={"700"}
                  color={"#fff"}
                  fontSize={"10rem"}
                >
                  3
                </Box>
                <Box
                  className="thumbnail"
                  borderRadius={"8px"}
                  overflow={"hidden"}
                  marginLeft={"8px"}
                  position={"relative"}
                  width={"280px"}
                  height={"auto"}
                >
                  <Link target="_blank" href="" />
                  <Image
                    objectFit={"cover"}
                    src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230920012306.jpg"
                  />
                </Box>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default SectionTopSelling;