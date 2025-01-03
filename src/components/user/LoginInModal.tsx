import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginInModal: React.FC<LoginInOutModalProps> = ({ isOpen, onClose, locale }) => {
    if (!isOpen) return null;

    function signInWeb() {
        signIn('google', {callbackUrl: process.env.NEXT_PUBLIC_CALLBACK_URL})
    }

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl mx-4 transform transition-all duration-300 ease-in-out"
                 onClick={(e) => e.stopPropagation()}>
                <div className="relative p-8 text-center">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl"></div>

                    <p className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">{locale.header.logging_in_tip}</p>

                    <p className="text-lg sm:text-xl text-gray-600 mb-8">{locale.header.please_continue_by_logging_in}</p>

                    <button
                        onClick={signInWeb}
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                    >
                        <Image src="/bg/icon_google.svg" width={20} height={20} alt="" className="mr-2" />
                        {locale.header.sign_up_with_google}
                    </button>

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginInModal;