import { Box,Button,Typography,IconButton,Modal,Stack,TextField, } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Bulb from '../../assets/bulb.svg';



function FeedbackModal({ open, onClose, chatId, updateChat }){
    const [feedback,setFeedback] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateChat((prev) => {
            return prev.map((item) => {
                if(item.id === chatId){
                    return{...item, feedback: feedback};
                }
                else{
                    return item;
                }
            });
        });

        setFeedback('');
        onClose();
    };

    return(
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '30%',
                    left: '30%',
                    width: '50%',
                    borderRadius: '10px',
                    p: 4,
                    bgcolor: 'primary.bgColor',
                }}>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                >
                    <Stack
                        direction={'row'}
                        spacing={2}
                        alignItems={'center'}
                    >
                        <Box 
                            component={'img'}
                            src={Bulb}
                            height={20}
                            width={20}
                        />
                        <Typography variant="h2" component={'h2'}>
                            Provide Additional Feedback
                        </Typography>
                    </Stack>
                    <IconButton onClick={onClose}>
                            <CloseIcon/>
                    </IconButton>
                </Stack>

                <Box
                    component={'form'}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '10px',
                    }}
                    onSubmit={handleSubmit}
                >
                    <TextField 
                        multiline
                        rows={5}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        sx={{
                            width: '100%',
                            bgcolor: 'primary.white',
                        }}
                        required
                    />    

                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}


export default FeedbackModal;