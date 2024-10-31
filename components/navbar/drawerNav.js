import React from "react";
import {
  Box,
  Button,
  HStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { QuestionIcon, Icon } from "@chakra-ui/icons";

import {
  IoFlowerOutline,
  IoAirplaneOutline,
  IoBedOutline,
  IoCarOutline,
  IoCarSportOutline,  
} from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";

function DrawerNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="#004cb8"         
        border="1px solid white"
        onClick={onOpen}
        className={styles.smallnavbutton}
      >
        Explore
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            bg="#003580"
            color="white"
            textShadow="4px 4px 7px yellow"
          >
            Create your account
          </DrawerHeader>

          <DrawerBody>
            <Link href="stay" className={styles.navRow2s}>
              <IoBedOutline className={styles.iconsStyles1} />
              Rooms & Hotels
            </Link>

            <Link href="/flights" className={styles.navRow2s}>
              <IoAirplaneOutline className={styles.iconsStyles1} />
              Flights
            </Link>

            <Link href="/cars" className={styles.navRow2s}>
              <IoCarSportOutline className={styles.iconsStyles1} />
              Car rentals
            </Link>

            <Link href="/contact" className={styles.navRow2s}>
              <IoCarOutline className={styles.iconsStyles1} />
              Contact
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Link href="/signup" className={styles.navRow2s}>
              <Button variant="outline" mr={3}>
                Sign up
              </Button>
            </Link>

            <Link href="/signin" className={styles.navRow2s}>
              <Button colorScheme="blue">Sign in</Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerNav;
