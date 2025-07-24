import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline, Grid } from "@mui/material";
import SideMenu  from './components/SideMenu/SideMenu';

function App() {
 
  const [chat,setChat] = useState([]);
  const [menuOpen,setMenuOpen] = useState(false);


  return (
    <div>
      <CssBaseline/>

      <Grid 
        container 
        sx={{ 
          background: "linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))" 
          }}
        >
          <Grid
            size={{sm: 12 , md:2.7}}
            height={'100vh'}
            sx={{
              bgcolor: 'primary.white',
              '@media (max-width: 900px)': {
                width: '70%',
                transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 400ms ease',
              },
            }}
            position={{ xs: 'fixed', md: 'relative' }}
            zIndex={{ xs: 9999, md: 1 }}
            
          >
            <SideMenu 
              setChat={setChat}
              closeMenu={() => setMenuOpen(false)}
            />
          </Grid>

          <Grid
            size={{sm: 12 , md: 9.3}}
          >
            <Outlet context={{chat: chat, setChat: setChat , handleMobileMenu: setMenuOpen }} />
          </Grid>
        </Grid>
    </div>
  )
}

export default App;