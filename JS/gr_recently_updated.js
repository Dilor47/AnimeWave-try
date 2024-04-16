import content_data from '../data/content_data.js';
import generate_hover from './hover_anime_details.js';

const address = document.getElementById('ani_elems');
recently_updated();

function recently_updated() {
  let generated_hovers = '';
  let limit = 0;
  content_data.forEach((current_elem) => {
    if(limit >= 12) {
      return;
    }
    let html = `
    <div class="anime_item">
      <div class="anim">
        <div class='img_container'>
          <img src="${current_elem.img_anime}" >
        </div>
        

        <div class="meta">
          <div class="meta_elems">
            ${current_elem.sub?
              `<div class="ep_subhov">
                <i class="ep_subhov_amount fa faElem">${current_elem.sub}</i>
              </div>` : ''}
            ${current_elem.dub? 
              ` <div class="ep_michov">
                <i class="ep_michov_amount fa faElem">${current_elem.dub}</i>
              </div>`: ''}
           
            ${current_elem.total_episodes? 
              `<div class="ep_episodeshov">
                <i class="ep_episodeshov_amount fa faElem">${current_elem.total_episodes}</i>
              </div>`: ''
            }
          </div>

          <div class="watch_to_Elm">
            <i class='type_anime_Elm'>${current_elem.anime_type}</i>  
          </div>

        </div>
      </div>
      ${generate_hover(current_elem)}
      
      <div class="info"> 
        ${current_elem.title}
      </div>
    </div>
    `;
    generated_hovers += html;
    limit++;
  })
  address.innerHTML = generated_hovers
}

