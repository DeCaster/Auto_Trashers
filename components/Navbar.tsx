import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
      <h2 className="text-3xl text-gray-800 tracking-wide hover:text-blue-700 font-extralight mt-3">Auto Trashers</h2>
        <Image
          src="/challenger.png"
          alt='Auto Trasher'
          width={70}
          height={18}
          className='mt-3 object-contain'
        />
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-amber-500 rounded-full bg-white min-w-[130px]'
      />
    </nav>
  </header>
);

export default NavBar;
