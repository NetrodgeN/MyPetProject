import React from 'react';
import SvgIcon from "@mui/material/SvgIcon";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const Loader = () => {
    return (
        <div className={'loading__icon'}>
            <SvgIcon
            className={'loader'}
            sx={{fontSize: 100}}
        >
            <AutorenewIcon/>
        </SvgIcon>
        </div>
    );
};

export default Loader;