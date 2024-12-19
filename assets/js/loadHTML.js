function loadHTML(file, elementId) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.querySelector(elementId).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
