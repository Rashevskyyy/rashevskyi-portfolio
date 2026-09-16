import Link from 'next/link';
import {RiGithubFill, RiInstagramLine, RiLinkedinFill, RiTelegramFill} from 'react-icons/ri';


const Socials = () => {
  return (
      <div className='flex items-center gap-x-5 text-lg'>
        <Link href="https://instagram.com/rashevskyyy_?igshid=OGQ5ZDc2ODk2ZA==" aria-label="Instagram" className="hover:text-accent transition-all duration-300">
          <RiInstagramLine />
        </Link>
        <Link href="https://github.com/Rashevskyyy" aria-label="GitHub" className="hover:text-accent transition-all duration-300">
          <RiGithubFill />
        </Link>
        <Link href="https://www.linkedin.com/in/rashevskyi-oleksii/" aria-label="LinkedIn" className="hover:text-accent transition-all duration-300">
          <RiLinkedinFill />
        </Link>
        <Link href="https://t.me/Rashevskyyy" aria-label="Telegram" className="hover:text-accent transition-all duration-300">
          <RiTelegramFill />
        </Link>
      </div>
  )
};

export default Socials;
