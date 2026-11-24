import {FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact,} from 'react-icons/fa';
import {
    SiAdobephotoshop,
    SiChai, SiChakraui, SiClickup, SiConfluence,
    SiDocker,
    SiFastify,
    SiFigma,
    SiGit, SiJest, SiJira, SiMocha, SiMongodb, SiMui, SiMysql, SiNestjs,
    SiNextdotjs, SiPostgresql, SiPostman,
    SiReacthookform, SiReactquery,
    SiRedux, SiReduxsaga, SiSass, SiSocketdotio, SiStyledcomponents, SiTrello,
    SiTypescript, SiVite, SiWebpack, SiWebstorm, SiThreedotjs, SiGreensock
} from 'react-icons/si';
import {useState} from 'react';
import Circles from '../../components/Circles';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
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
                    { component: <SiSass/>, description: 'SCSS' },
                    { component: <FaJs/>, description: 'JavaScript' },
                    { component: <FaReact/>, description: 'ReactJS' },
                    { component: <SiNextdotjs/>, description: 'NextJS' },
                    { component: <SiTypescript/>, description: 'TypeScript' },
                    { component: <SiRedux/>, description: 'Redux' },
                    { component: <SiReduxsaga/>, description: 'Redux Saga' },
                    { component: <SiReactquery/>, description: 'React Query' },
                    { component: <SiReacthookform/>, description: 'React Hook Form' },
                    { component: <SiStyledcomponents/>, description: 'Styled Components' },
                    { component: <SiMui/>, description: 'Material UI' },
                    { component: <SiChakraui/>, description: 'Chakra UI' },
                    { component: <SiWebpack/>, description: 'Webpack' },
                    { component: <SiVite/>, description: 'Vite' },
                ],
                chips: ['Zustand', 'i18next'],
            },
            {
                title: 'Motion & games',
                icons: [
                    { component: <SiThreedotjs/>, description: 'Three.js' },
                    { component: <SiGreensock/>, description: 'GSAP' },
                ],
                chips: ['PixiJS v8', 'Spine'],
            },
            {
                title: 'Backend',
                icons: [
                    { component: <FaNodeJs/>, description: 'NodeJS' },
                    { component: <SiNestjs/>, description: 'NestJS' },
                    { component: <SiFastify/>, description: 'Fastify' },
                    { component: <SiSocketdotio/>, description: 'Socket.io' },
                    { component: <SiDocker/>, description: 'Docker' },
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
                title: 'Freelance',
                role: 'Slot Game Developer · Frontend / Fullstack',
                stage: 'Sep 2024 to now',
                projects: [
                    'GOREEL: three released slot games (PixiJS, GSAP, Spine)',
                    'Abyssal Tide and Fjordfall, my own slots',
                ],
            },
            {
                title: 'Me Team · Ukrainian Universal Exchange',
                role: 'Middle React Developer',
                stage: 'Mar 2022 to Sep 2024',
            },
            {
                title: 'Wizards Dev',
                role: 'React Developer · Trainee → Junior Strong',
                stage: 'Mar 2021 to Mar 2022',
                projects: [
                    'Entertainment platform',
                    'Financial system SPA',
                ],
            },
        ],
    },
];

const About = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className='h-full bg-primary/30 about-scroll text-center xl:text-left'>
            <Circles/>
            <div className='container mx-auto flex flex-col items-center xl:flex-row gap-x-10 gap-y-10'>

                <div className='flex-1 flex flex-col justify-center'>
                    <motion.h2
                        className="h2"
                        variants={fadeIn('right', 0.2)}
                        initial={'hidden'}
                        animate={'show'}
                        exit={'hidden'}
                    >
                        Five years of <span className="text-accent">frontend.</span>
                    </motion.h2>
                    <motion.p
                        className='max-w-[540px] mx-auto xl:mx-0 mb-6 xl:mb-10 px-2 xl:px-0'
                        variants={fadeIn('right', 0.4)}
                        initial={'hidden'}
                        animate={'show'}
                        exit={'hidden'}
                    >
                        React since 2021, slot games in PixiJS since 2024:
                        three released at GOREEL, two of my own. Playable ads, an exchange,
                        a fridge I actually open, a book bot for friends. If it lives on a phone, it has to feel good.
                    </motion.p>

                    <motion.div
                        className="flex max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-2"
                        variants={fadeIn('right', 0.6)}
                        initial={'hidden'}
                        animate={'show'}
                        exit={'hidden'}
                    >
                        <div className="flex gap-x-2 xl:gap-x-6">
                            <div
                                className="relative pr-4 xl:pr-6 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={5} duration={8}/>+
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of
                                    experience
                                </div>
                            </div>
                            <div
                                className="relative pr-4 xl:pr-6 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={3} duration={8}/>
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Released slots
                                </div>
                            </div>
                            <div className="relative">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={7} duration={8}/>
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                                    Games &amp; tools
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className='flex flex-col w-full xl:max-w-[48%]'
                    variants={fadeIn('left', 0.4)}
                    initial={'hidden'}
                    animate={'show'}
                    exit={'hidden'}
                >
                    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <button
                                    type="button"
                                    key={itemIndex}
                                    onClick={() => setIndex(itemIndex)}
                                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 bg-transparent`}
                                >
                                    {item.title}
                                </button>
                            )
                        })}
                    </div>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start'>
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                                >
                                    {item.icons ? (
                                        <div className="about-skill-label">{item.title}</div>
                                    ) : (
                                        <div className="about-job">
                                            <div className="about-job-title">{item.title}</div>
                                            {item.role && <div className="about-job-role">{item.role}</div>}
                                            {item.stage && <div className="about-job-stage">{item.stage}</div>}
                                            {item.projects && (
                                                <div className="about-job-projects">
                                                    {item.projects.map((project) => (
                                                        <span key={project}>{project}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    <div className='flex flex-wrap justify-center xl:justify-start gap-x-3 gap-y-2 items-center'>
                                        {item.icons?.map((iconData, iconIndex) => {
                                            return (
                                                <div key={iconIndex}
                                                     className='text-2xl text-white tooltip'
                                                     data-tip={iconData.description}>
                                                    {iconData.component}
                                                </div>
                                            )
                                        })}
                                        {item.chips?.map((chip) => (
                                            <span key={chip} className="skill-chip">{chip}</span>
                                        ))}
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
