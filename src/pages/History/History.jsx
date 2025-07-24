import { useState,useEffect } from "react";
import {Box,Stack,Typography,Divider} from '@mui/material';
import NavBar from "../../components/NavBar/NavBar";
import Filter from "../../components/Filter/Filter";
import HistoryCard from '../../components/HistoryCard/HistoryCard';

function History(){
    const[prevChats, setPrevChats] = useState([]);
    const [filteredChats, setFilteredChats] = useState([]);

    useEffect(() => {
        const history = JSON.parse(localStorage.getItem('conversation')) || [];

        setPrevChats(history);
        setFilteredChats(history);
    },[]);


    return (
        <Stack>
            <NavBar/>

            <Box
                p={{xs:2 , md: 3}}
            >
                <Typography
                    variant="h2" 
                    component={'h2'}
                    textAlign={'center'}
                >
                    Conversation History
                </Typography>

                {prevChats.length > 0 ? (
                    <Filter 
                        fullChats={prevChats} 
                        setFilteredChats={setFilteredChats}
                    />
                ) : null}

                {prevChats.length > 0 && filteredChats.length === 0 ? (
                    <Typography 
                        textAlign={'center'}
                        p={2}
                        bgcolor={'primary.white'}
                    >
                        No such chats found
                    </Typography>
                ) : null}

                {prevChats.length === 0 && (
                    <Typography
                        textAlign={'center'}
                        p={2}
                        bgcolor={'primary.light'}
                    >
                        No saved chats
                    </Typography>
                )}

                {filteredChats.length > 0 && (
                    <Stack
                        spacing={2}
                        divider={
                            <Divider sx={{ 
                                opacity: 0.4,
                            }}/>
                        }
                    >
                        {filteredChats.map((item,idx) => (
                            <HistoryCard details={item} key={idx}/>
                        ))}
                    </Stack>
                )}
            </Box>
        </Stack>
    );
}


export default History;