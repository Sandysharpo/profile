// Scene.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface SceneProps {
  activeSection: string;
}

const Scene = ({ activeSection }: SceneProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const geometryGroupsRef = useRef<THREE.Group[]>([]);
  const floatingObjectsRef = useRef<Array<{ mesh: THREE.Mesh; scale: number; speed: number }>>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const isMobile = window.matchMedia('(max-width: 640px)').matches || 'ontouchstart' in window;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0e27);
    scene.fog = new THREE.Fog(0x0a0e27, 150, 300);
    sceneRef.current = scene;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 50 : 40;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const createParticles = (count: number) => {
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = count;
      const posArray = new Float32Array(particlesCount * 3);
      const colorArray = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 200;
        posArray[i + 1] = (Math.random() - 0.5) * 200;
        posArray[i + 2] = (Math.random() - 0.5) * 200;

        const hue = Math.random();
        const color = new THREE.Color().setHSL(hue, 0.7, 0.6);
        colorArray[i] = color.r;
        colorArray[i + 1] = color.g;
        colorArray[i + 2] = color.b;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.12,
        vertexColors: true,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      return particles;
    };

    const particles = createParticles(isMobile ? 1200 : 8000);
    scene.add(particles);
    particlesRef.current = particles;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d4ff, 2);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff006e, 1.5);
    pointLight2.position.set(-20, -20, 20);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x00ff88, 1);
    pointLight3.position.set(0, -30, 10);
    scene.add(pointLight3);

    const createGeometryGroup = (color: number, accentColor: number) => {
      const group = new THREE.Group();
      const mainMaterial = new THREE.MeshStandardMaterial({ color, metalness: 0.6, roughness: 0.2, emissive: color, emissiveIntensity: 0.3 });
      const accentMaterial = new THREE.MeshStandardMaterial({ color: accentColor, metalness: 0.8, roughness: 0.1, emissive: accentColor, emissiveIntensity: 0.4 });

      const torusGeometry = new THREE.TorusGeometry(3.5, 0.8, 32, 200);
      const torus = new THREE.Mesh(torusGeometry, mainMaterial);
      torus.castShadow = true;
      torus.receiveShadow = true;
      group.add(torus);

      const octahedron = new THREE.Mesh(new THREE.OctahedronGeometry(1.2, 2), accentMaterial);
      octahedron.position.set(6, 0, 0);
      octahedron.castShadow = true;
      octahedron.receiveShadow = true;
      group.add(octahedron);

      const icosahedron = new THREE.Mesh(new THREE.IcosahedronGeometry(1.2, 2), accentMaterial);
      icosahedron.position.set(-6, 0, 0);
      icosahedron.castShadow = true;
      icosahedron.receiveShadow = true;
      group.add(icosahedron);

      group.visible = false;
      scene.add(group);
      return group;
    };

    const homeGroup = createGeometryGroup(0x00d4ff, 0x00ff88);
    const aboutGroup = createGeometryGroup(0xff006e, 0xffa300);
    const projectsGroup = createGeometryGroup(0xffd60a, 0x00d4ff);
    const contactGroup = createGeometryGroup(0x00ff88, 0xff006e);

    geometryGroupsRef.current = [homeGroup, aboutGroup, projectsGroup, contactGroup];

    const floatingObjects = () => {
      const objects: Array<{ mesh: THREE.Mesh; scale: number; speed: number }> = [];
      const count = isMobile ? 6 : 15;
      for (let i = 0; i < count; i++) {
        const geometry = new THREE.TetrahedronGeometry(0.5, 0);
        const material = new THREE.MeshStandardMaterial({ color: 0x00d4ff, metalness: 0.8, roughness: 0.2 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);
        objects.push({ mesh, scale: Math.random() * 0.5 + 0.5, speed: Math.random() * 0.02 + 0.005 });
      }
      return objects;
    };

    floatingObjectsRef.current = floatingObjects();

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointer = (clientX: number, clientY: number) => {
      mouseX = (clientX / (renderer.domElement.clientWidth || window.innerWidth)) * 2 - 1;
      mouseY = -(clientY / (renderer.domElement.clientHeight || window.innerHeight)) * 2 + 1;
    };

    const handleMouseMove = (event: MouseEvent) => handlePointer(event.clientX, event.clientY);
    const handleTouch = (event: TouchEvent) => {
      if (event.touches && event.touches[0]) handlePointer(event.touches[0].clientX, event.touches[0].clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouch, { passive: true });

    const handleResize = () => {
      if (!rendererRef.current || !cameraRef.current || !containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight || window.innerHeight;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (particlesRef.current) {
        particlesRef.current.rotation.x = elapsedTime * 0.02;
        particlesRef.current.rotation.y = elapsedTime * 0.03;
      }

      floatingObjectsRef.current.forEach(({ mesh, speed }) => {
        mesh.rotation.x += speed;
        mesh.rotation.y += speed * 0.7;
        mesh.position.y += Math.sin(elapsedTime * 0.5 + mesh.position.x) * 0.001;
      });

      geometryGroupsRef.current.forEach((group) => {
        if (group.visible) {
          group.rotation.x = elapsedTime * 0.15;
          group.rotation.y = elapsedTime * 0.1;
        }
      });

      targetX = mouseX * 0.5;
      targetY = mouseY * 0.5;

      if (cameraRef.current) {
        cameraRef.current.position.x += (targetX - cameraRef.current.position.x) * 0.08;
        cameraRef.current.position.y += (targetY - cameraRef.current.position.y) * 0.08;
        cameraRef.current.lookAt(scene.position);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current?.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, [activeSection]);

  useEffect(() => {
    const sectionIndex = ['home', 'about', 'projects', 'contact'].indexOf(activeSection);
    geometryGroupsRef.current.forEach((group, index) => {
      group.visible = index === sectionIndex;
    });

    if (cameraRef.current) {
      const targetZ = 40 - sectionIndex * 3;
      const targetY = sectionIndex * 2;
      const animateCam = () => {
        if (!cameraRef.current) return;
        const diffZ = targetZ - cameraRef.current.position.z;
        const diffY = targetY - cameraRef.current.position.y;
        if (Math.abs(diffZ) > 0.5 || Math.abs(diffY) > 0.5) {
          cameraRef.current.position.z += diffZ * 0.12;
          cameraRef.current.position.y += diffY * 0.12;
          requestAnimationFrame(animateCam);
        }
      };
      animateCam();
    }
  }, [activeSection]);

  return <div ref={containerRef} className="fixed inset-0 -z-10 touch-none md:touch-auto" />;
};

export default Scene;
