import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import starImage from '../../assets/images/logo.png'; // 별 이미지의 경로에 맞게 수정해야 함

function NightSky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });
    renderer.setSize(width, height);

    const starsGeometry = new THREE.BufferGeometry();
    const starTexture = new THREE.TextureLoader().load(starImage); // 별 이미지의 경로에 맞게 수정해야 함
    const starMaterial = new THREE.SpriteMaterial({ map: starTexture, color: 0xffffff });

    const stars = new THREE.Group();

    for (let i = 0; i < 220; i++) {
      const star = new THREE.Sprite(starMaterial);

      star.position.x = THREE.MathUtils.randFloatSpread(15);
      star.position.y = THREE.MathUtils.randFloatSpread(15);
      star.position.z = THREE.MathUtils.randFloatSpread(15);

      star.scale.set(0.2, 0.2, 1); // 별의 크기 조절

      stars.add(star);
    }

    scene.add(stars);

    function animate() {
      requestAnimationFrame(animate);

      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      renderer.dispose();
      starsGeometry.dispose();
      starTexture.dispose();
      starMaterial.dispose();
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default NightSky;
