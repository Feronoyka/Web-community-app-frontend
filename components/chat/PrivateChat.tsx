import { SendIcon } from '@/assets/icons';

function PrivateChat() {
  return (
    <div className='h-screen'>
      <div className='fixed top-0 w-292 bg-(--golden-pollen-100) py-4 shadow-md'>
        {/*Navbar */}
      </div>
      <div className='pt-30 pb-20 pl-10'>
        {/*Messages */}
        <div />
      </div>
      <div className='fixed flex items-center top-172 left-54 bg-white pb-5'>
        {/*Input to messaging */}
        <button>
          <SendIcon />
        </button>
      </div>
    </div>
  );
}

export default PrivateChat;
