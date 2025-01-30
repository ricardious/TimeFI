"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = ({ isDarkMode }: any) => {
    const ref: any = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );

    useFrame((_, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    })

    const colors = {
        light: {
            stars: "#2d3436",
            background: "rgb(214, 219, 220)"
        },
        dark: {
            stars: "#fff",
            background: "rgb(17, 24, 39)"
        }
    };


    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled

            >
                <PointMaterial
                    transparent
                    color={isDarkMode ? colors.dark.stars : colors.light.stars}
                    size={0.002}
                    sizeAttenuation={true}
                    dethWrite={false}

                />
            </Points>
        </group>
    )
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
)

export default StarsCanvas;