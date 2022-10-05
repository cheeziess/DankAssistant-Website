import { useRouter } from 'next/router'
import Footer from '../components/Footer';
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader = router.pathname === '/dashboard' ? false : true;
  const showUserHeader = router.pathname === '/usersettings' ? false : true;
  const showServerHeader = router.pathname === '/serversettings' ? false : true;
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    {showHeader && showUserHeader && showServerHeader && <Footer />}  
    </SessionProvider>
  )
}

export default MyApp
