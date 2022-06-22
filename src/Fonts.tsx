import { Global } from '@emotion/react';

function Fonts() {
  return (
    <Global
      styles={`
    @font-face {
      font-family: 'MabryPro-Regular';
      font-style: normal;
      font-weight: 400 ;
      font-display: swap;
      src: url('/typos/MabryPro-Regular.woff2') format('woff2');
    }
    @font-face {
      font-family: 'MabryPro-Light';
      font-style: normal;
      font-weight: 400 ;
      font-display: swap;
      src: url('/typos/MabryPro-Light.woff2') format('woff2');
    }
    @font-face {
      font-family: 'MabryPro-Bold';
      font-style: normal;
      font-weight: 400 ;
      font-display: swap;
      src: url('/typos/MabryPro-Bold.woff2') format('woff2');
    }
    @font-face {
      font-family: 'TAN-PEARL-Regular';
      font-style: normal;
      font-weight: 400 ;
      font-display: swap;
      src: url('/typos/TAN-PEARL-Regular.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Cambon-ExtraLight';
      font-style: normal;
      font-weight: 400 ;
      font-display: swap;
      src: url('/typos/Cambon-ExtraLight.woff2') format('woff2');
    }
 `}
    />
  );
}

export default Fonts;
