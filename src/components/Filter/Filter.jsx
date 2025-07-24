import {Box,Typography,Select,MenuItem,} from "@mui/material";
import { useState,useEffect } from "react";

function Filter({fullChats,setFilteredChats}){
    const [option,setOptions] = useState('All Ratings');

    useEffect(() => {
        if(option === 'All Ratings'){
            setFilteredChats(fullChats);
            return;
        }
        
        const filtered = fullChats.filter((item) => {
            let present = false;

            item.chat.forEach((chat) => {
                if(chat.rating === option){
                    present = true;
                }
            });
            return present;
        
        });
        setFilteredChats(filtered);
    },[option,fullChats,setFilteredChats]);


    return(
        <Box
            mb={3}
        >
            <Typography 
                fontSize={12}
                mb={1}
            >
                Filter By Rating
            </Typography>
            <Select
                size="small"
                value={option}
                onChange={(e) => setOptions(e.target.value)}
                

            >
                <MenuItem value="All Ratings" >All Ratings</MenuItem>
                <MenuItem value={1}>1 Star</MenuItem>
                <MenuItem value={2}>2 Stars</MenuItem>
                <MenuItem value={3}>3 Stars</MenuItem>
                <MenuItem value={4}>4 Stars</MenuItem>
                <MenuItem value={5}>5 Stars</MenuItem>
            </Select>
        </Box>
    );
}


export default Filter;