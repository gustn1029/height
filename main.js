

const height = document.querySelectorAll('.block');
const heightLen = height.length;
const clickBtn = document.querySelectorAll('.clickBtn');
const container = document.querySelector('.container');
console.log(container.scrollHeight);

for(let i = 0; i < heightLen; i++) {
    const docHeight = height[i].clientHeight;
    console.log(container.scrollHeight - height[i].scrollHeight);
    clickBtn[i].addEventListener('click', function(e){
        e.preventDefault();
        console.log(height[i]);
        height[i].scrollTo(0,0);
    });
}