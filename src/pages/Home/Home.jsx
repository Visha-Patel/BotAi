import {  useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import {v4 as uuid4} from 'uuid';
import { Stack } from "@mui/material";
import Navbar from '../../components/NavBar/NavBar'; 
import FeedbackModal from '../../components/FeedBackModal/Feedback';
import ChatInput from '../../components/Input/InputBar';
import ConversationCard from '../../components/ConversationCard/ConverationCard';
import OnLoadChat from '../../components/StartingChat/StartingChat';
import data from '../../SampleData/SampleData.json';


function Home(){
    const {chat,setChat} = useOutletContext();
    // const Acontext = useOutletContext();
    // console.log(Acontext);
    const [modalOpen,setModalOpen] = useState(false);
    const [selectedChatId,setSelectedChatId] = useState(false);
    const [scrollBottom , setScrollBottom] = useState(false);
    const sessionRef = useRef(null);

    useEffect(() => {
        sessionRef.current?.lastElementChild ?.scrollIntoView() ;

    }, [scrollBottom]);


    const generateAIResponse = (input) =>{

        const humanInputId = uuid4();
        const aiResponseId = uuid4();

        const questionSet = data.find((item) => 
            input.toLowerCase() === item.question.toLowerCase()
        );

        let Response = 'Sorry, Did not understand your query!';

        if(questionSet !== undefined){
            Response = questionSet.response;
        }

        setChat((prev) => [
            ...prev,
            {
                type: 'Human',
                text: input,
                time: new Date(),
                id: humanInputId,
            },
            {
                type: 'AI',
                text: Response,
                time: new Date(),
                id: aiResponseId,
            },
        ]);
    }

    const ChatCard = chat.map((item,idx) => {
        return(
            <ConversationCard  
                details={item}
                key={idx}
                setChat={setChat}
                setSelectedChatId={setSelectedChatId}
                showFeedbackModal={() => setModalOpen(true)}
            />
        );
    });

    const CardOnLoad = ()=> {
        if(chat.length === 0) {
            return <OnLoadChat generateAIResponse={generateAIResponse}/>
        }

        return (
            <Stack
                spacing={2}
                margin={2}
                ref={sessionRef}
                sx={{
                    '@media (max-width: 900px)': {
                        justifyContent: 'flex-end',
                    }
                }}
            >
                {ChatCard}
            </Stack>
        )
    }


    return (
        <Stack
            height={'100vh'}
            justifyContent={'space-between'}
        >
            <Navbar/>
            {CardOnLoad()}

            <ChatInput 
                chat={chat}
                generateAIResponse={generateAIResponse}
                clearChat={() => setChat([])}
                setScroll={setScrollBottom}
            />

            <FeedbackModal 
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                chatId={selectedChatId}
                updateChat={setChat}
            />
        </Stack>
    );
}


export default Home;