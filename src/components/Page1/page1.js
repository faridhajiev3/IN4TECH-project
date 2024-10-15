const images = [
    'https://s3-alpha-sig.figma.com/img/11c6/a026/cda468b23ace4d9a71f60dfc1de94e86?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eDYhlTLunJJa-Enbaow6cKV508ImTjHATvXUQ-wD1ga5tbZ0KLcIa0vFPyhzDHJecPe41MFDHgTK-NwGkMMpYD-zRlwhH3Gy5fqRKOChjrFrttjnkg3CiuR2voWPAIjveFV1nhhulETDwt-rlX7rIPLHOL5VA0WrO3IsbTET5mwRoTd9v8Z~C35bKarGvksWGGVfd0d5iQBAi4rAkyz7yVr8pmV9tCdCumZOxC3hD2AcdjEzHGwAQHMg1l9x6FdzwYrl-5eoTHOVNxXBryxAv7VPE-SZEWjiOL7Q6Uk~mGJJl1s1TJyQpzPEs68y2ymli4oJNlFnbJgvSGbUki-x4A__',
    'https://fastly.picsum.photos/id/1/800/400.jpg?hmac=lP5ueMCjxeLFC5HJPNkGzLE9oZOcWhPpOQZ12itchyY',
    'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
    'https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I',
];


document.querySelectorAll('.part-document').forEach((element, index) => {
    element.addEventListener('click', () => {
        document.querySelectorAll('.part-document').forEach(el => el.classList.remove('active'));
        element.classList.add('active');
        document.querySelector('.sliderIn').style.backgroundImage = `url(${images[index]})`;
    });
});
