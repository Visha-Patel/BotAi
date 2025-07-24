import {Box,Button,Stack,TextField,Snackbar} from '@mui/material';
import { useState,useEffect,useRef } from 'react';
import {Link} from 'react-router-dom';

function Input({chat,clearChat,setScroll,generateAIResponse}){
    const [input,setInput] = useState('');
    const [isSnackbar,setIsSnackbar] = useState(false);

    const inputRef = useRef(null);

    useEffect(()=> {
        if(inputRef.current){
            inputRef.current.focus();
        }
    },[]);

    const handleSave = () =>{
        const chatHistory = JSON.parse(localStorage.getItem('conversation')) || [];
        const date = new Date();

       const newChat = { chat, dateTime: date };

       localStorage.setItem('conversation', JSON.stringify([newChat, ...chatHistory]));

        clearChat();
        setIsSnackbar(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        generateAIResponse(input);
        setInput('');
        setScroll((prev) => !prev);
    }
    

    return (
        <Box
            component={'form'}
            onSubmit={handleSubmit}
            width={'100%'}
        >
            <Stack
                direction={'row'}
                spacing={2}
                padding={1}
                
            >
                {/* <TextField 
                    type='text'
                    value= {input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Message Bot AI…'
                    required
                    inputRef={inputRef}
                    sx={{
                        flex: 1,
                        bgcolor: 'primary.white',
                    }}
                /> */}
                <input 
                    type='text'
                    value= {input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Message Bot AI...'
                    required
                    ref={inputRef}
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '5px',
                        border: '1px solid rgba(175, 159, 205, 1)',
                        
                    }}
                />
                <Button 
                    variant='contained' 
                    type='submit'
                    sx={{fontSize: 15, px: 2}}
                >
                    Ask
                </Button>
                <Button
                    variant='contained'
                    onClick={handleSave}
                    sx={{fontSize: 15, px: 2}}
                >
                    Save
                </Button>

                <Snackbar 
                    open={isSnackbar}
                    message={'chat saved'}
                    onClose={() => setIsSnackbar(false)}
                    autoHideDuration={3000}
                    action= {
                        <Link to='/history'>
                            <Button size='small' color='inherit'>
                                See Past Conversations
                            </Button>
                        </Link>
                    }
                />


            </Stack>
        </Box>
    );
    
}


export default Input;