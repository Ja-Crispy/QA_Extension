# Installation 

## Dev mode

Run the following commands to install the extension in dev mode:

```bash
npm install
npm run dev
```

Then, enable "Developer mode" in "chrome://extensions/" and click "Load unpacked" and select the "dist" folder in the project directory.
Voila! The extension should now be installed and ready to use.

## Build

Run the following command to build the extension in production mode:

```bash
npm run build
```

Then load the "dist" folder as an unpacked extension, similar to how it's done for Dev mode.