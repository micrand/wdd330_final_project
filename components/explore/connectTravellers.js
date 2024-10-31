import React from "react";
import { Img, Text, SimpleGrid, Stack, Box } from "@chakra-ui/react";

function ConnectWithtravellers() {
  const data = [
    {
      caption: "Flying Blue 25% discounts",
      property: "Flying Blue is the Air France and KLM frequent flyer programme",
      image:
        "https://pix4.agoda.net/hotelimages/13/13/13_15072020190032641184.jpg?s=312x",
      numbers: "50,121 travellers",
    },
    {
      caption: "Flying Club 10% discounts",
      property: " Flying Club also allows you to rack up flights for Delta Airlines, Air France or Hawaiian Airlines",
      image:
        "https://pix3.agoda.net/hotelimages/13/0/5f8b6d43a6a287d37bfe1626ab22b0b1.jpg?s=312x",
      numbers: "125,387 travellers",
    },
    {
      caption: "Miles & More by Lufthansa - 25% discounts",
      property: "One of the largest frequent flyer programmes in Europe",
      image:
        "http://pix3.agoda.net/hotelimages/15/0/59a863c3a6e93b759faf2beea910d516.jpg?s=312x",
      numbers: "81,741 travellers",
    },
    {
      caption: "Executive Club by British Airways",
      property: "A recently-announced shakeup to its Executive Club loyalty scheme",
      image:
        "http://pix5.agoda.net/hotelimages/17/17/17_16051513410042341853.jpg?s=312x",
      numbers: "17,520 travellers",
    },
  ];

  return (
    <SimpleGrid minChildWidth="130px" spacing="20px">
      {data &&
        data.map((elem ,i) => (
          <Stack key={i}>
            <Box>
              <Img src={elem.image} />
              <Text  fontWeight={"bold"}          
                marginBottom={"8px"}
                marginTop={"15px"} > {elem.caption} </Text>
              <Text> {elem.property} </Text>
              <Text> {elem.numbers} </Text>
            </Box>
          </Stack>
        ))}
    </SimpleGrid>
  );
}

export default ConnectWithtravellers;