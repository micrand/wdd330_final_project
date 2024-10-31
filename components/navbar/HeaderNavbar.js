import styles from "./navbar.module.css";
import Link from "next/link";
import { Icon } from "@chakra-ui/icons";
import jwt from "jsonwebtoken";

import {
  IoAirplaneOutline,
  IoBedOutline,
  IoCarOutline,
  IoCarSportOutline,
  IoFlowerOutline,
  IoMailOutline,
  IoMegaphoneOutline,
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
import DrawerNav from "./drawerNav";
import { AuthContext } from "../../context/AuthContextProvider";
import { useContext } from "react";
import { useRouter } from "next/router";

let TSEC = "hello";

function HeaderNavbar() {
  const toast = useToast();
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter();  

  const SignoutReq = () => {
    setAuth({ ...auth, isAuth: "" });
    router.push("/");
  };

  const checkToken = () => {
    if (!auth.isAuth) {
      return router.push("/signin");
    } else {
      const check = jwt.verify(
        auth.isAuth.token,
        TSEC,
        (err, verified) => {
          if (err) {
            console.log(err);
            toast({
              title: "Sessioned timed out!",
              description: "Please relogin.",
              status: "error",
              duration: 3400,
              isClosable: true,
              position: "top",
            });
            return router.push("/signin");
          } else {
            if (verified.role === "dealer") {
              console.log(verified.role);
              return router.push("/listproperty");
            } else {
              router.push("/");
              toast({
                title: "You're not a dealer.",
                description: "Please login as a dealer",
                status: "warning",
                duration: 3400,
                isClosable: true,
                position: "top",
              });
            }
          }
        }
      );
    }
  };

  return (
    <>
      <Box        
        w="100%"
        color="white"
        height="auto"
        bg={styles.bgSecondaryColor}
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
                  src={"/" + "voyago-logo.png"}                  
                  width="200px"
                  height="50px"
                  alt="Voyago Smart Travel all other the world"
                />
              </Box>
            </Link>

            <Box className={styles.stackBox}>
              <HStack spacing={["15px", "12px"]}>
                <Button
                  onClick={() => checkToken()}
                  colorScheme="blue"
                >
                  List your property
                </Button>

                {auth.isAuth ? (
                  <>
                    <Button
                      onClick={() => SignoutReq()}
                      className={styles.authLink}
                    >
                      Sign out
                    </Button>
                    <Avatar bg="yellow.400" name={auth.isReg.name} />
                  </>
                ) : (
                  <>
                    <Link href="/signup" className={styles.authLink}>
                      <Button className={styles.authLink}>Register</Button>
                    </Link>

                    <Link href="/signin" className={styles.authLink}>
                      <Button className={styles.authLink}>Sign in</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </Box>
            <Box className={styles.smallScreen}>
              <DrawerNav />
            </Box>
          </Box>

          <Box            
            className={styles.stackBox}
          >
            <HStack spacing="25px">
              <Link href="/" className={styles.menuItemStyle}>
                <IoBedOutline className={styles.iconsStyles1} />
                Rooms & Hotels
              </Link>

              <Link href="/flights" className={styles.menuItemStyle}>
                <IoAirplaneOutline className={styles.iconsStyles} />
                Flights
              </Link>

              <Link href="/cars" className={styles.menuItemStyle}>
                <IoCarSportOutline className={styles.iconsStyles} />
                Cars
              </Link>

              <Link href="#" className={styles.menuItemStyle}>
                <IoFlowerOutline className={styles.iconsStyles} />
                Attractions
              </Link>

              <Link href="#" className={styles.menuItemStyle}>
                <IoMegaphoneOutline className={styles.iconsStyles} />
                Guides
              </Link>

              <Link href="#" className={styles.menuItemStyle}>
                <IoMailOutline className={styles.iconsStyles} />
                Contact us
              </Link>
              
            </HStack>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HeaderNavbar;
