define([], function() {
  var config;
  return config = {
    showIntroModalOnLoad: false,
    introModalId: 'tytoIntroModal',
    helpModalId: 'tytoHelpModal',
    infoModalId: 'tytoInfoModal',
    theme: false,
    themePath: 'css/themes/theme.css',
    DOMId: 'barn',
    DOMElementSelector: '.barn',
    emailSubject: 'my current items',
    emailRecipient: 'you@me.com',
    saveFilename: 'barn',
    maxColumns: 10,
    columns: [
      {
        title: 'A column',
        items: [
          {
            content: "I'm your first item, and just like all items I am draggable between columns."
          }, {
            content: 'there are actions available above for you to add columns and items, export your board, load a board etc.'
          }
        ]
      }, {
        title: 'Another column',
        items: []
      }, {
        title: 'Click me to edit',
        items: [
          {
            content: 'you can double-click an item to enter edit mode'
          }
        ]
      }, {
        title: 'Done',
        items: [
          {
            content: 'then click to edit and when you are done click elsewhere or double click the item again and it then becomes draggable'
          }
        ]
      }
    ]
  };
});
