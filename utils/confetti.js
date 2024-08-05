import confetti from "canvas-confetti";

const count = 200;
const defaults = {
  origin: { y: 0.7 },
  colors: ["#f9ad19", "#73CED0", "#f9f3e7", "#ffeb3b", "#ff8900"],
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio),
  });
}

function shoot() {
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ["#f9ad19", "#FDFFB8", "#EDEDED", "#FCE500", "#DE9B17"],
  };

  confetti({
    ...defaults,
    particleCount: 80,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
}

export const triggerConfetti = (type) => {
  if (type === "stars") {
    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }

  if (type === "form") {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }
};
