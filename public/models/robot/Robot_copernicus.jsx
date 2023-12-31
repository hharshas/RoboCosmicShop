/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 robot_copernicus.glb --transform
Author: ikreinin (https://sketchfab.com/kreinin)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/robot-copernicus-9ab010f711214f38a8ed9002247b70db
Title: Robot Copernicus
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/robot_copernicus-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} rotation={[-Math.PI / 2, 0, 0]} scale={0.466} />
    </group>
  )
}

useGLTF.preload('/robot_copernicus-transformed.glb')
