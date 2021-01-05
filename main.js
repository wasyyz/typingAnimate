window.onload = () => {
  const element = document.getElementById('typing');
  const string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
  const typingAnim = document.querySelector('.typing-anim');

  new Typing({
    element: element,
    text: string,
    modalClass: '.modal',
    hideClass: typingAnim,
    typingDelay: 70
  }).run();
}