function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve({
                width: img.width,
                height: img.height,
                src: url
            });
        };
        img.onerror = (error) => {
            reject(error);
        };
        img.src = url;
    });
}

// Пример использования функции
const imageUrl = 'https://example.com/image.jpg';
loadImage(imageUrl)
    .then(data => {
        console.log('Изображение успешно загружено:', data);
    })
    .catch(error => {
        console.error('Ошибка загрузки изображения:', error);
    });
