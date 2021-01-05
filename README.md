# typingAnimate
JavaScript animate typing text...

How to use ?
```bash

# include typing.js

# Pass parameters and call the run method
  new Typing({
    element: element,
    text: string,
    hideClass: typingAnim,
    typingDelay: 70
  }).run();

# element - This is the DOM element where the text will be printed
# text - This is your text (type === String)
# hideClass - This is the DOM element that will be hidden after completion
# typingDelay - Delays in typing text (measured in milliseconds)

```