import React from 'react'
import { SkinViewer, createOrbitControls } from 'skinview3d'

interface Props {
  skin: string
  width: number
  height: number
  background: string
}

export const MinecraftSkinViewer = ({
  skin,
  width,
  height,
  background
}: Props) => {
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

    viewerControl.enableRotate = true
    viewerControl.enableZoom = false
    viewerControl.enablePan = false

    // Animations
    // const walk = skinViewer.current.animations.add(WalkingAnimation);
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
  }, [skin, width, height, background])

  return <canvas ref={canvas} />
}
