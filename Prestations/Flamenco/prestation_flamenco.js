document.addEventListener('DOMContentLoaded', () => {
    const preserve3dContainer = document.querySelector(".video_preserve3d_container");
    const flecheGaucheVideoFlamencoSlider = document.querySelector(".arrow-left_flamenco");
    const flecheDroiteVideoFlamencoSlider = document.querySelector(".arrow-right_flamenco");
    const containerVideos = document.querySelectorAll('.container_video');

    let currentRotation = 0;

    flecheGaucheVideoFlamencoSlider.addEventListener('click', () => {
        currentRotation += 120; // Rotation de 120 degrés vers la gauche
        preserve3dContainer.style.transform = `rotateY(${currentRotation}deg)`;
    });

    flecheDroiteVideoFlamencoSlider.addEventListener('click', () => {
        currentRotation -= 120; // Rotation de 120 degrés vers la droite
        preserve3dContainer.style.transform = `rotateY(${currentRotation}deg)`;
    });

    const resetTransformations = () => {
        if (window.innerWidth < 1024) {
            currentRotation = 0;
            preserve3dContainer.style.transform = 'none';
            containerVideos.forEach(container => {
                container.style.transform = 'none';
            });
        } else {
            // Reapply the initial transformations
            containerVideos[0].style.transform = 'translateZ(161.5px)';
            containerVideos[1].style.transform = 'rotateY(120deg) translateZ(161.5px)';
            containerVideos[2].style.transform = 'rotateY(-120deg) translateZ(161.5px)';
        }
    };

    const handleResize = () => {
        resetTransformations();
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
});
