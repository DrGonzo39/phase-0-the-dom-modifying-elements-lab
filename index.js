const removeMain = document.querySelector('main');
removeMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory"
newHeader.textContent = "Arthur is the champion"
document.body.append(newHeader);

