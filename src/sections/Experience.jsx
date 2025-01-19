import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { workExperiences } from '../constants/index.js';

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle');

    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600">
                <p className="head-text">My Work Experience</p>

                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas
                         shadows
                         gl={{
                             antialias: true, // Smooth edges
                             preserveDrawingBuffer: true, // Retain context content
                         }}
                         camera={{
                             position: [0, 2, 10], // Camera position
                             fov: 50, // Field of view
                             near: 0.1,
                             far: 1000,
                         }}
                         onCreated={({ gl, scene, camera }) => {
                             // Handle WebGL context loss
                             gl.domElement.addEventListener('webglcontextlost', (event) => {
                                 event.preventDefault();
                                 console.warn('WebGL context lost');
                             });
                     
                             // Handle WebGL context restoration
                             gl.domElement.addEventListener('webglcontextrestored', () => {
                                 console.log('WebGL context restored');
                                 gl.resetState(); // Reset WebGL state
                     
                                 // Reinitialize scene and camera if necessary
                                 scene.background = null; // Example: Reset background if needed
                                 camera.position.set(0, 2, 10); // Reset camera position
                             });
                         }}
                        >

                            
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                            <Suspense fallback={<CanvasLoader />}>
                                <Developer position-y={-3} scale={3} animationName={animationName} />
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({id,name,pos,duration,title,icon,animation}) => (
                                <div
                                    key={id}
                                    onClick={() => setAnimationName(animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full" src={icon} alt="logo" />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{name}</p>
                                        <p className="text-sm mb-5">
                                            {pos} -- <span>{duration}</span>   
                                            {/* span tag */}
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;