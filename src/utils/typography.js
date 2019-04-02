import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  scaleRatio: 3,
  googleFonts: [
    { name: 'Pacifico', styles: ['400'] },
    {
      name: 'Open Sans',
      styles: ['300', '400', '700'],
    },
    { name: 'Nanum Gothic', styles: ['300', '400', '700'] },
  ],
  headerFontFamily: [
    'Nanum Gothic',
    'Open Sans',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Nanum Gothic',
    'Open Sans',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  headerColor: '#2A2A2A',
  bodyColor: '#1F1F1F',
  includeNormalize: true,
});

export default typography;
