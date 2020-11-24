module.exports = {
  stories: ["../slices/**/*.stories.js", "../components/**/*.stories.js", "./*.stories.mdx"],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport/register',
    '@storybook/addon-links/register'
  ],
}
