const nav = document.querySelector('#header_container');
const footer = document.querySelector('#footer_container');
fetch('/Header.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data;
  });
fetch('/Footer.html')
  .then(res => res.text())
  .then(data =>{
    footer.innerHTML = data;
  })
  const canvas = document.getElementById('headerCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Create a camera and a scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  
  // Create a geometry, material, and mesh (e.g., a rotating cube)
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  // Animation loop
  function animate() {
      requestAnimationFrame(animate);
  
      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
  
      // Render the scene
      renderer.render(scene, camera);
  }
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
  });