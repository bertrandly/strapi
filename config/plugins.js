module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: 'darling-sprinkles-62ef0b',
          id: "824173c6-8e22-48b6-935e-af35607fabd0",
          buildHook: "https://api.netlify.com/build_hooks/65a542f80914eb16f79eb17c",
          branch: 'master' // optional
        }
      ]
    },
  },
});
