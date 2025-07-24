import {Stack , Typography} from '@mui/material';

function Card({heading,text,generateAIResponse}){

    return(
        <Stack
            justifyContent={'center'}
            alignItems={'flex-start'}
            p={2}
            spacing={2}
            borderRadius={1}
            boxShadow={"0 0 12px rgba(0,0,0,0.1)"}
            bgcolor={'primary.white'}
            sx={{
                cursor: 'pointer',
                transition: 'background 200ms ease',
            }}
            onClick={ () => generateAIResponse(heading)}

        >
            <Typography variant='h2' component='h2' fontSize={{xs: 14, md: 20}}>
                {heading}
            </Typography>
            <Typography fontSize={{xs: 12, md: 16}}>
                {text}
            </Typography>
        </Stack>
    );
}

export default Card;