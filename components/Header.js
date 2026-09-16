import Link from 'next/link';
import Image from 'next/image';
import Socials from './Socials';


const Header = () => {
  return (
      <header className="absolute z-30 w-full flex items-center px-6 md:px-16 xl:px-0 xl:h-[90px]">
        <div className='container mx-auto'>
          <div className='flex flex-row justify-between items-center gap-x-4 py-4 xl:py-8'>
            <Link href={'/'}>
              <Image
                  src={'/logo.svg'}
                  alt="Rashevskyi Oleksii"
                  width={220}
                  height={48}
                  className="h-8 w-auto xl:h-12"
                  priority
              />
            </Link>
            <Socials />
          </div>
        </div>
      </header>
  );
};

export default Header;
