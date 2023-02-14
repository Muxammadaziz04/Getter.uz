import { useEffect, useState } from 'react';
import cls from './AnimatedCircle.module.scss'

const AnimatedCircle = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.x, y: e.y })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])
    return (
        <div className={cls.circle}>
            <div>
                <div style={{ top: position.y, left: position.x }}></div>
                <div style={{ top: position.y, left: position.x }}></div>
                <div style={{ top: position.y, left: position.x }}></div>
            </div>
        </div>
    );
}

export default AnimatedCircle;
