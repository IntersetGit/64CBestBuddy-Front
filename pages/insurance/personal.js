import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Decrypt } from '../../utils/SecretCode';
import InsurancePersonal from '../../routes/insurance/personal'
import Footer from '../../components/_App/Footer';
import MainBannerHeader from '../../components/HomeThree/MainBannerHeader';

export default () => {
    const router = useRouter()
    const [headPage, setHeadPage] = useState(null);
    const { id, code, step } = router.query
    console.log('router.query :>> ', router.query);
    useEffect(() => {
        try {
            if (code) {
                console.log('data:>> ', Decrypt(code));


            } else if (id) {

            }
        } catch (error) {

        }
    }, [router.query])

    return (
        <>
            <Head>
                <title>{headPage}</title>
            </Head>

            <MainBannerHeader src={`${process.env.NEXT_PUBLIC_SERVICE}/`} alt={headPage} />

            {/* เนื้อหา */}
            <InsurancePersonal />

            <Footer />
        </>
    )
}

