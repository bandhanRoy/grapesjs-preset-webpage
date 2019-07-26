import constMsg from "./../constants/message-const";

function addNewPage(editorDet) {
  //   editorDet.Modal.setTitle("Components JSON")
  //     .setContent(
  //       `<input type = "text" name="page_name"  id ="${page_name}" style="width: 100%"/>
  //       <button onClick=${getInputName()}>Submit</button>`
  //     )
  //     .open();
  //   console.log(constMsg.addNewPageMsg);
  if (confirm(constMsg.addNewPageMsg)) {
    // if required then hit the api and pass the editor details
    editor.setComponents({});
  }
}

// function getInputName() {
//   console.log(document.getElementById(page_name).value);
// }

export default addNewPage;
