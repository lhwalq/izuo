'use client'

import "@/style/globals.css"
import React, { useState, useEffect } from 'react';
import { userManager } from "@/data/UserManager";
import {AvatarFallback, AvatarImage, UserAvatar} from "@/components/common/UserAvatar";
import { CommonButton } from "@/components/common/CommonButton"
import LoginInModal from "@/components/user/LoginInModal";
import LoginOutModal from "@/components/user/LoginOutModal";

const SignIn = ({
    lang,
    locale
}:{
    lang: string;
    locale: any;
}) => {

    const [user, setUser] = useState<any | null>(userManager.userData);
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignOut, setShowSignOut] = useState(false);

    useEffect(() => {
        if (!user) {
            // 检查本地存储中是否有用户数据
            const localUser = userManager.getUser();
            if (localUser && localUser.id) {
                setUser(localUser);  // 如果 userId 存在，则设置为已登录
            }
        }
    }, []);

    return (
        <div className="user-control flex items-center">

            <LoginInModal isOpen={showSignIn} onClose={() => setShowSignIn(false)} locale={locale}/>
            <LoginOutModal isOpen={showSignOut} onClose={() => setShowSignOut(false)} locale={locale}/>

            {user ? (
                <div className="flex items-center px-4" onClick={() => setShowSignOut(true)}>
                    <UserAvatar>
                        <AvatarImage src={"/placeholder.svg?height=40&width=40"}/>
                        {/*<AvatarImage src={user.image || "/placeholder.svg?height=40&width=40"}/>*/}
                        <AvatarFallback>{user.name?.[0]}</AvatarFallback>
                    </UserAvatar>
                </div>
            ) : (
                <CommonButton className="bg-blue-600 text-white rounded-md px-4"
                              onClick={() => setShowSignIn(true)}>
                    <p>{locale.header.sign_in}</p>
                </CommonButton>
            )}
        </div>
    )
}

export default SignIn;