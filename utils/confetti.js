import confetti from "canvas-confetti";

// const scalar = 2;
// const pineapple = confetti.shapeFromText({ text: "🍍", scalar });

// const origin = { y: 0.75 };
// const colors = [
//   "#f9583c",
//   "#ffffff",
//   "#F9AD19",
//   "#08e8c9",
//   "#4575F3",
//   "#ff0000",
// ];
// const spread = 50;
// const particleCount = 180;
// const startVelocity = 60;

var defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  colors: ["#f9ad19", "#FDFFB8", "#EDEDED", "#FCE500", "#DE9B17"],
};

function shoot() {
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

export const triggerConfetti = () => {
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};
