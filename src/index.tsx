import React from 'react'
import { SkinViewer, createOrbitControls, WalkingAnimation } from 'skinview3d'

export const defaultProps = {
  walk: false,
  control: true
}

export type MinecraftSkinViewerProps = {
  skin: string
  width: number
  height: number
  walk: boolean
  control: boolean
  background: string
} & typeof defaultProps

export const MinecraftSkinViewer = ({
  skin,
  width,
  height,
  walk,
  control,
  background
}: MinecraftSkinViewerProps) => {
  const canvas = React.useRef<HTMLCanvasElement>(null)

  React.useLayoutEffect(() => {
    const skinViewer = new SkinViewer({
      skin,
      width,
      height,
      background,
      canvas: canvas.current as HTMLCanvasElement
    })

    // View control
    let viewerControl: any

    if (control) {
      viewerControl = createOrbitControls(skinViewer)
      viewerControl.enablePan = false
      viewerControl.enableZoom = true
      viewerControl.enableRotate = true
    }

    // Animations
    if (walk) {
      skinViewer.animations.add(WalkingAnimation)
    }
    // const rotate = skinViewer.animations.add(skinview3d.RotatingAnimation);
    // const run = skinViewer.animations.add(skinview3d.RunningAnimation);
    // Set the speed of an animation
    // run.speed = 3;
    // Pause single animation
    // run.paused = true;
    // Pause all animations!
    // skinViewer.animations.paused = true;

    return () => {
      if (control) {
        viewerControl.dispose()
      }

      skinViewer.dispose()
    }
  }, [skin, width, height, control, walk, background])

  return <canvas ref={canvas} />
}
