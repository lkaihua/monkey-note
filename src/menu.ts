export default function addMenu() {
  function hello() { console.log("hello") }
  GM.registerMenuCommand("New Note", hello, "N");
  GM.registerMenuCommand("List All Notes", hello, "A");
  GM.registerMenuCommand("Feedback", hello, "F");
}