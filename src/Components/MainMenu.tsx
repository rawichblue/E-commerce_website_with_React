import { AppBar, Button, IconButton, Stack, Toolbar } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../img/logo.png';

const MainMenu = () => {
  return (
    <AppBar position='fixed' sx={{ top: 0 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Stack direction='row' spacing={1}>
          <a href="/"><img src={logo} style={{ width: '70px', height: '70px' }} /></a>

          <a href="/" style={{ color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button style={{ color: 'inherit', verticalAlign: 'middle', textAlign: 'center' }}>Home</Button>
          </a>

          <a href="Product" style={{ color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button style={{ color: 'inherit', verticalAlign: 'middle', textAlign: 'center' }}>Product</Button>
          </a>

          <Button color='inherit'>Contact Us</Button>

        </Stack>
        <IconButton size='large' edge="start" color="inherit" aria-label='logo'>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

  )
}

export default MainMenu