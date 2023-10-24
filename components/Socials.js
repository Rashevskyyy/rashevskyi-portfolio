import Link from 'next/link';
import {RiInstagramLine} from 'react-icons/ri';


const Socials = () => {
  return (
      <div className='flex items-center gap-x-5 text-lg'>
        <Link href='https://instagram.com/rashevskyyy_?igshid=OGQ5ZDc2ODk2ZA==' className='hover:text-accent transition-all duration-300'>
          <RiInstagramLine />
        </Link>
      </div>
  )
};

export default Socials;
