import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Text, OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas dpi={2}>
        <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={50} />

        <ambientLight intensity={10} />
        <Text
          position={[0, 0, 0]}
          color={'#ffffff'}
          fontSize={1}
          maxWidth={200}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign={'left'}
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
        >
          more
        </Text>
      </Canvas>
    </div>
  );
}
