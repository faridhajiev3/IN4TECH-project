const imgTList = document.querySelectorAll('.imgT');

imgTList.forEach((imgT) => {
    const button = imgT.querySelector('button');
    const overlay = imgT.querySelector('.overlay');
    const teacherDesc = imgT.nextElementSibling; // Selects the adjacent teacher description container
    const info = teacherDesc.querySelector('.infos'); // Now selects the .info element inside the description container
    const svgIcon = button.querySelector('svg');

    button.addEventListener('click', () => {
        if (imgT.style.height === '310px' || imgT.style.height === "") {
            imgT.style.height = '250px';
            overlay.style.display = 'block';
            info.style.display = 'block'; // Makes the info visible
            svgIcon.style.transform = 'rotate(90deg)';
        } else {
            imgT.style.height = '310px';
            overlay.style.display = 'none';
            info.style.display = 'none'; // Hides the info
            svgIcon.style.transform = 'rotate(0deg)';
        }
    });
});