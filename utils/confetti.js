import confetti from "canvas-confetti";

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
    console.log("form");
  }
};
