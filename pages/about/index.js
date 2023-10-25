import {FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact,} from 'react-icons/fa';
import {
    SiAdobephotoshop,
    SiChai, SiChakraui, SiClickup, SiConfluence,
    SiFigma,
    SiGit, SiJest, SiJira, SiMocha, SiMongodb, SiMui, SiMysql, SiNestjs,
    SiNextdotjs, SiPostgresql, SiPostman,
    SiRedux, SiReduxsaga, SiStyledcomponents, SiTrello,
    SiTypescript, SiVite, SiWebpack, SiWebstorm
} from 'react-icons/si';
import {useState} from 'react';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import Avatar from '../../components/Avatar';
import CountUp from 'react-countup';
import {GrGithub} from "react-icons/gr";
import {FaBitbucket, FaGitlab} from "react-icons/fa6";
import {VscCode} from "react-icons/vsc";

const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'FrontEnd',
                icons: [
                    { component: <FaHtml5/>, description: 'HTML5' },
                    { component: <FaCss3/>, description: 'CSS3' },
                    { component: <FaJs/>, description: 'JavaScript' },
                    { component: <FaReact/>, description: 'ReactJS' },
                    { component: <SiNextdotjs/>, description: 'NextJS' },
                    { component: <SiTypescript/>, description: 'TypeScript' },
                    { component: <SiRedux/>, description: 'Redux' },
                    { component: <SiReduxsaga/>, description: 'ReduxSaga' },
                    { component: <SiStyledcomponents/>, description: 'Styled Components' },
                    { component: <SiWebpack/>, description: 'Webpack' },
                    { component: <SiMui/>, description: 'Material UI' },
                    { component: <SiChakraui/>, description: 'Chakra UI' },
                    { component: <SiVite/>, description: 'Vite' },
                ],
            },
            {
                title: 'Backend',
                icons: [
                    { component: <FaNodeJs/>, description: 'NodeJS' },
                    { component: <SiNestjs/>, description: 'NestJS' },
                ],
            },
            {
                title: 'Testing tools',
                icons: [
                    { component: <SiJest/>, description: 'Jest' },
                    { component: <SiMocha/>, description: 'Mocha' },
                    { component: <SiChai/>, description: 'Chai' },

                ],
            },
            {
                title: 'Databases',
                icons: [
                    { component: <SiMysql/>, description: 'MySQL' },
                    { component: <SiPostgresql/>, description: 'PostgreSQL' },
                    { component: <SiMongodb/>, description: 'MongoDB' },
                ],
            },
            {
                title: 'Version control',
                icons: [
                    { component: <SiGit/>, description: 'Git' },
                    { component: <GrGithub/>, description: 'GitHub' },
                    { component: <FaBitbucket/>, description: 'BitBucket' },
                    { component: <FaGitlab/>, description: 'GitLab' },
                ],
            },
            {
                title: 'IDE',
                icons: [
                    { component: <SiWebstorm/>, description: 'WebStorm' },
                    { component: <VscCode/>, description: 'VsCode' },
                ],
            },
            {
                title: 'Tools',
                icons: [
                    { component: <SiAdobephotoshop/>, description: 'Adobe Photoshop' },
                    { component: <SiFigma/>, description: 'Figma' },
                    { component: <SiPostman/>, description: 'Postman' },
                ],
            },
            {
                title: 'Other',
                icons: [
                    { component: <SiClickup/>, description: 'ClickUp' },
                    { component: <SiConfluence/>, description: 'Confluence' },
                    { component: <SiJira/>, description: 'Jira' },
                    { component: <SiTrello/>, description: 'Trello' },
                ],
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'UKRAINIAN UNIVERSAL EXCHANGE',
                stage: 'March 2022 - Present',
            },
            {
                title: 'SPA FOR FINANCIAL SYSTEM',
                stage: 'November 2021 - March 2022',
            },
            {
                title: 'RICHPRIZE / ONLINE CASINO',
                stage: 'March 2021 - November 2021',
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
            <Circles/>
            <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>

                <div className='flex-1 flex flex-col justify-center'>
                    <motion.h2
                        className="h2"
                        variants={fadeIn('right', 0.2)}
                        initial={'hidden'}
                        animate={'show'}
                        exit={'hidden'}
                    >
                        From tales to <span className="text-accent">tools.</span>
                    </motion.h2>
                    <motion.p
                        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
                        variants={fadeIn('right', 0.4)}
                        initial={'hidden'}
                        animate={'show'}
                        exit={'hidden'}
                    >
                        With 2+ years as a React JS Developer,
                        I've transformed concepts into concrete solutions,
                        ensuring every project not only works but also resonates with its audience.
                        Every challenge faced has been a learning opportunity,
                        pushing me to constantly evolve and refine my craft.
                    </motion.p>

                    <motion.div
                        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
                        variants={fadeIn('right', 0.6)}
                        initial={'hidden'}
                        animate={'show'}
                        exit={'hidden'}
                    >
                        <div className="flex xl:gap-x-3">
                            <div
                                className="relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={2} duration={12}/>+
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of
                                    expierence
                                </div>
                            </div>
                            <div
                                className="relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={3} duration={10}/>
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Finished projects
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
                    variants={fadeIn('left', 0.4)}
                    initial={'hidden'}
                    animate={'show'}
                    exit={'hidden'}
                >
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    onClick={() => setIndex(itemIndex)}
                                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                                >
                                    {item.title}
                                </div>
                            )
                        })}
                    </div>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                                >
                                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                                    <div className='hidden md:flex'>
                                        -
                                    </div>
                                    <div className='hidden md:flex'>
                                        {item.stage}
                                    </div>
                                    <div className='flex gap-x-4'>
                                        {item.icons?.map((iconData, iconIndex) => {
                                            return (
                                                <div key={iconIndex}
                                                     className='text-2xl text-white tooltip'
                                                     data-tip={iconData.description}>
                                                    {iconData.component}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>

            </div>
        </div>
    )
};

export default About;
