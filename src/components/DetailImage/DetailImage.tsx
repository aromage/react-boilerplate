import { hexToRGBA } from '@core/utils/hex-to-rgba';
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { useEffect } from 'react';

type Props = {
  img?: string;
  defaultSrc?: string;
  size?: number;
};

//'/images/default/upload-image.png'

const DetailImage = ({ img, size = 240 }: Props) => {
  if (img !== '') {
    return (
      <img
        style={{ borderRadius: '5%' }}
        src={img}
        alt="image"
        width={size}
        height={size}
      />
    );
  } else {
    return (
      <Box
        sx={{
          width: Math.floor(size / 4),
          height: Math.floor(size / 4),
          display: 'flex',
          borderRadius: '8px',
          alignItems: 'center',
          color: 'action.active',
          justifyContent: 'center',
          backgroundColor: (theme) =>
            hexToRGBA(theme.palette.secondary.main, 0.12),
        }}
      >
        <Icon icon={'mdi:plus'} fontSize="1.5rem" />
      </Box>
    );
  }
};

export default DetailImage;
