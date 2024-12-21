import { Link, Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Красивый AppBar с увеличенным расстоянием между словами и элементами */}
      <AppBar position="static" sx={{ backgroundColor: '#1976d2', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)', borderRadius: '0 0 10px 10px' }}>
        <Toolbar sx={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'space-between', gap: '2rem' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: '0.2rem', // Увеличиваем расстояние между словами
            }}
          >
            ГАЛЕРЕЯ АЛЬБОМОВ
          </Typography>
          <Box display="flex" alignItems="center" gap="1.5rem">
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                marginRight: '0', // Убираем лишний отступ справа
                color: '#fff',
                fontWeight: 'bold',
                letterSpacing: '0.1rem', // Увеличиваем расстояние между словами в кнопках
              }}
            >
              Пользователи
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/albums"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                letterSpacing: '0.1rem', // Увеличиваем расстояние между словами в кнопках
              }}
            >
              Альбомы
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box flexGrow={1} padding={2} maxWidth="1280px" margin="0 auto">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;