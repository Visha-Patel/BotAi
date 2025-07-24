import {Box,IconButton,Stack,Typography,Rating } from '@mui/material';  
import Bot from '../../assets/aiImage.svg';
import User from '../../assets/userImage.svg';
import {format} from 'date-fns';
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import {useState,useEffect} from 'react';


function ConversationCard({
        details,
        showFeedbackModal,
        setChat, 
        readOnly = false,
        setSelectedChatId,
    })
    
    {
        const [rating,setRating] = useState(0);
        const [isFeedBack,setIsFeedBack] = useState(false);
        const [isRating,setIsRating] = useState(false);

        useEffect(()=> {
            if(!isRating) return;

            setChat((prev) => {
                return prev.map((item) => {
                    if(item.id === details.id){
                        return {...item, rating: rating || 0};
                    }
                    return item;
                });
            });

        },[rating,isRating, setChat, details.id]);


        return (
            <Stack 
                direction={'row'} 
                spacing={2}
                padding={2}
                borderRadius={2}
                alignItems={'flex-start'}
                boxShadow={"0 0 4px rgba(0,0,0,0.1)"}
                bgcolor={readOnly ? "primary.main" : "primary.light"}
                sx={{
                        "&:hover .feedbackButton": {
                            visibility: "visible",
                            opacity: 1,
                        },
                    }}
                >

                <Box 
                    component={'img'}
                    src={details.type === 'AI' ? Bot : User}
                    borderRadius={'50%'}
                    width={75}
                    height={75}
                >
                </Box>

                <Stack
                    spacing={1}
                    justifyContent={'center'}
                >
                    <Box 
                        component={'span'}
                        fontWeight={700}
                        fontSize={{xs: 14, md: 16}}
                    >
                        {details.type === 'AI' ? 'Soul AI' : 'You'}
                    </Box>
                    <Typography fontSize={{xs: 12, md: 16 }}>
                        {details.text}
                    </Typography>
                    <Stack
                        direction={'row'}
                        spacing={2}
                        alignItems={'center'}
                    >
                        <Typography fontSize={{xs: 8, md: 12}} color={"text.primary"}>
                            {format(details.time, 'hh:mm a')}
                        </Typography>
                        {details.type === "AI" && !readOnly && (
                            <Stack
                                direction={'row'}
                                visibility={{xs: 'hidden', md: 'visible'}}
                                sx={{
                                    opacity: {xs: 1, md: 0},
                                    transition: 'opacity 400ms ease',
                                }}
                                className='feedbackButton'
                                >
                                    <IconButton
                                        size='medium'
                                        onClick={()=> setIsRating((prev) => !prev)}
                                    >
                                        {!isRating && <ThumbUpOffAltIcon fontSize='inherit'/>}
                                        {isRating && <ThumbUpAltIcon fontSize='inherit'/>}

                                    </IconButton>
                                    <IconButton
                                        size='medium'
                                        onClick={()=>{
                                            setIsFeedBack((prev) => !prev);
                                            setSelectedChatId(details.id);
                                            showFeedbackModal();
                                        }}
                                    >
                                        {!isFeedBack && <ThumbDownOffAltIcon fontSize="inherit" />}
                                        {isFeedBack && <ThumbDownAltIcon fontSize="inherit" />}
                                    </IconButton>
                                </Stack>
                        )}
                    </Stack>

                    {(isRating || details.rating>0) && details.type === 'AI' && (
                        <Stack>
                            <Typography
                                component={'legend'}
                                fontSize={{xs: 14, md: 16}}
                                mb={0.5}
                            >
                                {readOnly ? 'Rating:' :'Rate this response'}
                            </Typography>
                            <Rating  
                                name='simple-controlled'
                                value={readOnly? details.rating : rating}
                                onChange={(event,newValue) => {
                                    setRating(newValue);
                                    setIsRating(true);
                                    console.log(newValue);
                                }}  
                                sx={{width: '150px'}}
                                readOnly={readOnly}
                            />
                        </Stack>
                    )}

                    {details.feedback && (
                        <Typography pt={1} fontSize={{xs: 14, md: 18}}>
                            <Box component={'span'} fontWeight={600}>
                                Feedback:
                            </Box>
                            <Box component={'span'}>
                                {`${details.feedback}`}
                            </Box>
                        </Typography>
                    )}
                </Stack>

            </Stack>
        );
}   

export default ConversationCard;