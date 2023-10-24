import Image from 'next/image';

const Avatar = () => {
  return (
      <div className="hidden xl:flex xl:max-w-none">
        <Image
            className='translate-z-0 w-full h-full relative right-12'
            src={'/avatar5.png'}
            alt={''}
            width={750}
            height={678}
        />
      </div>
  );
};

export default Avatar;
