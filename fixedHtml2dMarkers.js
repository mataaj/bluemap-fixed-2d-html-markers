const config = {
    pixelToBlockRatio: 1,
    idealHeightTodistanceRatio: 0.651613,
};

const camera = bluemap.mapViewer.camera

function update2dHtmlMarkers() {
    const elements = document.getElementsByClassName("fixed-on-map");
    if (!elements.length) return;

    const distance = camera.distance;
    const height = window.innerHeight;
    const yaw = bluemap.mapViewer.controlsManager.rotation;

    const expectedDistance = config.idealHeightTodistanceRatio * height * config.pixelToBlockRatio;
    const scale = expectedDistance / distance;
    const degrees = -yaw * (180 / Math.PI);
    const ortho = camera.ortho;

    for (const el of elements) {
        if (el.classList.contains("hide-on-3d-view")) {
            if (ortho == 0) {
                el.style.display = "none";
                continue;
            } else {
                el.style.display = "";
            }
        }

        el.style.transform = `scale(${scale}) rotate(${degrees}deg)`;
        el.style.transformOrigin = "top left";
    }
}

(function loop() {
    update2dHtmlMarkers();
    requestAnimationFrame(loop);
})();
