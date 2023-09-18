module.exports = {
  apps: [
    {
      name: "find24-frontend-dev",
      exec_mode: "cluster",
      port: 3000,
      instances: "1",
      script: "./.output/server/index.mjs",
    },
  ],
};
