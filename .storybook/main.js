module.exports = {
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register'
  ],
  stories: ["../slices/**/*.stories.js", "../components/**/*.stories.js", "./*.stories.mdx"]
}
