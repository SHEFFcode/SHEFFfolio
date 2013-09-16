var WorkElement = document.register("steren-work", {
  prototype: Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function() {
        var t = document.querySelector('#worktemplate');
        this.createShadowRoot().appendChild(t.content.cloneNode(true));
      }
    }
  })
});

document.body.appendChild(new WorkElement());