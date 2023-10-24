import {motion} from 'framer-motion';
import {BsArrowRight} from 'react-icons/bs';
import {fadeIn} from '../../variants';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';

const Contact = () => {
    const {register, reset, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        }})
        const onSubmit = data => {
            fetch('https://formspree.io/f/xaygvjpp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if(response.ok) {
                        toast('Message sent!');
                        reset();
                    } else {
                        toast('Something was wrong!');
                    }
                });
        };
    return (
        <div className='h-full bg-primary/30'>
            <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
                <div className='flex flex-col w-full max-w-[700px]'>
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h2 text-center mb-12 '
                    >
                        Let's <span className='text-accent'>connect.</span>
                    </motion.h2>
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        variants={fadeIn('up', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='flex flex-1 flex-col gap-6 w-full mx-auto'
                    >
                        <div className="flex gap-x-6 w-full">
                            <input
                                type='text'
                                placeholder='Name'
                                className='input'
                                {...register("name")}
                            />
                            <input
                                type='text'
                                placeholder='Email'
                                className='input'
                                {...register("email")}
                            />
                        </div>
                        <input
                            type='text'
                            placeholder='Subject'
                            className='input'
                            {...register("subject")}
                        />
                        <textarea
                            className='textarea'
                            placeholder='Message'
                            {...register("message")}
                        />
                        <button
                            type='submit'
                            className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                        <span
                            className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
                            <BsArrowRight
                                className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
                        </button>
                    </motion.form>

                </div>
            </div>
        </div>
    )
}
    ;

    export default Contact;
