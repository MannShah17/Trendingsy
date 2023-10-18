import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className=' bg-red-600 footer'>
      <div>
        <h3 className='text-center text-lg'>
          Follow us for more NEW COLLECTION UPDATES
        </h3>
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='p-10 cursor-pointer text-white'>
          <a href='/' target='_blank'>
            <FaFacebook size={30} />
          </a>
        </div>
        <div className='p-10 cursor-pointer text-white'>
          <a href='/' target='_blank'>
            <FaSnapchat size={30} />
          </a>
        </div>
        <div className='p-10 cursor-pointer text-white'>
          <a href='/' target='_blank'>
            <FaInstagram size={30} />
          </a>
        </div>
        <div className='p-10 cursor-pointer text-white'>
          <a href='/' target='_blank'>
            <FaTwitter size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
