const timeSheetData = [
    {
        project: 'Learn front-end',
        Task: 'Learn HTML',
        'Time Spent': 6
    },
    {
        project: 'Learn front-end',
        Task: 'Learn CSS',
        'Time Spent':8,
    },
    {
        project: 'Learn front-end',
        Task: 'Learn JS Variables and Data Types',
        'Time Spent': 6
    },
    {
        project: 'Learn git',
        Task: 'Learn git basics',
        'Time Spent': 2
    }
]
var rIndex, table = document.getElementById("table");

const tableBody = document.querySelector("tbody");
console.log(tableBody);
for (const item of timeSheetData) {
  tableBody.innerHTML += `<tr>
  <td>${item.project}</td>
  <td>${item.Task}</td>
  <td>${item["Time Spent"]}</td>
</tr>`;
}
const t = document.getElementById("task");
const p = document.getElementById("project");
const time = document.getElementById("time");
const addOne = document.querySelector("button");
addOne.addEventListener("click", function()  {
  timeSheetData.push({
    project: `${p.value}`,
    task: `${t.value}`,
    "time spent": `${time.value}`
  });
  tableBody.innerHTML += `<tr>
  <td>${timeSheetData[timeSheetData.length - 1].project}</td>
  <td>${timeSheetData[timeSheetData.length - 1].task}</td>
  <td>${timeSheetData[timeSheetData.length - 1]["time spent"]}</td>
  </tr>`;
});
const rows = document.querySelectorAll("tbody tr");
const title = document.querySelector("tr");
const update = document.querySelector(".update");
title.innerHTML += "<th>Action</th>";
for (let i = 0; i < rows.length; i++) {
    rows[i].innerHTML += `<td><button onclick = "deleteObject(${i})">X</button>
   <button onclick="editObject(${i})">u</button>
   </td>`;
}
function deleteObject() {
    document.getElementById("table").deleteRow(1);
}
function editObject(index) {
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
          rIndex = this.rowIndex;
          document.getElementById("project").value = this.cells[0].innerHTML;
          document.getElementById("task").value = this.cells[1].innerHTML;
          document.getElementById("time").value = this.cells[2].innerHTML;
        };
    }
    update.onclick = () => {
        rows[index].innerHTML = `<td>${p.value}</td>
        <td>${t.value}</td>
        <td>${time.value}</td>
        <td><button onclick = "removeLine(${index})">X</button>
        <button onclick="editObject(${index})">u</button>
        </td>`;
    };
}
const clear = document.getElementById("clearValue");
function deleteValue() {
    t.value = "";
    p.value = "";
    time.value = "";
}
clear.addEventListener("click", deleteValue);