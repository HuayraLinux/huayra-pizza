
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
      return dropTarget === 's1';

    case 'e2':
      return dropTarget === 's2';

    case 'e3':
      return dropTarget === 's3';

    case 'e4':
      return dropTarget === 's4';

    case 'b1':
      return dropTarget === 'a1';

    case 'b2':
      return dropTarget === 'a2';

    case 'b3':
      return dropTarget === 'a3';

    case 'b4':
      return dropTarget === 'a4';
  }
  return false;
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
function pulsar(e) {
    if (e.keyCode === 13 && !e.shiftKey) {
        e.preventDefault();
    }
}
	function comenzarDiez() {
  const now = new Date()
  const hours = 3 * 60 * 1000
  const timer = new Date(now.getTime() + hours)

   UIkit.countdown(document.querySelector('#cuenta'), {
     date: timer.toISOString()
   });
   UIkit.countdown(cuenta).start();
   document.getElementById("comenzar").style.visibility = "hidden";
}
