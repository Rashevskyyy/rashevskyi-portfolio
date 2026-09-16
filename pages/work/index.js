import Circles from '../../components/Circles';
import PlayableShowcase from '../../components/PlayableShowcase';
import MoreWork from '../../components/MoreWork';

const Work = () => {
    return (
        <div className="h-full bg-primary/30 work-scroll">
            <Circles />
            <section className="work-hero">
                <div className="container mx-auto w-full">
                    <p className="band-index text-center xl:text-left mb-2">01</p>
                    <PlayableShowcase />
                </div>
            </section>
            <MoreWork />
        </div>
    );
};

export default Work;
