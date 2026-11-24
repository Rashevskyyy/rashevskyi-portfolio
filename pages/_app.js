import '../styles/globals.css';
import Layout from '../components/Layout';
import {useRouter} from 'next/router';
import {AnimatePresence, motion} from 'framer-motion';
import Transition from '../components/Transition';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';

function MyApp({Component, pageProps}) {
    const router = useRouter();
    return (
        <Layout>
            <Head>
                <title>Rashevskyi Oleksii</title>
                <meta name="description" content="Oleksii Rashevskyi, slot game and frontend developer. Slot games in PixiJS, playable ads and product UI." />
            </Head>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <AnimatePresence mode={'wait'}>
                <motion.div key={router.route} className='h-full'>
                    <Transition />
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </Layout>
    )
}

export default MyApp;
