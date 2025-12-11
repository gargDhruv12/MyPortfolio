import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// Model loading wrapper component with error boundary
const TargetModelLoader = (props) => {
    // TODO: Replace with correct model URL or local path when available
    // Original URL was: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
    // This URL is currently not accessible, so using placeholder instead
    
    return <TargetPlaceholder {...props} />;
};

// Placeholder component with target-like geometry
const TargetPlaceholder = (props) => {
    const targetRef = useRef();

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
            });
        }
    });

    return (
        <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            {/* Stand/base - brown cylinder */}
            <mesh>
                <cylinderGeometry args={[0.3, 0.3, 1.5, 32]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>
            {/* Outer red ring */}
            <mesh position={[0, 0.8, 0]}>
                <torusGeometry args={[0.5, 0.05, 16, 32]} />
                <meshStandardMaterial color="#FF0000" />
            </mesh>
            {/* Middle white ring */}
            <mesh position={[0, 0.8, 0]}>
                <torusGeometry args={[0.35, 0.05, 16, 32]} />
                <meshStandardMaterial color="#FFFFFF" />
            </mesh>
            {/* Inner red ring */}
            <mesh position={[0, 0.8, 0]}>
                <torusGeometry args={[0.2, 0.05, 16, 32]} />
                <meshStandardMaterial color="#FF0000" />
            </mesh>
            {/* Center dot */}
            <mesh position={[0, 0.8, 0]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#FF0000" />
            </mesh>
        </group>
    );
};

const Target = TargetModelLoader;

export default Target;
