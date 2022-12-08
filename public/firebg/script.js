
const vertex = `
varying vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.0);
}
`;

const fragment = `
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColor1;
uniform vec3 uColor2;

varying vec2 vUv;

float random (in vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  // Four corners in 2D of a tile
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) +
    (c - a)* u.y * (1.0 - u.x) +
    (d - b) * u.x * u.y;
}

#define OCTAVES 6
float fbm (in vec2 st) {
  // Initial values
  float value = 0.0;
  float amplitude = .5;
  float frequency = 0.;
  //
  // Loop of octaves
  for (int i = 0; i < OCTAVES; i++) {
    value += amplitude * noise(st);
    st *= 2.;
    amplitude *= .5;
  }
  return value;
}

void main() {
  // Constants
  float velocity = 60.005;
  float scale = 0.01;
  float brightness = 0.6;
  float shift = 0.0;

  // Create noises
  vec2 customFragCoord = vec2(gl_FragCoord.x, gl_FragCoord.y - uTime * velocity) * scale;
  float noise1 = fbm(customFragCoord);
  float noise2 = brightness * (fbm(customFragCoord + noise1 - (uTime / 6.0)) * shift);
  // float noise3 = fbm(vec2(noise1, noise2));


  // Create vertical mask
  vec3 verticalGradient = vec3(4.0 * gl_FragCoord.y / uResolution.y) - 0.1;
  

  // Colors
  // vec3 cLight = vec3(130, 170, 255) / 255.0;
  vec3 cDark = vec3(255, 255, 255) / 255.0;
  // vec3 cPurple = vec3(199, 146, 234) / 255.0;
  // vec3 cRed = vec3(255, 82, 83) / 255.0;
  // vec3 cOrange = vec3(255, 203, 107) / 255.0;
  // vec3 cYellow = vec3(255, 203, 107) / 255.0;
  
  // Colorize
  vec3 color = mix(uColor1 / 255.0, cDark, noise2) + mix(uColor2 / 255.0, cDark, noise1);
  
  
  // Fire
  vec3 fire = color - verticalGradient - noise2 + noise1;
  gl_FragColor = vec4(fire, 1.0);
}
`;

/** Create a renderer */
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'),antialias: true,alpha:true });
renderer.setPixelRatio(window.devicePixelRation); // Set device pixel ratio
renderer.setSize(window.innerWidth, window.innerHeight); // Resize renderer
renderer.setClearAlpha(0)
renderer.setClearColor(0xEEEEEE, 0)// WebGL background color
renderer.physicallyCorrectLights = true; // Use physically correct lighting mode
renderer.outputEncoding = THREE.sRGBEncoding; // Output encoding
renderer.setClearAlpha(0)
/** Setup a perspective camera */
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000);
camera.position.set(0, 0, 2);

/** Setup your scene */
const scene = new THREE.Scene();
/** Generate a plane geometry */
const geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1);

/** Create a material rendered with custom shaders */
const material = new THREE.ShaderMaterial({
  extensions: {
    derivatives: '#extention GL_OES_standard_derivatives : enable' },

  uniforms: {
    uResolution: { type: 'v2', value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uTime: { type: 'f', value: 0 },
    uColor1: { type: 'v3', value: new THREE.Vector3(130, 170, 255) },
    uColor2: { type: 'v3', value: new THREE.Vector3(130, 170, 255) } },

  // side: THREE.DoubleSide,
  // wireframe: true,
  // transparent: true,
  vertexShader: vertex,
  fragmentShader: fragment });


/** Setup a triangular polygon mesh */
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/** Window resize event handler */
const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.fov = 2 * (180 / Math.PI) * Math.atan(1 / (2 * camera.position.z));
  camera.updateProjectionMatrix();

  if (window.innerWidth / window.innerHeight > 1) {
    mesh.scale.x = mesh.scale.y = window.innerWidth / window.innerHeight;
  }

  material.uniforms.uResolution.value.x = window.innerWidth;
  material.uniforms.uResolution.value.y = window.innerHeight;
};
resize();


/** Render */
try {
  void function animate() {
    requestAnimationFrame(animate);

    /** Update uniform values */
    material.uniforms.uTime.value += 0.05;

    renderer.render(scene, camera);
  }();
} catch (err) {
  console.log(err);
}

let isChanging = false;
const changeDuration = 1500;




function getColor(rgbColor) {
  const [x, y, z] = rgbColor.replace(/\s/g, '').split(',');

  return { x, y, z };
}


function changeColor(rgbColor1, rgbColor2) {
  const timeline = anime.timeline({
    duration: changeDuration,
    easing: 'linear',
    begin: () => isChanging = true,
    complete: () => isChanging = false });


  timeline.add({
    targets: material.uniforms.uColor1.value,
    ...getColor(rgbColor1) });


  timeline.add({
    targets: material.uniforms.uColor2.value,
    ...getColor(rgbColor2) },
  0);
}

setTimeout(() => {
  changeColor('255,203,107', '255,82,83');
}, 3000);
