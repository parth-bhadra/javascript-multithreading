// addEventListener("message", (e) => {
//   const person = e.data;
//   registerNewMember(person);
// });

onmessage = (e) => {
  const person = e.data;
  registerNewMember(person);
};

const registerNewMember = (person) => {
  setTimeout(() => {
    console.log("set timeout");
    person.isMember = true;
    postMessage(true);
    close();
  }, 5000);
};
