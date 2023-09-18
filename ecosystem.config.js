module.exports = {
  apps: [
    {
      name: "eclinic-frontend",
      exec_mode: "cluster",
      port: 3000,
      instances: "1",
      script: "./.output/server/index.mjs",
    },
  ],
};
