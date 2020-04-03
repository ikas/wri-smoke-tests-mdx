import React from 'react'
import { Box } from 'theme-ui'

export default ({ children }) => (
  <Box style={{ width: '100%', height: '100%', paddingLeft: '16px', paddingRight: '16px' }}>
    <img
      src="https://www.vizzuality.com/wp-content/themes/vizzuality_2/images/logo-white.svg"
      alt="Vizzuality"
      style={{ height: '70px', width: '100px', position: 'absolute' }}
    />
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}>
        {children}
    </Box>
  </Box>
)
