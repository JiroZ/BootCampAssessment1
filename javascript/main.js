const imageSelector = document.getElementById('imageSelector');
const imageListDiv = document.getElementById('imageListDiv');
const imagePreviewDiv = document.getElementById('imagePreviewContainer');
const filterBarDiv = document.getElementById("filterBar")

const grayScaleButton = document.getElementById('grayScaleButton')
const blurButton = document.getElementById('blurButton')
const saveButton = document.getElementById('saveButton')
const contrastButton = document.getElementById('contrastButton')

let previewImage = document.getElementById('imagePreview')

let imageId = 0;

blurButton.hidden = true;
contrastButton.hidden = true;
grayScaleButton.hidden = true;

previewImage.hidden = true;
saveButton.hidden = true;

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

    const image = document.createElement("img")
    const button = document.createElement("button");

    reader.addEventListener("load", function() {
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

        blurButton.hidden = false;
        grayScaleButton.hidden = false;
        contrastButton.hidden = false;

        previewImage.hidden = false;
        saveButton.hidden = false;
    })

    return button;
}

saveButton.addEventListener('click', function() {
    previewImage.download = "image.png";
    c.toBlob(function(blob) {
        previewImage.href = URL.createObjectURL(blob);
        previewImage.click();
    }, "image/png");
})

contrastButton.addEventListener('click', function() {
    if(previewImage.classList.contains("contrast")) {
        previewImage.classList.remove("contrast")
    } else {
        previewImage.classList.add('contrast')


        if(!!document.getElementById("filterRangeSlider")) {
            let rangeSlider = document.createElement('input')
            rangeSlider.id = "filterRangeSlider";
            rangeSlider.type = "range";
            rangeSlider.classList.add("form-range")
            rangeSlider.min = "0"
            rangeSlider.max = "100"
            rangeSlider.step = "1"
            rangeSlider.value = "50"
        } else {
            let filterSlider = document.getElementById("filterRangeSlider")
            filterSlider.remove()
        }

        rangeSlider.addEventListener('change', function() {
            previewImage.style.filter = rangeSlider.value
        })

        filterBarDiv.append(rangeSlider);
    }
})

blurButton.addEventListener('click', function() {
    if(previewImage.classList.contains("blur")) {
        previewImage.classList.remove("blur")
    } else {
        previewImage.classList.add('blur')


        let rangeSlider = document.createElement('input')
        rangeSlider.id = "filterRangeSlider";
        rangeSlider.type = "range";
        rangeSlider.classList.add("form-range")
        rangeSlider.min = "0"
        rangeSlider.max = "100"
        rangeSlider.step = "1"
        rangeSlider.value = "50"

        rangeSlider.addEventListener('change', function() {
            previewImage.style.filter = rangeSlider.value
        })

        filterBarDiv.append(rangeSlider);
    }
})

grayScaleButton.addEventListener('click', function() {
    if(previewImage.classList.contains("grayScale")) {
        previewImage.classList.remove("grayScale")
    } else {
        previewImage.classList.add('grayScale')


        let rangeSlider = document.createElement('input')
        rangeSlider.id = "filterRangeSlider";
        rangeSlider.type = "range";
        rangeSlider.classList.add("form-range")
        rangeSlider.min = "0"
        rangeSlider.max = "100"
        rangeSlider.step = "1"
        rangeSlider.value = "50"

        rangeSlider.addEventListener('change', function() {
            previewImage.style.filter = rangeSlider.value
        })

        filterBarDiv.append(rangeSlider);
    }
})

saveButton.addEventListener('click', function() {

})