const friends = [
  {
    name: "Ram",
    isMember: true,
  },
  {
    name: "Shyam",
    isMember: false,
  },
  {
    name: "Sita",
    isMember: true,
  },
  {
    name: "Gita",
    isMember: true,
  },
];

const resort = document.getElementById("resort");
let worker;

function entry(friends) {
  friends.forEach((person) => {
    const { name, isMember } = person;
    const listItem = document.createElement("li");
    listItem.textContent = name;

    if (!isMember) {
      // registration process is assigned to a worker
      worker = new Worker("worker.js");
      worker.postMessage(person);
      worker.addEventListener("message", (e) => {
        if (e.data) {
          console.log("main file")
          resort.appendChild(listItem);
        }
      });
    } else {
        resort.appendChild(listItem);
    }
  });
}

entry(friends);
