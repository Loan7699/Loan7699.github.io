import { GrFacebook, GrFormDown } from 'react-icons/gr'

function Footer() {
    return (
        <div className='mb-[52px] mt-6 text-[#8E8E8E] text-xs px-4'>
            <div className='mt-6'>
                <div className='flex flex-wrap justify-center'>
                    <div className='mx-2 mb-3'>Meta</div>
                    <div className='mx-2 mb-3'>About</div>
                    <div className='mx-2 mb-3'>Blog</div>
                    <div className='mx-2 mb-3'>Jobs</div>
                    <div className='mx-2 mb-3'>Help</div>
                    <div className='mx-2 mb-3'>API</div>
                    <div className='mx-2 mb-3'>Privacy</div>
                    <div className='mx-2 mb-3'>Terms</div>
                    <div className='mx-2 mb-3'>Top Accounts</div>
                    <div className='mx-2 mb-3'>Hashtags</div>
                    <div className='mx-2 mb-3'>Location</div>
                    <div className='mx-2 mb-3'>Instagram Lite</div>
                    <div className='mx-2 mb-3'>Contact Uploading  &#38; Non-Users</div>
                </div>
                <div className='flex flex-wrap justify-center'>
                    <div className='mx-2 mb-3'>Dance</div>
                    <div className='mx-2 mb-3'>Food &#38; Drink</div>
                    <div className='mx-2 mb-3'>Home &#38; Garden</div>
                    <div className='mx-2 mb-3'>Music</div>
                    <div className='mx-2 mb-3'>Visual Arts</div>
                </div>
            </div>
            <div className='flex justify-center flex-wrap my-3'>
                <div>
                    <div className='flex'>
                        <span>English</span>
                        <GrFormDown />
                    </div>

                    <select className='opacity-0'>
                        <option>English</option>
                        <option value="">Tiếng Việt</option>
                        <option value="">Korean</option>
                        <option value="">Japanese</option>
                        <option value="">Brasil</option>
                        <option value="">Portugal</option>
                    </select>
                </div>
                <div>
                    <div>© 2022 Instagram from Meta</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;