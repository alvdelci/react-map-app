import React from 'react';

const BotAvatar = () => {

    return(
        <img src="https://i.stack.imgur.com/3dMSk.png?s=192&g=1" style={{height: "50px", width: "50px", borderRadius: "25px", marginRight: "10px"}} alt="" />
    );
}

const UserAvatar = () => {

    return(
        <img src="https://lumiere-a.akamaihd.net/v1/images/iron-man_dft_m_db79b94b.jpeg" style={{height: "50px", width: "50px", borderRadius: "25px", marginLeft: "10px"}} alt="" />
    );
}

export {
    BotAvatar,
    UserAvatar
};