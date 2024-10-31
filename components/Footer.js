import React from 'react'
import { Box, Button, Grid, Image, Input, Text, Center } from "@chakra-ui/react"

const Footer = () => {
    return (
        <Box  pb="2rem" mt={4} >        
            <Box bg='#3a0ca3' w='100%' p="2rem" color='white'>
                <Box w='60%' m="auto" p={4} >
                    <Text fontSize='3xl' lineHeight="33px" textAlign="center" color="white" fontWeight="300">Stay tuned, be informed !</Text>
                    <Text fontSize='1xl' textAlign="center" mb="10px" color="gray.300">Subscribe and you will receive best deals from us on time</Text>
                    <Grid templateColumns={{ sm:"repeat(1, 1fr)" ,lg:"repeat(2, 1fr)" }} m="auto" p={4} gap="10px" >
                        <Input color="black" borderRadius="3px" ml={{ sm: "0px",lg:"10rem" }} variant='outline' bg="white" placeholder='Your email' />
                        <Button borderRadius="3px" m={{sm:"auto" , md:"auto" }}  ml={{lg:"10rem" }} colorScheme='messenger'>Subscribe</Button>
                    </Grid>
                </Box>
            </Box>
            
            <Box bg='#00BBF9' w='100%' color='white'>               
                <Box w='100%' m="auto" p={2} borderTop="1px solid" justify="center">
                    <Grid templateColumns={{ base: "repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)", lg: "repeat(5, 1fr)" }} cursor="pointer" fontWeight="600" w="80%" fontSize="14px" ml="4rem">                            
                        <Text>Top destinations</Text>
                        <Text>Top countries & regions</Text>
                        <Text>Properties owners</Text>
                        <Text>Business travel</Text>
                        <Text>Other informations</Text>
                    </Grid>
                </Box>
            </Box>
        
            <Box color="#0071c2" w='80%' m="auto" mt="15px" mb="15px">
                <Grid fontSize="14px" templateColumns={{sm:"repeat(1, 1fr)",md:"repeat(3, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>                    
                    <Box cursor="pointer">
                        <Text>Hotels in New york</Text>
                        <Text>Hotels in Chicago</Text>
                        <Text>Hotels in Paris</Text>
                        <Text>Hotels in Dubai</Text>
                        <Text>Hotels in Sydney</Text>
                        <Text>Hotels in Qatar</Text>
                        <Text>Discover more hotels</Text>
                    </Box>
                    <Box cursor="pointer">
                        <Text>Unique places to stay</Text>                        
                        <Text>Discover stays</Text>
                        <Text>Review hotels</Text>
                        <Text>Travel guides</Text>
                        <Text>Travel Communities</Text>
                        <Text>Seasonal and holiday deals</Text>
                        <Text>Promote with us</Text>
                    </Box>
                    <Box cursor="pointer">
                        <Text>Car rentals</Text>
                        <Text>Flight finder</Text>
                        <Text>Reservations</Text>
                        <Text>Place of interests</Text>
                        <Text>Travel agents</Text>
                        <Text>Booking reservations</Text>
                        <Text>Flight reservations</Text>
                    </Box>
                    <Box cursor="pointer">
                    <Text>About Voyago</Text>
                        <Text>Vision and purpose</Text>                        
                        <Text>Customer Service help</Text>
                        <Text>Resource center</Text>
                        <Text>Careers</Text>
                        <Text>Terms and conditions</Text>
                        <Text>Privacy policy</Text>
                    </Box>
                </Grid>
            </Box> 
        </Box>
    )
}

export default Footer;