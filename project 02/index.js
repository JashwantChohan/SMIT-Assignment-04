const box = document.getElementById("hoverBox");

box.addEventListener("mousemove", (e) => {
  const rect = box.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const offsetY = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const moveX = (offsetX - centerX) / 10;
  const moveY = (offsetY - centerY) / 10;

  box.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

box.addEventListener("mouseleave", () => {
  box.style.transform = "translate(0, 0)";
});
