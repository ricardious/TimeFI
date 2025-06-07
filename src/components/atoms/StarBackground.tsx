import { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useThemeContext } from "@context/ThemeContext";

const StarBackground = () => {
  const ref: any = useRef(null);
  const { isDark } = useThemeContext();

  // Solution found on StackOverflow (https://stackoverflow.com/questions/62183371/):
  // Don’t use NaN/undefined for BufferGeometry positions; use ShapeBufferGeometry to represent holes instead.
  const sphere = useMemo(() => {
    const positions = new Float32Array(1000 * 3);

    for (let i = 0; i < 1000; i++) {
      const i3 = i * 3;

      let x, y, z;
      do {
        x = (Math.random() - 0.5) * 2;
        y = (Math.random() - 0.5) * 2;
        z = (Math.random() - 0.5) * 2;
      } while (x * x + y * y + z * z > 1);

      const radius = 1.2;
      positions[i3] = x * radius;
      positions[i3 + 1] = y * radius;
      positions[i3 + 2] = z * radius;
    }

    return positions;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={isDark ? "#fbbf24" : "#4338ca"}
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
