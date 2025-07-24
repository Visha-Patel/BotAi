import { Stack,Typography } from "@mui/material";
import { format,isEqual,startOfDay,add,parseISO  } from "date-fns";
import ConversationCard from "../ConversationCard/ConverationCard";


function historycard({details}){
    
    const CustomDate = (date) => {
        const parsedDate = startOfDay(parseISO(date));
        const today = startOfDay(new Date());

        if(isEqual(today,parsedDate)){
            return "Today's Chats";
        }
        else if(isEqual(parsedDate,add(today,{days: - 1}))){
            return "Yesterdays' Chats";
        }
        else{
            return format(parsedDate,'do LLL yyyy');
        }
    };

    
    return (
        <Stack
            spacing={2}
        >
            <Typography
                fontWeight={700}
            >
                {CustomDate(details.dateTime)}
            </Typography>

            <Stack
                spacing={2}
            >
                {details.chat.map((item,idx) => {
                    return <ConversationCard details={item} readOnly={true} key={idx}/> ;
                })}
            </Stack>
        </Stack>
    );

}



export default historycard;