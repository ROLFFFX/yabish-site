export const fbmShader = {
  uniforms: {
    uTime: { value: 0 },
    uScale: { value: 3.1 },
    uDetail: { value: 2.0 },
    uRoughness: { value: 0.486 },
    uLacunarity: { value: 2.0 },
    uDistortion: { value: 0.0 },
    uColorRamp: { value: 0.474 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;

    uniform float uTime;
    uniform float uScale;
    uniform float uDetail;
    uniform float uRoughness;
    uniform float uLacunarity;
    uniform float uDistortion;
    uniform float uColorRamp;

    // Simplex noise function (or use an external library like glsl-noise)
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);

      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));

      vec2 u = f * f * (3.0 - 2.0 * f);

      return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 st) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = uScale;

      for (int i = 0; i < 6; i++) {
        value += amplitude * noise(st);
        st *= uLacunarity;
        amplitude *= uRoughness;
      }
      return value;
    }

    void main() {
      vec2 st = vUv * uScale;
      st += vec2(uDistortion); // Optional distortion
      float n = fbm(st);

      // Apply color ramp
      vec3 color = mix(vec3(0.0), vec3(1.0), smoothstep(uColorRamp - 0.1, uColorRamp + 0.1, n));
      gl_FragColor = vec4(color, 1.0);
    }
  `,
};
