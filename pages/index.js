import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Avatar from '../components/Avatar';
import ParticlesContainer from '../components/ParticlesContainer';

const Home = () => {
    return (
        <div className='bg-primary/60 h-full '>
            <div className='xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge ' />

            <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
                <div
                    className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
                    <motion.h1
                        className='h1'
                        variants={fadeIn('down', 0.2)}
                        initial={'hidden'}
                        animate={'show'}
                        exit={"hidden"}
                    >
                        Your Design. <br/> <span className="text-accent">My Code.</span>
                    </motion.h1>
                    <motion.p
                        className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
                        variants={fadeIn('down', 0.3)}
                        initial={'hidden'}
                        animate={'show'}
                        exit={"hidden"}
                    >
                        Specializing in responsive and intuitive web interfaces. Let's transform your design dreams into frontend reality.
                    </motion.p>
                    {/*<div className='flex justify-center xl:hidden relative'>*/}
                    {/*    <ProjectsBtn/>*/}
                    {/*</div>*/}
                    {/*<motion.div*/}
                    {/*    className="hidden xl:flex"*/}
                    {/*    variants={fadeIn('down', 0.4)}*/}
                    {/*    initial={'hidden'}*/}
                    {/*    animate={'show'}*/}
                    {/*    exit={"hidden"}*/}
                    {/*>*/}
                    {/*    <ProjectsBtn/>*/}
                    {/*</motion.div>*/}
                </div>
            </div>
            <div className="w-[1200px] h-full absolute right-0 bottom-0">
                <ParticlesContainer />
                <motion.div
                    className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
                    variants={fadeIn('up', 0.4)}
                    initial={'hidden'}
                    animate={'show'}
                    exit={"hidden"}
                    transition={{duration: 1, ease: 'easeInOut'}}
                >
                    <Avatar />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;
