# Amber App

Amber app uses [Quasar Framework](https://quasar.dev/)

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
# web SPA
quasar dev
# electron
quasar dev -m electron
# pwa
quasar dev -m pwa
# mobile
quasar dev -m capacitor -T [android|ios]
```

### Lint the files
```bash
yarn run lint
```

### Build the web app for production
```bash
# web SPA
quasar build
# electron
quasar build -m electron
# pwa
quasar build -m pwa
# mobile
quasar build -m capacitor -T [android|ios]
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
