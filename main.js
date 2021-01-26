let saveFile = () => {

    const fileName = document.getElementById('filename');
    const text = document.getElementById('txtEditor');

    let data = txtEditor.value;


    const txtToBlob = new Blob([data], { type: 'text/plain' });
    const sfileName = fileName.value;

    let newLink = document.createElement("a");
    newLink.download = sfileName;
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(txtToBlob);
    }
    else {
        newLink.href = window.URL.createObjectURL(txtToBlob);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click();
}

window.onbeforeunload = function()
{
    return 'Do you really want to leave this page? You will lose all content after leaving.';
};