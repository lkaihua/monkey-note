export default function addHtml() {
  $('body').append(`
    <section id="gmMonkeyNoteWrapper" class="border-round"
      data-preview-mode-on="false"
    ><div class="container">
      <div id="gmMonkeyNoteHeader">
        <h1>New Note</h1>
        <button id="gmMonkeyNoteClose" class="border-round">X</button>
      </div>
      <div id="gmMonkeyNoteContent">
        <div class="row">
          <textarea id="gmMonkeyNoteText" class="border-round" name="text" rows="20" cols="100"></textarea>
          <pre id="gmMonkeyNotePre" class="border-round"><code id="gmMonkeyNoteCode"></code></pre>
        </div>
      </div>
      <div id="gmMonkeyNoteFooter">
        <div class="row">
          <input type="text" id="gmMonkeyNoteTitle" class="border-round" name="title" placeholder="Title (Optional) "/>
        </div>
        <div class="row button_container">
          <button id="gmMonkeyNotePreview" class="border-round">Preview</button>
          <button id="gmMonkeyNoteEdit" class="border-round">Edit</button>
          <button id="gmMonkeyNoteSubmit" class="border-round">Save & Generate Tiny URL</button>
        </div>
      </div>
    <div></section>
  `);
}