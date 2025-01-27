




import * as THREE from 'three'
import { useRef, useReducer, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { easing } from 'maath'

import "../App.css"
import { Effects } from '../Effects'

const accents = ['#ff4060', '#ffcc00', '#20ffa0', '#4060ff']
const shuffle = (accent = 0) => [
  { color: '#444', roughness: 0.1, metalness: 1 },
  { color: '#444', roughness: 0.1, metalness: 1 },
  { color: '#444', roughness: 0.1, metalness: 1 },
  { color: '#fff', roughness: 0.1, metalness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true },
  { color: '#444', roughness: 0.1 },
  { color: '#444', roughness: 0.3 },
  { color: '#444', roughness: 0.3 },
  { color: '#fff', roughness: 0.1 },
  { color: '#fff', roughness: 0.2 },
  { color: '#fff', roughness: 0.1 },
  { color: accents[accent], roughness: 0.1, accent: true, transparent: true, opacity: 0.5 },
  { color: accents[accent], roughness: 0.3, accent: true },
  { color: accents[accent], roughness: 0.1, accent: true }
]

export default function PageOne(props) {
  const [accent, cycleAccent] = useReducer((state) => ++state % accents.length, 0)
  const [targetScale, setTargetScale] = useState(1) // Target scale for easing
  const [isGrowing, setIsGrowing] = useState(true) // Track growth or shrinkage

  const connectors = useMemo(() => shuffle(accent), [accent])

  const handleClick = () => {
    if (isGrowing) {
      setTargetScale(3) // Increase size
    } else {
      setTargetScale(1) // Reset size
    }
    setIsGrowing(!isGrowing) // Toggle the state
  }

  return (
    <div
      style={{ height: '100vh' }}
      className="app w-full h-[80vh] absolute top-0 left-0"
      onClick={handleClick}
    >
      <Canvas
        flat
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 30], fov: 17.5, near: 2, far: 50 }}
        {...props}
      >
        <color attach="background" args={['#141622']} />
        <Physics timeStep="vary" gravity={[0, 0, 0]}>
          <Pointer />
          {connectors.map((props, i) => (
            <Sphere key={i} targetScale={targetScale} {...props} />
          ))}
        </Physics>
        <Environment resolution={256}>
          <group rotation={[-Math.PI / 3, 0, 1]}>
            <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
            <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 3} position={[10, 1, 0]} scale={8} />
            <Lightformer form="ring" color="#4060ff" intensity={90} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={2} />
          </group>
        </Environment>
        <Effects />
      </Canvas>
    </div>
  )
}

function Sphere({ position, vec = new THREE.Vector3(), targetScale = 1, color = 'white', r = THREE.MathUtils.randFloatSpread, ...props }) {
  const api = useRef()
  const ref = useRef()
  const pos = useMemo(() => position || [r(10), r(10), r(10)], [])
  const scale = useRef(targetScale)

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    // Smoothly animate scale using easing
    easing.damp(scale, 'current', targetScale, 0.25, delta)
    ref.current.scale.set(scale.current, scale.current, scale.current)

    // Enhance interaction by applying a stronger impulse
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.5))
    easing.dampC(ref.current.material.color, color, 0.2, delta)
  })

  return (
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <BallCollider args={[targetScale]} />
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial {...props} />
      </mesh>
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0)))
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  )
}
