import React from 'react';
import {Box, Button, Modal} from "@mui/material";
import PostForm from "./PostForm";

const BasicModal = ({createPost, handleOpen, handleClose, open}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <PostForm create={createPost}/>
                    </Box>
                </Modal>
        </div>
    );
};

export default BasicModal;