import { ApollonEditor } from '@ls1intum/apollon';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('apollon-container');

  const editor = new ApollonEditor(container, {
    type: 'ClassDiagram',
    mode: 'modeling',
  });
  
  editor.model = { elements: [{ id: '1', type: 'Class', name: 'SampleClass' }] };
  
  editor.on('modelChange', (model) => {
    console.log('Model updated:', model);
  });
});
