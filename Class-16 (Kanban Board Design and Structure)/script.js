// Modal Pop up and Modal pop Down

const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const taskArea = document.querySelector(".textArea-cont");
const mainCont = document.querySelector(".main-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
const toolBoxPriorityColors = document.querySelectorAll(".color");

console.log(toolBoxPriorityColors);

const colors = ["lightpink", "lightgreen", "lightblue", "black"];

const lockClass = "fa-lock";
const unlockClass = "fa-lock-open";

// Flags
let addBtnFlag = false;
let modalPriorityColor = "lightpink";

addBtn.addEventListener("click", function () {
  addBtnFlag = !addBtnFlag;
  if (addBtnFlag === true) {
    // Open the Modal
    modalCont.style.display = "flex";
  } else {
    // close the Modal
    modalCont.style.display = "none";
  }
});

// Modal Event to get the task and createTicket

modalCont.addEventListener("keydown", function (e) {
  if (e.key == "Shift") {
    let id = shortid();
    console.log(id);
    let task = taskArea.value;

    createTicket(task, id, modalPriorityColor);
    taskArea.value = "";
    modalCont.style.display = "none";
    addBtnFlag = false;
  }
});

// Create Ticket Function
function createTicket(ticketTask, ticketID, ticketColor) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor};" ></div>
             <div class="ticket-id">${ticketID}</div>
             <div class="task-area">${ticketTask}</div>
              <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i> 
            
                
              </div>
    `;

  mainCont.appendChild(ticketCont);

  handleLock(ticketCont);
  handleColor(ticketCont);
}

// moving the active class on priority color boxes

allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    allPriorityColors.forEach(function (priorityColor) {
      priorityColor.classList.remove("active");
    });

    colorElem.classList.add("active");
    modalPriorityColor = colorElem.classList[0];
  });
});

// locking Mechanism
function handleLock(ticket) {
  let ticketLockCont = ticket.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockCont.children[0];
  let ticketTaskArea = ticket.querySelector(".task-area");

  ticketLockIcon.addEventListener("click", function () {
    if (ticketLockIcon.classList.contains(lockClass)) {
      ticketLockIcon.classList.remove(lockClass);
      ticketLockIcon.classList.add(unlockClass);

      // when the lock is open allow to edit task
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLockIcon.classList.remove(unlockClass);
      ticketLockIcon.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    }

    console.log(ticketLockIcon);
  });
}

// Chaning the color band of tickets

function handleColor(ticket) {
  let ticketColorBand = ticket.querySelector(".ticket-color");
  ticketColorBand.addEventListener("click", function () {
    let currColor = ticketColorBand.style.backgroundColor; // lightgreen

    let currColorIndex = colors.findIndex(function (color) {
      return color === currColor;
    });

    currColorIndex++;

    let newColorIndex = currColorIndex % colors.length;
    let newColor = colors[newColorIndex];
    console.log(newColor);

    ticketColorBand.style.backgroundColor = newColor;
  });
}

toolBoxPriorityColors.forEach(function (color) {
  color.addEventListener("click", function () {
    // console.log(color)
    let allTickets = document.querySelectorAll(".ticket-cont");

    console.log(allTickets);

    let selectedColor = color.classList[0];
    allTickets.forEach(function (ticket) {
      let ticketColorBand = ticket.querySelector('.ticket-color')
      if (ticketColorBand.style.backgroundColor === selectedColor) {
        ticket.style.display = "block";
      } else {
        ticket.style.display = "none";
      }
    });
  });
});
