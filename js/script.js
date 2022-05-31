
const draggableListItems = document.querySelectorAll('.palabraArrastrable');

// current phrase being dragged
let selectedId;

// target phrase
let dropTargetId;

// counter for correct phrases
let matchingCounter = 0;

addEventListeners();

function dragStart() {
  selectedId = this.id;
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(ev) {
 ev.preventDefault();
}

function dragDrop() {
  dropTargetId = this.id;

  if (checkForMatch(selectedId, dropTargetId)) {
    document.getElementById(selectedId).style.display = 'none';
    document.getElementById(dropTargetId).style.background = '#53a847';
    document.getElementById(dropTargetId).innerHTML = document.getElementById(selectedId).innerHTML;
    matchingCounter++;
  }

   this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
  switch (selected) {
    case 'e1':
      return dropTarget === 's1' ? true : false;

    case 'e2':
      return dropTarget === 's2' ? true : false;

    case 'e3':
      return dropTarget === 's3' ? true : false;

    case 'e4':
      return dropTarget === 's4' ? true : false;

    default:
      return false;
  }
}


function addEventListeners() {
  draggableListItems.forEach (item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragover', dragOver);
  //  item.addEventListener('dragleave', dragLeave);
  })
}

function chequearpass() {
	if (document.getElementById("password").value == "hipotenusa") {
		UIkit.countdown(cuenta).stop();
		document.getElementById("password").style.borderColor = "green";
		document.getElementById("password").style.border = "4px solid green";
		 };
};

