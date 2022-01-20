# @wiicamp/react-minecraft-skin-viewer

> Minecraft skin viewer for ReactJS

[![NPM](https://img.shields.io/npm/v/@wiicamp/react-minecraft-skin-viewer.svg)](https://www.npmjs.com/package/@wiicamp/react-minecraft-skin-viewer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @wiicamp/react-minecraft-skin-viewer
```

## Usage

```tsx
import React from 'react'

import { MinecraftSkinViewer } from '@wiicamp/react-minecraft-skin-viewer'

class Example extends React.Component {
  render() {
    return (
      <MinecraftSkinViewer
        skin="https://my.skin.url"
        width={320}
        height={480}
        background="red"
      />
    )
  }
}
```

## License

MIT © [lampn9397](https://github.com/lampn9397)
