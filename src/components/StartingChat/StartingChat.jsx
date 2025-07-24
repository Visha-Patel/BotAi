import { Box, Grid, Stack, Typography } from "@mui/material";
import logo from '../../assets/aiImage.svg';
import Card from "./Card";

function StartingChat({generateAIResponse}){

    const sampleQue = [
        {
            heading: 'Hi, what is the weather',
            text: 'Get immediate AI generated response',
        },
        {
            heading: "Hi, what is my location",
            text: "Get immediate AI generated response",
        },
        {
            heading: "Hi, what is the temperature",
            text: "Get immediate AI generated response",
        },
        {
            heading: "Hi, how are you",
            text: "Get immediate AI generated response",
        },
    ];


    return (
        <Stack 
            alignItems={'center'}
            justifyContent={'flex-start'}
            spacing={2}
        >
            <Typography variant="h2" component={'h2'}>
                 How Can I Help You Today?
            </Typography>

            <Box 
                component={'img'}
                src={logo}
                borderRadius={'50%'}
                height={60}
                width={60}
            />

            <Grid container spacing={2} padding={2}>
                {sampleQue.map((que) => (
                    <Grid size={{xs: 12, md: 6}}>
                        <Card 
                            heading={que.heading}
                            text={que.text}
                            generateAIResponse={generateAIResponse}
                        />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}


export default StartingChat;
