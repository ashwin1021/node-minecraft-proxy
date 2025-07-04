const createProxy = require('./src/createProxy');

const TARGET_HOST = 'play.jinxko.com';
const TARGET_PORT = 25566;

if (!TARGET_HOST || !TARGET_PORT) {
  console.error('❌ TARGET_HOST and TARGET_PORT must be set');
  process.exit(1);
}

createProxy({
  port: 25565,
  motd: 'Proxy → play.jinxko.com',
  'max-players': 100,
  version: false
}, {
  main: {
    host: TARGET_HOST,
    port: TARGET_PORT,
    isDefault: true,
    isFallback: true
  }
}, {
  enablePlugins: false
});
