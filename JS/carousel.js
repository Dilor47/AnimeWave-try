import {anime_description} from '../data/info_to_carousel.js'

const carousel = document.querySelector('.main-carousel');
/*linear-gradient(to right,  rgb(0, 0, 0), ${element.background}, rgb(0, 0, 0)); */

let carousel_html = '';

anime_description.forEach((element) => {
  carousel_html += `
  <div class="carousel-cell" style="background: linear-gradient(to right,  #131313,
  #131313,  
  ${element.background},
  #131313,
  #131313, 
  #131313, 
  #131313, 
  #131313);" >

    <div class="descr">
      <div class="all_info_anime">
        <h1>
          ${element.title}
        </h1>
        <div class="short_info">
          <p class="icon">${element.age_limit}</p>

          <div class="icons">
            ${element.is_there_sub}
            ${element.is_there_vSub}
          </div>
          
          <p class="date icon">${element.release_data}</p>
        </div>

        <p class="main_text">
          ${element.main_desc}
        </p>
        <p class='middle_text_length'>
          ${element.short_desc}
        </p>
        <p class='smallest_text_length'>
          ${element.smallest_desc}
        </p>

        <div class="carousel_button">
          <i class="fa-solid fa-play fa-2xl"></i>
          <p class="fa-2xl">PLAY NOW</p>
        </div>
      </div>
    </div>
    <div class="caros_image">
      <img src="${element.image}">
    </div>
  </div>`
});

carousel.innerHTML = carousel_html;
console.log('done');

$(document).ready(() => {
  $('.main-carousel').flickity({
    cellAlign: 'center',
    wrapAround: true,
    autoPlay: true,
    prevNextButtons: false
  })
})