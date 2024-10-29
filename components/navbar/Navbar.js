import styles from "./navbar.module.css";
import Link from "next/link";
import { Icon } from "@chakra-ui/icons";
import { useContext } from "react";
import { useRouter } from "next/router";
import {
    IoAirplaneOutline,
    IoBedOutline,
    IoCarOutline,
    IoCarSportOutline,
    IoFlowerOutline,
  } from "react-icons/io5";
  import { RiCommunityLine } from "react-icons/ri";
  import {
    Avatar,
    Box,
    Button,
    Container,
    Flex,
    HStack,
    Image,
    useToast,
  } from "@chakra-ui/react";


function Navbar() {
    return (
        <>
            <Box
                w="100%"
                color="white"
                height="auto"
                bg="#00F5D4"
            >
            <Box
              w="90%"
              color="#262626"
              margin="auto"
              p={4}
              className={styles.smallScreenBox}
            >
              <Box display="flex" justifyContent="space-between">
                <Link href="/">
                  <Box                    
                    className={styles.logosize}
                  >
                    <img
                      src={"/" + "logo-voyago.png"}                      
                      width="240px"
                      height="150px"
                      alt="logo voyago"
                    />
                  </Box>
                </Link>
    
                <Box className={styles.stackBox}>
                  <HStack spacing={["15px", "12px"]}>                  
                    
                    <Button
                      colorScheme="blue"
                    >
                      List your property
                    </Button>
                  </HStack>
                </Box>
                <Box className={styles.smallScreen}>
                  
                </Box>
              </Box>
    
              <Box
                className={styles.stackBox}
              >
                <HStack spacing="25px">
                  <Link href="/" className={styles.navRowActive}>
                    <IoBedOutline className={styles.iconsStyles1} />
                    Hotels
                  </Link>
    
                  <Link href="/flights" className={styles.navRow2}>
                    <IoAirplaneOutline className={styles.iconsStyles} />
                    Flights
                  </Link>    
    
                  <Link href="/cars" className={styles.navRow2}>
                    <IoCarSportOutline className={styles.iconsStyles} />
                    Car rentals
                  </Link>
    
                  <Link href="#" className={styles.navRow2}>
                    <IoFlowerOutline className={styles.iconsStyles} />
                    Attractions
                  </Link>
    
                  <Link href="#/blogs" className={styles.navRow2}>
                    <IoCarOutline className={styles.iconsStyles} />
                    Blog
                  </Link>
                </HStack>
              </Box>
            </Box>
          </Box>
        </>
    );
}


export default Navbar;