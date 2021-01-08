export default class Typing {
  constructor(obj) {
    // Params
    this.el = obj.element;
    this.str = obj.text;
    this.hideClass = obj.hideClass;
    this.typingDelay = obj.typingDelay;

    // Method
    this.run = function () {

      let count = 0;

      const timer = setInterval(() => {
        this.el.textContent += this.str[count];
        count++;
        if (count >= this.str.length) {
          clearInterval(timer);
          if (this.hideClass) {
            this.hideClass.style.display = 'none';
          }
        }
      }, this.typingDelay);
      
    };
  }
}