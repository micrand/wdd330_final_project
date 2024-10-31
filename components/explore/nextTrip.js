import { Box, Text } from "@chakra-ui/react";
export const Nextrip = () => {
  return (
    <>
      <Box
        width={"88%"}
        margin={"auto"}
        marginTop={"30px"}
      >
        <Text
          textAlign={"start"}
          fontWeight={"bold"}
          fontSize={["12px", "15px", "18px", "22px"]}
          margin={"10px 0 15px 0"}
        >
          Get inspiration for your next trip
        </Text>
        <Box
        gap="10px"
          display={{
            base: "flex",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "flex",
            "2xl": "flex",
          }}
          width={{
            base: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
            "2xl": "100%",
          }}
        >
          <Box
            position={"relative"}
            display={"flex"}
            // width={"33%"}
            width={{
              base: "0%",
              sm: "33%",
              md: "33%",
              lg: "33%",
              xl: "33%",
              "2xl": "33%",
            }}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage='url("https://pix5.agoda.net/hotelimages/36/36/36_16060914140043329990.jpg?s=312x")'
          >
            <Box
              position={"absolute"}
              bottom="2"
              right="0"
              left="5"
              textAlign={"start"}
            >
              <Text
                color={"white"}
                fontSize={["12px", "15px", "18px", "20px"]}
                fontWeight={"bold"}
                textShadow="7px 8px 8px black"
                display={{
                  base: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                  "2xl": "block",
                }}
              >
                48 hours in Paris, France
              </Text>
              <Text
                color={"white"}
                fontWeight={"500"}
                fontSize={"13px"}
                textShadow="7px 8px 8px black"
                display={{
                  base: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                }}
              >
                The perfect 2-day itinerary for visiting The City of Light.
              </Text>
            </Box>
          </Box>
          <Box
            position={"relative"}
            width={{
              base: "100%",
              sm: "33%",
              md: "33%",
              lg: "33%",
              xl: "33%",
              "2xl": "33%",
            }}
            display={"flex"}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage='url("https://pix5.agoda.net/hotelimages/34/34/34_0912031414001753274.jpg?s=312x")'
          >
            <Box
              position={"absolute"}
              bottom="2"
              right="0"
              left="5"
              textAlign={"start"}
            >
              <Text
                color={"white"}
                fontSize={["12px", "15px", "18px", "20px"]}
                fontWeight={"bold"}
                textShadow="7px 8px 8px black"
              >
                The 9 most beautiful cities for autumn travel
              </Text>
              <Text
                color={"white"}
                fontWeight={"500"}
                fontSize={"13px"}
                textShadow="7px 8px 8px black"
              >
                From soaking in Seoul’s hot springs to tucking into sticky
                cinnamon rolls in Montreal.
              </Text>
            </Box>
          </Box>
          <Box
            position={"relative"}            
            width={{
              base: "0%",
              sm: "33%",
              md: "33%",
              lg: "33%",
              xl: "33%",
              "2xl": "33%",
            }}
            marginLeft={"10px"}
            height={"260px"}
            backgroundRepeat={"no-repeat"}
            backgroundPosition={"center"}
            backgroundImage='url("https://pix2.agoda.net/hotelimages/5502207/0/a9e070b68501d7391fa920a4aa91d84b.jpg?s=312x");'
          >
            <Box position={"absolute"} bottom="2" right="0" left="5">
              <Text
                textAlign={"start"}
                color={"white"}
                fontSize={["12px", "15px", "18px", "20px"]}
                fontWeight={"bold"}
                textShadow="7px 8px 8px black"
                display={{
                  base: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                }}
              >
                Top 5 US cities to celebrate Labor Day Weekend
              </Text>
              <Text
                textAlign={"start"}
                color={"white"}
                fontWeight={"500"}
                fontSize={"13px"}
                textShadow="7px 8px 8px black"
                display={{
                  base: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                }}
              >
                Leave summer with no regrets when you head to these cities for
                Labor Day Weekend.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};