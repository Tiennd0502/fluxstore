import {StorybookConfig} from '@storybook/react-native';

const main: StorybookConfig = {
  stories: ['../src/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-backgrounds',
  ],
};

export default main;
