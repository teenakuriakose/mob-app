import React from 'react';
import Svg, {Path, Text} from 'react-native-svg';

const SvgMonster = props => (
  <Svg viewBox="0 0 90 112.5" width={props.width} height={props.height} {...props} fill={props.color}>
    <Path d="M45.277 35a2.096 2.096 0 000-4.19 2.1 2.1 0 00-2.1 2.1c0 1.15.94 2.09 2.1 2.09z" />
    <Path d="M79.107 70.49c-.1-.03-.2-.04-.3-.04.13-8.54-8.68-22.9-13.8-27.28 2.17-.21 3.79-1 3.79-1.96.01-.87-1.32-1.6-3.19-1.9.05-.39.07-.79.09-1.19 1.65-1.45 2.52-3.05 1.96-3.84-.36-.5-1.23-.56-2.31-.24-.1-.46-.23-.92-.37-1.36.93-1.04 1.35-2.05.95-2.6-.32-.46-1.15-.48-2.16-.16a17.42 17.42 0 00-2.18-3.11V8.2l-7.53 13.36c-2.66-1.09-5.64-1.69-8.78-1.69-3.15 0-6.13.6-8.79 1.69L28.957 8.2v18.61c-.85.96-1.57 2.01-2.18 3.11-1.01-.33-1.83-.3-2.16.16-.39.55.03 1.56.96 2.59-.17.5-.31 1.01-.42 1.53-1.31-.48-2.4-.5-2.81.08-.62.87.51 2.75 2.53 4.31.02.21.02.43.04.64-2.14.24-3.72 1.03-3.72 1.98.01.96 1.62 1.75 3.8 1.96-5.13 4.38-13.94 18.74-13.81 27.28-.1 0-.2.01-.3.04-.54.15-.85.71-.69 1.24.15.53.68.83 1.21.7.04.17.08.33.13.5-.51.17-.8.71-.65 1.22.15.54.71.85 1.25.7.1-.03.19-.08.27-.13.11.14.22.28.34.42-.24.25-.35.62-.25.98.16.53.72.84 1.25.69.28-.08.5-.27.62-.51.17.08.34.15.52.21-.06.19-.06.39-.01.59.16.54.72.85 1.25.69.4-.11.68-.46.72-.85.14.02.26.04.4.04h.02c0 .08.01.16.03.24.16.54.71.85 1.25.69.49-.14.79-.62.71-1.12.18-.05.36-.11.53-.18.21.42.7.64 1.17.51.53-.16.84-.72.69-1.25-.04-.13-.1-.24-.17-.33.18-.17.34-.35.5-.53.24.14.53.2.81.12.54-.16.85-.72.69-1.25a.94.94 0 00-.4-.55c.5-.98 1.19-3.19 1.91-5.99 1.27 3.46 2.95 6.56 4.81 8.74a9.089 9.089 0 00-4.91 5.72h17.42a9.147 9.147 0 00-2.65-4.23c1.21-.92 2.5-1.85 5.34-1.85 2.84.01 4.04 1.05 5.14 2.05-1.14 1.09-2 2.47-2.44 4.03h17.41a9.044 9.044 0 00-4.54-5.54c1.87-2.09 3.44-5 4.61-8.31.66 2.52 1.28 4.47 1.74 5.38-.19.13-.33.31-.4.55-.15.53.16 1.09.69 1.25.29.08.58.02.81-.12.16.18.33.36.5.53-.07.09-.13.2-.17.33-.15.53.16 1.09.7 1.25.46.13.95-.09 1.17-.51.17.07.34.13.52.18-.08.5.22.98.71 1.12.54.16 1.1-.15 1.25-.69.02-.08.03-.16.04-.24h.01c.14 0 .27-.02.4-.04.05.39.32.74.72.85.54.16 1.1-.15 1.25-.69.06-.2.05-.4-.01-.59.18-.06.36-.13.52-.21.13.24.34.43.62.51.54.15 1.1-.16 1.25-.69.1-.36-.01-.73-.25-.98.12-.14.24-.28.35-.42.08.05.17.1.26.13.54.15 1.1-.16 1.25-.7a1 1 0 00-.64-1.22c.04-.17.09-.33.12-.5.53.13 1.07-.17 1.22-.7.15-.53-.16-1.09-.7-1.24zm-33.83-43.53c3.28 0 5.95 2.66 5.95 5.95s-2.67 5.95-5.95 5.95c-3.29 0-5.96-2.66-5.96-5.95s2.67-5.95 5.96-5.95zm0 23.16c-9.08 0-16.52-5.96-17.29-13.56 3.38 5.2 9.85 8.71 17.29 8.71 7.43 0 13.9-3.51 17.28-8.71-.77 7.6-8.21 13.56-17.28 13.56z" />
  </Svg>
);

export default SvgMonster;