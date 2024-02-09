 // For Image 
 function addImage() {
    const imageInput = document.getElementById('imageInput');
    imageInput.click();
    imageInput.addEventListener('change', handleImageSelect);
}

function handleImageSelect(event) {
    const imageList = document.getElementById('imageList');
    imageList.style = 'border: 1px solid grey';
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            img.style = 'margin:5px 100px 10px';
        
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Delete';
            deleteButton.onclick = function () {
                imageList.removeChild(imageContainer);
            };

            const updateButton = document.createElement('button');
            updateButton.innerText = 'Update';
            updateButton.onclick = function () {
                updateImage(img);
            };

            const imageContainer = document.createElement('div');
            imageContainer.appendChild(img);
            imageContainer.appendChild(deleteButton);
            imageContainer.appendChild(updateButton);

            imageList.appendChild(imageContainer);
            
        };

        reader.readAsDataURL(file);
    }
}
// For Files
function addFile() {
    const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    fileList.style = 'border: 1px solid grey';
    
    const file = fileInput.files[0];

    if (file) {
      const listItem = document.createElement('li');
      listItem.className = 'fileItem';
      listItem.style = 'my-5';

      const fileName = document.createElement('span');
      fileName.textContent = file.name;

      const updateButton = document.createElement('button');
      updateButton.innerText = 'Update';
      updateButton.onclick = function() {
        updateFile(listItem);
      };

      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.onclick = function() {
        fileList.removeChild(listItem);
      };

      listItem.appendChild(fileName);
      listItem.appendChild(updateButton);
      listItem.appendChild(deleteButton);
      

      fileList.appendChild(listItem);

      fileInput.value = ''; // Clear the input field after adding the file
    }
  }

  function updateFile(listItem) {
    const newFileName = prompt('Enter the new name for the file:');
    if (newFileName !== null) {
      const fileName = listItem.querySelector('span');
      fileName.textContent = newFileName;
    }
  }