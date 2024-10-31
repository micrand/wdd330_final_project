import { ChakraProvider } from '@chakra-ui/react';
import AuthContextProvider from '../context/AuthContextProvider';
import React ,{ useState , useEffect } from "react"
import '../styles/globals.css'
import PreloaderScreen from '../components/preloader/Preloader';
import GuestContextProvider from "../context/GuestContext";
import Footer from '../components/Footer';


function VoyagoApp({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
<>
    {loading?
      (<ChakraProvider>
      <AuthContextProvider>
        <GuestContextProvider>
        <Component {...pageProps} />      
          <Footer />
        </GuestContextProvider>
      </AuthContextProvider>
    </ChakraProvider>):( <PreloaderScreen /> )
    }
  </>
  )
}

export default VoyagoApp;
