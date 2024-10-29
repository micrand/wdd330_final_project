import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';

function VoyagoApp({ Component, pageProps }) {
    return (
        <>
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
        </>
    )
}

export default VoyagoApp;