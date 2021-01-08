# typingAnimate
JavaScript animate typing text...

How to use ?
```bash

# install package

npm i typing-animate

# include typing.js

import Typing from './node_modules/typing-animate/typing.js'

const el = document.getElementById('el');
const string = 'Your text...'

# Pass parameters and call the run method
  new Typing({
    element: el,
    text: string,
    hideClass: hideElement,
    typingDelay: 70
  }).run();

# element - This is the DOM element where the text will be printed
# text - This is your text (type === String)
# hideClass - This is the DOM element that will be hidden after completion
# typingDelay - Delays in typing text (measured in milliseconds)

```