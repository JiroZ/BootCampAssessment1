const imageSelector = document.getElementById('imageSelector');
const imageListDiv = document.getElementById('imageListDiv');
const imagePreviewDiv = document.getElementById('imagePreviewContainer');
let previewImage = document.getElementById('imagePreview')

const grayScaleButton = document.getElementById('grayScaleButton')
const blurButton = document.getElementById('blurButton')

let previousProperty = "";

let imageId = 0;

blurButton.addEventListener('click', function() {
    if(previewImage.classList.contains("blur")) {
        previewImage.classList.remove("blur")
    } else {
        previewImage.classList.add('blur')
    }
})

grayScaleButton.addEventListener('click', function() {
    if(previewImage.classList.contains("grayScale")) {
        previewImage.classList.remove("grayScale")
    } else {
        previewImage.classList.add('grayScale')
    }
})

imageSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
    for (let item of fileList) {
        console.log(item);
        imageListDiv.append(createImageButton(item, imageId++));
    }
});

function createImageButton(source, id) {
    let reader = new FileReader();
    let image = document.createElement("img")
    let button = document.createElement("button");

    reader.addEventListener("change", function() {
        image.src = reader.result;
        image.alt = id;
    }, false)

    if(source) {
        reader.readAsDataURL(source);
    }

    image.classList.add("imageSelect")
    button.classList.add('btn')

    previewImage.src = reader.result;

    button.append(image);

    button.addEventListener('click', function () {
        previewImage.src = reader.result;
        previewImage.alt = id;
    })

    return button;
}

