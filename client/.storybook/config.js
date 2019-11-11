import { configure, setAddon, addDecorator } from '@storybook/react';


// automatically import all files ending in *.stories.js
configure(require.context('../src/', true, /\.stories\.js$/), module);

