function loadHTML(file, elementId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            document.querySelector(elementId).innerHTML = xhr.responseText;
        } else {
            console.error('Error loading HTML: ' + xhr.status);
        }
    };
    xhr.send();
}
