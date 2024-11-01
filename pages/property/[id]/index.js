import {
    Box,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Flex,
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
  } from "@chakra-ui/react";
  import { ChevronRightIcon } from "@chakra-ui/icons";
  import { HiStar, HiShare } from "react-icons/hi";
  import { AiFillLike, AiOutlineHeart } from "react-icons/ai";
  import { BsTags } from "react-icons/bs";
  import { VscLocation } from "react-icons/vsc";
  import React, { useEffect, useState } from "react";
  import SearchForm from "../../../components/SearchForm";
  import { useRouter } from "next/router";
import Link from "next/link";
import Navbar from "../../../components/navbar/HeaderNavbar";
import PreloaderScreen from "../../../components/preloader/Preloader";
import { PropertyModel } from "../../../stores/property.model";
import { connect } from "../../../db.connect";
  
  const HotelDetails = ({ data }) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

    const { query } = useRouter();
    const { id } = query;
    console.log(id)
  
    return (
      <Box>
        {/* ********************************************************************************************* */}
{ loading?
  <>
       <Navbar />
        <Accordion allowToggle>
          <AccordionItem bg="#fff0e0" border="none" color="black" p="0.5rem">
            <Text textAlign="left" fontSize="lg" fontWeight="700">
              <AccordionButton ml="-25rem" _hover={{ bg: "none" }}>
                <Box as="span" flex="1">
                  Coronavirus (COVID-19) Support
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Text>
            <AccordionPanel w="80%" m="auto">
              Get the travel advice you need. Read more about possible travel
              restrictions before you go.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
  
        <Box w="80%" m="auto" mt="10px">
          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
  
            <BreadcrumbItem>
              <BreadcrumbLink href="#">List of properties</BreadcrumbLink>
            </BreadcrumbItem>
  
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">HotelDetails</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
  
        {/* ********************************************************************************************* */}
  
        <Box w="80%" m="auto" mb="1rem">
          <Flex
            w="100%"
            mt="2rem"
            gap="1rem"
            flexDirection={["column", "column", "row", "row"]}
          >
            <Box>
              {" "}
              <Button w="100%" bg="#ebf3ff" mb="0.7rem">
                <BsTags />
                We Price Match
              </Button>{" "}
              <SearchForm />
            </Box>
            <Box w="95%">
              <Flex
                gap="5px"
                color="#0071c2"
                flexDirection={["column", "column", "row", "row"]}
              >
                <Button
                  w="100%"
                  _hover={{ color: "black" }}
                  bg="#ebf3ff"
                  mb="0.7rem"
                >
                  Info & prices
                </Button>
                <Button
                  w="100%"
                  _hover={{ color: "black" }}
                  bg="#ebf3ff"
                  mb="0.7rem"
                >
                  Facilities
                </Button>
                <Button
                  w="100%"
                  _hover={{ color: "black" }}
                  bg="#ebf3ff"
                  mb="0.7rem"
                >
                  House rules
                </Button>
                <Button
                  w="100%"
                  _hover={{ color: "black" }}
                  bg="#ebf3ff"
                  mb="0.7rem"
                >{`Guest Reviews ${"(rating)"}`}</Button>
              </Flex>
  
              <Flex
                fontWeight="600"
                alignItems="center"
                flexDirection={["column", "column", "row", "row"]}
              >
                <Text bg="#7f7f7f" p="3px" color="white">
                  Hotel
                </Text>
                <Flex w="70%" alignItems="center" color="#febb02" ml="10px">
                  <HiStar fontSize="22px" />
                  <HiStar fontSize="22px" />
                  <HiStar fontSize="22px" cursor="pointer" />{" "}
                  <Box
                    ml="10px"
                    p="2px"
                    color="white"
                    border="1px solid"
                    bg="#febb02"
                  >
                    {" "}
                    <AiFillLike cursor="pointer" />
                  </Box>
                  <Text
                    bg="gray.100"
                    color="black"
                    ml="10px"
                    p="3px"
                    cursor="pointer"
                  >
                    Great for two travellers
                  </Text>
                </Flex>
  
                <Flex
                  flexDirection={["column", "column", "row", "row"]}
                  fontSize="27px"
                  gap="10px"
                  justifyContent="space-evenly"
                  alignItems="center"
                  color="#0071c2"
                >
                  <AiOutlineHeart cursor="pointer" /> <HiShare cursor="pointer" />
                  <Link style={{textDecoration: "none"}} href={`/property/${id}/info`}>
                  <Button bg="#0071c2" color="white" _hover={{ bg: "#014778" }}>
                    Reserve
                  </Button>
                  </Link>
                </Flex>
              </Flex>
  
              <Text fontSize="2xl" fontWeight="700" mt="10px">
                {data.title}
              </Text>
  
              <Box>
                <Image w="100%" h="80%" src={data.imagescr} />
              </Box>
              <Flex cursor="pointer" mt="1.5rem" flexDirection={["column","column","row","row"]} justifyContent="space-evenly" >
  <Image  w={{lg:"30%" ,sm:"100%"}} src={data.extraimg1} />
  <Image  w={{lg:"30%" ,sm:"100%"}} src={data.extraimg2} />
</Flex>
            </Box>
          </Flex>
        </Box>
  
        <hr style={{ marginBottom: "1rem", borderColor: "black" }} />
  
        {/* ********************************************************************************************* */}
        <Flex
          flexDirection={["column", "column", "row", "row"]}
          w="80%"
          m="auto"
          mt="1rem"
          mb="2rem"
          justifyContent="space-between"
          gap="2rem"
        >
          <Box w="80%">
            <Text mb="1.3rem">{data.TravelText2}</Text>
            <Text mb="1.3rem">
              {
                "Bulgaria Hotel is perfectly located for both business and leisure guests in Burgas. Featuring a complete list of amenities, guests will find their stay at the property a comfortable one. 24-hour room service, casino, facilities for disabled guests, Wi-Fi in public areas, car park are on the list of things guests can enjoy. All rooms are designed and decorated to make guests feel right at home, and some rooms come with television LCD/plasma screen, bathroom phone, fireplace, towels, closet. Entertain the hotel's recreational facilities, including hot tub, fitness center, sauna, outdoor pool, indoor pool. A welcoming atmosphere and excellent service are what you can expect during your stay at Bulgaria Hotel."
              }
            </Text>
            <Text mb="1.3rem">
              {
                "Holiday Inn Express London Greenwich is a popular choice amongst travelers in London, whether exploring or just passing through. The hotel has everything you need for a comfortable stay. Service-minded staff will welcome and guide you at the Holiday Inn Express London Greenwich. Guestrooms are fitted with all the amenities you need for a good night's sleep. In some of the rooms, guests can find television LCD/plasma screen, non smoking rooms, air conditioning, heating, desk. The hotel offers various recreational opportunities. Holiday Inn Express London Greenwich combines warm hospitality with a lovely ambiance to make your stay in London unforgettable."
              }
            </Text>
            <Text mb="1.3rem">
              {
                "Sheraton Grand Taipei Hotel is perfectly located for both business and leisure guests in Taipei. The property features a wide range of facilities to make your stay a pleasant experience. 24-hour room service, free Wi-Fi in all rooms, daily housekeeping, gift/souvenir shop, grocery deliveries are just some of the facilities on offer. All rooms are designed and decorated to make guests feel right at home, and some rooms come with television LCD/plasma screen, bathroom phone, carpeting, complimentary instant coffee, complimentary tea. The hotel's peaceful atmosphere extends to its recreational facilities which include fitness center, sauna, outdoor pool, spa, massage. Sheraton Grand Taipei Hotel is an excellent choice from which to explore Taipei or to simply relax and rejuvenate."
              }
            </Text>
            <Text mb="1.3rem">
              {
                "Ideally located in the prime touristic area of Seinajoki, Cumulus Seinäjoki promises a relaxing and wonderful visit. The property features a wide range of facilities to make your stay a pleasant experience. 24-hour front desk, facilities for disabled guests, luggage storage, room service, meeting facilities are on the list of things guests can enjoy. Comfortable guestrooms ensure a good night's sleep with some rooms featuring facilities such as air conditioning, heating, desk, mini bar, telephone. The hotel offers various recreational opportunities. A welcoming atmosphere and excellent service are what you can expect during your stay at Cumulus Seinäjoki."
              }
            </Text>
  
            <Text fontSize="sm" fontWeight="700">
              {
                "Ideally located in the prime touristic area of Hildesheim City Center, Van der Valk Hotel Hildesheim promises a relaxing and wonderful visit. The hotel offers guests a range of services and amenities designed to provide comfort and convenience. To be found at the hotel are free Wi-Fi in all rooms, 24-hour front desk, facilities for disabled guests, room service, meeting facilities. Designed for comfort, selected guestrooms offer air conditioning, heating, desk, mini bar, iPod docking station to ensure a restful night. Take a break from a long day and make use of fitness center, sauna, indoor pool, spa, massage. Convenience and comfort makes Van der Valk Hotel Hildesheim the perfect choice for your stay in Hildesheim."
              }
            </Text>
            <Text fontSize="md" fontWeight="700">
              {"Popular facilities"}
            </Text>
            <Flex mt="1rem">
              <Text fontSize="sm" fontWeight="700">
                {"ATM and Currency Exchange:"}
              </Text>
              Currency exchange service at
              this property.{" "}
            </Flex>
          </Box>
          <Box lineHeight="30px" p="1rem" h="80%" bg="#ebf3ff">
            <Text fontSize="md" fontWeight="700">
              {"Property highlights"}
            </Text>
            <Flex mt="5px">
              <VscLocation fontSize="1.5rem" />
              {"Top location: Highly rated by recent guests (8.0)"}
            </Flex>
            <Text fontSize="md" fontWeight="700">
              {"Breakfast info"}
            </Text>
            <Text mt="5px">{"Buffer"}</Text>
  
            <Box lineHeight="4rem">
            <Link style={{textDecoration: "none"}} href={`/property/${id}/info`}>
              <Button
                w="100%"
                bg="#0071c2"
                _hover={{ bg: "#014778" }}
                color="white"
              >
                Reserve
              </Button>
              </Link>
              <Button w="100%" color="#0071c2" border="1px solid #0071c2">
                Save the property
              </Button>
            </Box>
          </Box>
        </Flex>
        <hr style={{ marginBottom: "1rem", borderColor: "black" }} />)  </>:( <PreloaderScreen /> )
       
        }
      </Box>
    );
  };
  
  export const getServerSideProps = async (context) => {
    const { id } = context.query;
 
    try {
      await connect();
    } catch (e) {
      console.log(e);
    }

    const property = await PropertyModel.findOne({ _id: id });

    return {
      props: {
        data: JSON.parse(JSON.stringify(property)),
      },
    };
  };
  
  export default HotelDetails;
  