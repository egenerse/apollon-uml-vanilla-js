import { ApollonEditor } from "@ls1intum/apollon";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("apollon-container");

  const options = {
    type: "ClassDiagram",
    mode: "Modelling",

    title: "UMLClassDiagram",
    model: {
      version: "3.0.0",
      type: "ClassDiagram",
      size: { width: 1060, height: 540 },
      interactive: { elements: {}, relationships: {} },
      elements: {
        "9a78f359-d46b-4590-af78-c35b5de39f27": {
          id: "9a78f359-d46b-4590-af78-c35b5de39f27",
          name: "Package",
          type: "Package",
          owner: null,
          bounds: { x: -510, y: -250, width: 160, height: 100 },
        },
      },
      relationships: {},
      assessments: {},
    },
  };

  const editor = new ApollonEditor(container, options);

  editor.subscribeToAllModelChangePatches((patch) => {
    console.log("Model is changed patch:", JSON.stringify(patch));
  });
});
