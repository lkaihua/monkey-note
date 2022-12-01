import "./style/main.less";
import "./style/highlight-stackoverflow-light.less"

//checkout homepage https://github.com/Trim21/gm-fetch for @trim21/gm-fetch
import GM_fetch from "@trim21/gm-fetch";
import addMenu from "./menu";
import addHtml from "./html";
import hljs from "highlight.js";
import hljs_ln from "./lib/line-numbers";

async function main() {
  console.log("script start");

  // cross domain requests
  console.log(`uuid: ${await fetchExample()}`);

  let store = new Proxy({
    previewModeOn: true
  }, {
    set: function(target, key, value) {
      // console.log(`the ${target} property ${key.toString()} has been updated with ${value}`)

      switch(key) {
        case "previewModeOn":
          $("#gmMonkeyNoteText").toggle()
          $("#gmMonkeyNotePre").toggle()
          $("#gmMonkeyNotePreview").toggle()
          $("#gmMonkeyNoteEdit").toggle()
          break
        default:
          break
      }
      return true
    }
  })

  addHtml()
  addMenu()
  hljs_ln.addStyles()

  $("#gmMonkeyNotePreview").on("click", () => {
    const value = $("#gmMonkeyNoteText").val().toString()
    if (!value) {
      return
    }
    
    const code = $("#gmMonkeyNoteCode")
    code.html(value)
    
    hljs.highlightElement(code.get(0))
    hljs_ln.lineNumbersBlock(code.get(0))

    store.previewModeOn = true
  })

  $("#gmMonkeyNoteEdit").on("click", () => {
    store.previewModeOn = false
  })
}

async function fetchExample(): Promise<string> {
  const res = await GM_fetch("https://httpbin.org/uuid");
  const data = await res.json();
  return data.uuid;
}

main().catch((e) => {
  console.log(e);
});
