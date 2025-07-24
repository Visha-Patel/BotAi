import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function NavBar(){
    const isMobile = useMediaQuery('(max-width: 900px)');
    const {handleMobileMenu} = useOutletContext();

    return (
        <Stack
            component={'header'}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            padding={3}
        >
            <Stack
                direction={'row'}
                spacing={2}
                alignItems={'center'}
            >
                {isMobile ? (
                    <MenuIcon onClick={() => handleMobileMenu((prev) => !prev)}/>
                ) : null}

                <Link to= '/' style={{textDecoration : 'none'}}>
                    <Typography variant="h1" component={'h1'}>
                        Bot AI
                    </Typography>
                </Link>
            </Stack>
        </Stack>
    )
}

export default NavBar;