import Link from 'next/link';
import { BiMessageDetail } from 'react-icons/bi';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='mt-16'>
      <div className='container mx-auto px-4'>
        <Link href='/' className='font-black text-tertiary-dark'>
          Hotel
        </Link>

        <h4 className='font-semibold text-[40px] py-6'>Contact</h4>

        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
            <p>123 Road Rd</p>
            <div className='flex items-center py-4'>
              <BsFillSendFill />
              <p className='ml-2'>HaoDeveloper</p>
            </div>
            <div className='flex items-center'>
              <BsTelephoneOutbound />
              <p className='ml-2'>000-000-0000</p>
            </div>
            <div className='flex items-center pt-4'>
              <BiMessageDetail />
              <p className='ml-2'>000-000-0000</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
