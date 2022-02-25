const imgList = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.jpg', 'dog5.jpg'];

const buildSrc = (index) => `dogImages/${imgList[index]}`

const findIndex = (currentImg) => {
    let source = currentImg.src.split('/');
    let imgName = source[source.length-1];
    let index = imgList.indexOf(imgName);
    return index;
}

function changeImage(direction) {
    let nextPos = 0;
    let currentImg = document.querySelector('.mainImg');
    let index = findIndex(currentImg);
    
    if (direction === 'left') {
        if (index != -1 && index != 0) {
            nextPos = index - 1;
            currentImg.src = buildSrc(nextPos);
        }
    } else {
        if (index != -1 && index != imgList.length-1) {
            nextPos = index + 1;
            currentImg.src = buildSrc(nextPos);
        }
    }
}