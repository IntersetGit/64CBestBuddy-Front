import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader'

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1000);
    }, [])

    return(
        <>
            <Head>
                <title>Flexa - React Insurance & Finance Company Template</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Flexa - React Insurance & Finance Company Template" />
                <meta name="og:title" property="og:title" content="Flexa - React Insurance & Finance Company Template"></meta>
                <meta name="twitter:card" content="Flexa - React Insurance & Finance Company Template"></meta>
                <link rel="canonical" href="https://flexa-react.envytheme.com/"></link>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
        
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;