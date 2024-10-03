const imgTList = document.querySelectorAll('.imgT');

imgTList.forEach((imgT) => {
    const button = imgT.querySelector('button');
    const overlay = imgT.querySelector('.overlay');
    const teacherDesc = imgT.nextElementSibling; 
    const info = teacherDesc.querySelector('.infos'); 
    const svgIcon = button.querySelector('svg');

    button.addEventListener('click', () => {
        if (imgT.style.height === '310px' || imgT.style.height === "") {
            imgT.style.height = '250px';
            overlay.style.display = 'block';
            info.style.display = 'block'; 
            svgIcon.style.transform = 'rotate(90deg)';
        } else {
            imgT.style.height = '310px';
            overlay.style.display = 'none';
            info.style.display = 'none'; 
            svgIcon.style.transform = 'rotate(0deg)';
        }
    });
});