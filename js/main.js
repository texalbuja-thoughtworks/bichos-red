const modelViewer = document.querySelector("model-viewer");

window.switchSrc = (element, name) => {
  const base = "assets/" + name;
  modelViewer.src = base + '.glb';
};

