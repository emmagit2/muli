document.querySelectorAll('.accordion-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.accordion-items').forEach(item => {
        if(item !== link.parentElement){
            item.querySelector('.accordion-content').style.maxHeight = null;
            item.querySelector('.accordion-link .accordion_icons').textContent = '+';
            item.querySelector('.accordion-link').style.backgroundColor = '#fffffff1';
        }
    });
const content = link.nextElementSibling;
console.log(content)
if(content.style.maxHeight){
    content.style.maxHeight = null;
    link.querySelector('.accordion_icons').textContent = '+';
    link.style.backgroundColor = '#fffffff1';
}else{
    content.style.maxHeight = content.scrollHeight + 'px';
    link.querySelector('.accordion_icons').textContent = '-';
    link.style.backgroundColor = 'tomato';
}

  })
})