import { signOut } from "next-auth/react";
import { CommonButton } from "@/components/common/CommonButton";
import { userManager } from "@/data/UserManager";

const LoginOutModal: React.FC<LoginInOutModalProps> = ({ isOpen, onClose, locale }) => {
    if (!isOpen) return null;

    async function signOutWeb() {
        // const userData = userManager.getUser();
        // fetch(ApiResponse.getApiUrl("user/signout"), {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         id: userData?.id
        //     }),
        // })
        userManager.removeUser();
        signOut();
        onClose();
        window.location.href = '/';
    }

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-xl w-full max-w-md transform transition-all duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                        {locale.header.are_you_want_to_log_out}
                    </h2>
                    <p className="text-gray-600 text-center mb-6">
                        {locale.header.logout_confirmation_message || "You'll need to log in again to access your account."}
                    </p>
                    <div className="flex justify-center space-x-4">
                        <CommonButton
                            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition duration-200"
                            onClick={onClose}
                        >
                            {locale.header.cancel}
                        </CommonButton>
                        <CommonButton
                            className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
                            onClick={signOutWeb}
                        >
                            {locale.header.confirm}
                        </CommonButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginOutModal;