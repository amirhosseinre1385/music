const products = [
    {
        id: 1,
        name: 'استاد شجریان آهنگ در دل و جان خانه کردی',
        like: 289,
        played: 289,
        image: './src/images/img1.jfif',
    },
    {
        id: 2,
        name: 'استاد شجریان آهنگ شیدایی',
        like: 329,
        played: 454,
        image: './src/images/img2.jfif',
    },
    {
        id: 3,
        name: ' استاد همایون شجریان آهنگ عاشقی',
        like: 259,
        played: 267,
        image: './src/images/img3.jpg',
    },
    {
        id: 4,
        name: ' استاد همایون شجریان آهنگ زلف بر باد مده',
        like: 278,
        played: 389,
        image: './src/images/img4.jpg',
    },
    {
        id: 5,
        name: 'استاد همایون شجریان آهنگ قلاب',
        like: 289,
        played: 289,
        image: './src/images/img7.jfif',
    },
    {
        id: 6,
        name: 'استاد همایون شجریان آهنگ خوب شد',
        like: 289,
        played: 289,
        image: './src/images/img6.jfif',
    },
    {
        id: 7,
        name: 'استاد همایون شجریان آهنگ با من صنما',
        like: 289,
        played: 289,
        image: './src/images/img8.jpg',
    },
    {
        id: 8,
        name: 'استاد همایون شجریان آهنگ مدارا',
        like: 289,
        played: 289,
        image: './src/images/img9.jfif',
    }
]


const items = () => {
    const productDiv = document.querySelector('.row')
    productDiv.innerHTML = ''

    products.forEach((item, index) => {
        productDiv.innerHTML +=
        `
        <div class="col-5 bg-light p-3 text-center">
            <img src=${item.image}
            <span class="names">${item.name}</span>
            <br>
            <a href="#">بقیه آثار</a>
            <div class="down-part">
                <div class="like">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                    <span>${item.like}</span>
                </div>
                <div class="played">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                    <span>${item.played}</span>
                </div>
            </div>
            <hr>
            <div class="download">
                <button> دانلود با کیفیت 128 </button>
            </div>
            <div class="download">
                <button> دانلود با کیفیت 320 </button>
            </div>
    </div>
        `
    })
}

items()

const search = document.querySelector('.top-right');
const btn = document.querySelector('.btnn');
const input = document.querySelector('.search-input');

btn.addEventListener('click', function () {
    search.classList.toggle('active')
})

const paletColor = document.querySelector('.palet');
const button = document.querySelector('.changeColor');
const color = document.querySelector('.box');

button.addEventListener('click', function () {
    paletColor.classList.toggle('change')
})

function changeColor(id){
    document.body.style.background = document.getElementById(id).innerHTML ;
}