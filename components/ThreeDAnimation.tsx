aimport { useEffect, useRef } from 'react';

export default function VantaBackground() {
    const vantaRef = useRef(null);

    useEffect(() => {
        // Ensure VANTA and THREE are available
        if (typeof window !== 'undefined' && window.VANTA && window.THREE) {
            const vantaEffect = window.VANTA.CLOUDS2({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                texturePath: "./gallery/noise.png" // Ensure this path is correct
            });

            return () => {
                if (vantaEffect) vantaEffect.destroy();
            };
        }
    }, []);

    return (
        <div
            ref={vantaRef}
            style={{ width: '100vw', height: '100vh' }}
        />
    );
}
