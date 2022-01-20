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
  const skinViewer = React.useRef<SkinViewer>()

  const canvas = React.useRef<HTMLCanvasElement>(null)

  React.useLayoutEffect(() => {
    skinViewer.current = new SkinViewer({
      skin,
      width,
      height,
      background,
      canvas: canvas.current as HTMLCanvasElement
    })

    // View control
    const viewerControl = createOrbitControls(skinViewer.current)

    viewerControl.enablePan = false
    viewerControl.enableZoom = true
    viewerControl.enableRotate = true

    if (control) {
      viewerControl.enableZoom = false
      viewerControl.enableRotate = false
    }

    // Animations
    if (walk) {
      skinViewer.current.animations.add(WalkingAnimation)
    }
    // const rotate = skinViewer.current.animations.add(skinview3d.RotatingAnimation);
    // const run = skinViewer.current.animations.add(skinview3d.RunningAnimation);
    // Set the speed of an animation
    // run.speed = 3;
    // Pause single animation
    // run.paused = true;
    // Pause all animations!
    // skinViewer.animations.paused = true;

    return () => {
      viewerControl.dispose()

      if (skinViewer.current) {
        skinViewer.current.dispose()
      }
    }
  }, [skin, width, height, control, walk, background])

  return <canvas ref={canvas} />
}
