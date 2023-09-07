/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 robot_copernicus.glb --transform
Author: ikreinin (https://sketchfab.com/kreinin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/robot-copernicus-9ab010f711214f38a8ed9002247b70db
Title: Robot Copernicus
*/

import React, { useRef,useLayoutEffect } from 'react'
import { useGLTF,useScroll } from '@react-three/drei'
import gsap from 'gsap'
import {useFrame} from '@react-three/fiber'
import { _colorStringFilter } from 'gsap/gsap-core'

export function Robot_copernicus(props) {
  const { nodes, materials } = useGLTF('./models/robot/robot_copernicus-transformed.glb')
  const robot = useRef()
  const scroll = useScroll()
  const tl = useRef()

  useFrame((state,delta)=>{
    tl.current.seek(scroll.offset * tl.current.duration())
    console.log(scroll.offset);
    console.log(tl.current.duration());
  })
  useLayoutEffect(()=>{
    tl.current = gsap.timeline({defaults:{duration :2,ease:'power1.inOut'}})

    tl.current
    .to(robot.current.rotation, {y: -1}, 2)
    .to(robot.current.position, {x: 1}, 2)

    .to(robot.current.rotation, {y: 1}, 6)   
    .to(robot.current.position, {x: -1}, 6)

    .to(robot.current.rotation, {y: 0}, 11)
    .to(robot.current.rotation, {x: 1}, 11)
    .to(robot.current.position, {x: 0}, 11)

    .to(robot.current.rotation, {y: 0}, 13)
    .to(robot.current.rotation, {x: -1}, 13)    
    .to(robot.current.position, {x: 0}, 13)

    .to(robot.current.rotation, {y: 0}, 16)   
    .to(robot.current.rotation, {x: 0}, 16) 
    .to(robot.current.position, {x: 0}, 16)    

    .to(robot.current.rotation, {y: 3}, 20)   
    .to(robot.current.rotation, {x: 0}, 20) 
    .to(robot.current.position, {x: 0}, 20)  
  },[])

  //it runs when symchronously when react calculate ur dom and paints it out
  // not like useEffect that is asynchronous
  return (
    <group {...props} dispose={null} ref={robot}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Metals} rotation={[-Math.PI / 2, 0, 0]} scale={0.8} castShadow>
      
      <meshPhysicalMaterial 
            color="#aaa"  
            roughness={0.5}
            metalness={1}
            reflectivity={0.9}
            iridescence={0.3}
            iridescenceIOR={1}
            iridescenceThicknessRange={[100,1000]}           
          />
        
      </mesh>
      
    </group>
  )
}

useGLTF.preload('./models/robot/robot_copernicus-transformed.glb')