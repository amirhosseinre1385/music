const products = [
    {
        id: 1,
        name: 'استاد شجریان آهنگ در دل و جان خانه کردی',
        played: 289,
        image: './src/images/img1.jfif',
        music: './src/music/1.mp3',
        a: './src/page/download.html'
    },
    {
        id: 2,
        name: 'استاد شجریان آهنگ شیدایی',
        played: 454,
        image: './src/images/img2.jfif',
        music: './src/music/2.mp3'
    },
    {
        id: 3,
        name: ' استاد همایون شجریان آهنگ عاشقی',
        played: 267,
        image: './src/images/img3.jpg',
        music: './src/music/3.mp3'
    },
    {
        id: 4,
        name: ' استاد همایون شجریان آهنگ زلف بر باد مده',
        played: 389,
        image: './src/images/img4.jpg',
        music: './src/music/4.mp3'
    },
    {
        id: 5,
        name: 'استاد همایون شجریان آهنگ قلاب',
        played: 289,
        image: './src/images/img7.jfif',
        music: './src/music/5.mp3'
    },
    {
        id: 6,
        name: 'استاد همایون شجریان آهنگ خوب شد',
        played: 289,
        image: './src/images/img6.jfif',
        music: './src/music/6.mp3'
    },
    {
        id: 7,
        name: 'استاد همایون شجریان آهنگ با من صنما',
        played: 289,
        image: './src/images/img8.jpg',
        music: './src/music/7.mp3'
    },
    {
        id: 8,
        name: 'استاد همایون شجریان آهنگ مدارا',
        played: 289,
        image: './src/images/img9.jfif',
        music: './src/music/8.mp3'
    }
]


const items = () => {
    const productDiv = document.querySelector('.row');
    productDiv.innerHTML = ''

    products.forEach((item) => {
        productDiv.innerHTML = products.map(item=>
        `
        <div class="col-5 bg-light p-3 text-center">
            <span class="names">${item.name}</span>
            <img src=${item.image}>
            <br>
            <audio controls>
                <source src=${item.music} type="audio/mp3">
            </audio>
            <a href="#">بقیه آثار</a>
            <div class="down-part">
                <div>
                    <i class="far fa-heart" id="like-btn-heart"></i>
                    <span id="hearts-count">0</span>
                </div>
                <div class="played">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span>${item.played}</span>
                </div>
            </div>
            <hr>
            <div class="download">
                <a href=${item.a} target="_blank">جهت دانلود کلیک کنید</a>
            </div>
    </div>
        `).join('');
    })
}

items()

const search = document.querySelector('.top-right');
const btn = document.querySelector('.btnn');
const input = document.querySelector('.search-input');

btn.addEventListener('click', function () {
    search.classList.toggle('active')
});

const paletColor = document.querySelector('.palet');
const button = document.querySelector('.changeColor');
const color = document.querySelector('.box');

button.addEventListener('click', function () {
    paletColor.classList.toggle('change')
})

function changeColor(id){
    document.body.style.background = document.getElementById(id).innerHTML
};

document.getElementById('like-btn-heart').onclick = function() {
  document.getElementById('like-btn-heart').setAttribute('class', 'fas fa-heart animate__animated animate__rubberBand animate__slow');
  document.getElementById('like-btn-heart').style.color = '#ff0000ff';
  document.getElementById('hearts-count').style.color = '#fff';
  document.getElementById('like-btn-heart').style.pointerEvents = 'none';
  let current_likes_count = parseInt(document.getElementById('hearts-count').textContent);
  let current_likes_count_plus_one = current_likes_count + 1;
  document.getElementById('hearts-count').innerHTML = current_likes_count_plus_one;
};