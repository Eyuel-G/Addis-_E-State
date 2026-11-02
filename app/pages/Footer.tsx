import Image from 'next/image'

import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="flex flex-col">
            <div>
                <div>
                    <Image src="/logo.png" alt="logo" width="50" height="50" />
                </div>
            </div>

            <div className="flex justify-evenly">
                <div>
                    <i>@2026 Addis E-State. All rights reserved!</i>
                </div>
                <div className="flex gap-6">
                    <FiFacebook className='w-5 h-5' />
                    <FiInstagram className='w-5 h-5' />
                    <FiTwitter className='w-5 h-5' />
                    <FiYoutube className='w-5 h-5' />
                </div>
                <div className="flex gap-4">
                    <i><a href="#"
                        className="hover:text-orange-600"
                    >Privacy Policy</a></i>
                    <i><a href="#"
                        className="hover:text-orange-600"
                    >Terms of Service</a></i>
                </div>
            </div>
        </div>
    )
}

export default Footer