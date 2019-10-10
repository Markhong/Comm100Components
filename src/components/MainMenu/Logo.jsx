import React from 'react';
import SVGIcon from '@material-ui/core/SvgIcon';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Logo = () => {
  return (
    <Box height={60} display="flex" alignItems='center' justifyContent='center'>
      <Link href='https://www.comm100.com' target='_blank'>
        <SVGIcon viewBox="0 0 40 26">
          <path style={{ fill: '#329ED8' }} d="M28.5,1.1V0.2c-6.9,0-12.4,5.6-12.4,12.4h7.8C23.9,10,26,8,28.5,8V7.1c3,0,5.5,2.5,5.5,5.5
            c0,3.1-2.5,5.5-5.5,5.5c-1.7,0-3.2-0.7-4.2-1.9c-0.6,2-1.6,3.9-3,5.4c2,1.6,4.5,2.5,7.2,2.5c6.3,0,11.5-5.1,11.5-11.5
            C40,6.2,34.9,1.1,28.5,1.1z"/>
          <path style={{ fill: '#ffffff' }} d="M16.1,12.6c0,2.5-2.1,4.6-4.6,4.6v0.9c-3,0-5.5-2.5-5.5-5.5c0-3,2.5-5.5,5.5-5.5c1.7,0,3.2,0.7,4.2,1.9
            c0.6-2,1.6-3.9,3-5.4c-2-1.6-4.5-2.5-7.2-2.5C5.1,1.1,0,6.2,0,12.6c0,6.3,5.1,11.5,11.5,11.5V25c6.9,0,12.4-5.6,12.4-12.4H16.1z"/>
        </SVGIcon>
      </Link>
    </Box>
  );
};

export default Logo;
