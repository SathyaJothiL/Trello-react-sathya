import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function ButtonSizes({name}) {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="outlined" size="large">
          {name}
        </Button>
      </div>
    </Box>
  );
}
