import { Box } from '@mui/material';
import { NavBar } from './NavBar';

interface Props {
  content: React.ReactNode;
}

export function AppLayout(props: Props) {
  const { content } = props;

  return (
    <Box display="flex" sx={{ flexFlow: 'column', height: '100vh' }}>
      <Box
        display="flex"
        sx={{
          backgroundColor: '#D3D3D3',
          height: '100%',
          padding: '2rem 2rem 2rem 2rem',
          overflow: 'hidden',
        }}
      >
        <Box
          display="flex"
          sx={{
            flexFlow: 'column', width: '100%', borderRadius: 4,
          }}
        >
          <NavBar />
          {content}
        </Box>
      </Box>
    </Box>
  );
}
