import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 150,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.01,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1.8,
              opacity_min: 0.01,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
