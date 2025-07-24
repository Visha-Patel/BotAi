import { Button, Stack, useMediaQuery, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import Chat from '../../assets/newChat.svg';
import Bot from '../../assets/aiImage.svg';


function SideMenu({closeMenu, setChat}){
    const isMobile = useMediaQuery('(max-width: 900px)');
    
    return (
        <Stack 
            direction={'column'}
            spacing={2}
        >
            {isMobile ? (
                <Button
                    endIcon={<CloseIcon/>}
                    onClick={closeMenu}
                    sx={{
                        color: 'primary.main',
                        justifyContent: 'flex-end',
                    }}
                >
                    Close
                </Button>

            ) : null
            
            }

            <Link to={'/'} style={{textDecoration: 'none'}}>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    padding={2}
                    sx={{
                        bgcolor: 'primary.light'
                    }}
                    onClick={()=>{
                        setChat([]);
                        closeMenu();
                    }}
                >
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Box 
                            component={'img'}
                            src={Bot}
                            borderRadius={'50%'}
                            height={40}
                            width={40}
                        />
                        <Typography variant="h5" fontSize={20} color="text.primary">
                            New Chat
                        </Typography>
                    </Stack>
                    <Box 
                        component={'img'}
                        src={Chat}
                        height={20}
                        width={20}
                    />
                </Stack>
            </Link>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Link to={'/history'}>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            px: 2,
                            mx: 4,
                            alignSelf: 'center',
                        }}
                        onClick={closeMenu}
                    >
                        Past Conversations
                    </Button>
                </Link>
            </Box>
        </Stack>
    );
}

export default SideMenu ;