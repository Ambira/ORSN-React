export function initCarousel() {
  const el = document.getElementById("animation-carousel");
  if (!el || typeof FlowCarousel === "undefined") return;

  new FlowCarousel(el, {
    interval: 3000,     // Faster slide (3 seconds)
    ride: true,         // Autoplay
    pause: "hover",     // Pause on hover
  });
}
