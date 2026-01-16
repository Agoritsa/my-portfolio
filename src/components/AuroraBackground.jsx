import React, { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";
import "../index.css";

const AuroraBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderer = new Renderer({ dpr: 2, alpha: true, canvas: canvasRef.current });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);

    const vertex = `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
      }`;

    const fragment = `
      precision highp float;
      varying vec2 vUv;
      uniform float uTime;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;

      float noise(vec2 p) {
        return sin(p.x) * sin(p.y);
      }

      void main() {
        vec2 p = vUv * 5.0;
        float n = noise(p + uTime * 0.05);
        vec3 color = mix(uColor1, uColor2, n);
        gl_FragColor = vec4(color, 1.0);
      }`;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new Color("#3B1C68") }, 
        uColor2: { value: new Color("#1A103D") }, 
        uColor3: { value: new Color("#ffffff") }, 
      },
    });

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    const resize = () => renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", resize);
    resize();

    requestAnimationFrame(function update(t) {
      requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.01;
      renderer.render({ scene: mesh });
    });

    return () => window.removeEventListener("resize", resize);
  }, []);

  return <canvas ref={canvasRef} className="aurora-canvas" />;
};

export default AuroraBackground;