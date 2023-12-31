import '../styles/globals.css';
import Layout from '../components/Layout';
import {useRouter} from 'next/router';
import {AnimatePresence, motion} from 'framer-motion';
import Transition from '../components/Transition';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}) {
    const router = useRouter();
    return (
        <Layout>
            <AnimatePresence mode={'wait'}>
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
                <motion.div key={router.route} className='h-full'>
                    <Transition />
                    <Component {...pageProps} />

                </motion.div>
            </AnimatePresence>
        </Layout>
    )
}

export default MyApp;
