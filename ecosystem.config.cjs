module.exports = {
    apps: [
      {
        name: 'nuxt-app',
        port: '3030',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  