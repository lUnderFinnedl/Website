import AbstractView from "./AbstractView.js";
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;
for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("photos");
    }

    async getHtml() {
        return `
        
        <div id="photo-life" class="container1">
        <h2>Stephen Hawking's Life</h2>
        <ul  class="image-gallery"<li>
            <img src="https://cdn.cnn.com/cnn/interactive/2018/03/world/stephen-hawking-cnnphotos/media/01.jpg" width="350" height="300" alt="" />
            <img src="https://cdn.cnn.com/cnn/interactive/2018/03/world/stephen-hawking-cnnphotos/media/02.jpg" width="350" height="300" alt="" />
            <img src="https://cdn.cnn.com/cnn/interactive/2018/03/world/stephen-hawking-cnnphotos/media/03.jpg" width="350" height="300" alt="" />
            <img src="https://cdn.cnn.com/cnn/interactive/2018/03/world/stephen-hawking-cnnphotos/media/04.jpg" width="350" height="300" alt="" />
            <img src="https://cdn.cnn.com/cnn/interactive/2018/03/world/stephen-hawking-cnnphotos/media/05.jpg" width="350" height="300" alt="" />
            <img src="https://cdn.cnn.com/cnn/interactive/2018/03/world/stephen-hawking-cnnphotos/media/06.jpg" width="350" height="300" alt="" />
            <div class="overlay"><span>Image title</span></div>
          </li>
          <!-- other items here -->
        </ul>
      </div>
      <div  id="photo-books" class="container2">
      <h2>Stephen Hawking's Books</h2>
      <ul  class="image-gallery">
      <img src="https://m.media-amazon.com/images/I/A1xkFZX5k-L.jpg" width="350" height="300" alt="" />
      <img src="https://upload.wikimedia.org/wikipedia/en/6/6c/Cover_Universe_in_a_nutshell.jpg" width="350" height="300" alt="" />
      <img src="https://www.verdict.co.uk/wp-content/uploads/2018/03/c6de6-briefhistorytime-1.jpg" width="350" height="300" alt="" />
      <img src="https://images.penguinrandomhouse.com/cover/9780553384666" width="350" height="300" alt="" />
      </ul>
      </div>
      <div id="photo-career" class="container3">
      <h2>Stephen Hawking's Career</h2>
      <ul   class="image-gallery">
      <img src="https://cdn.cnn.com/cnn/interactive/2018/03/world/stephen-hawking-cnnphotos/media/20.jpg" width="350" height="300" alt="" />
      <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/03/14/660741-1604189387073df58d210b.jpg" width="350" height="300" alt="" />
      <img src="https://static.businessworld.in/upload/xwu0GW_1.jpg" width="350" height="300" alt="" />
      <img src="https://cdn.britannica.com/51/126651-050-2EC9108B/Stephen-W-Hawking-Well-wishers-flight-Florida-Kennedy-2007.jpg" width="350" height="300" alt="" />
      <img src="https://images.newscientist.com/wp-content/uploads/2007/04/dn11730-1_600.jpg" width="350" height="300" alt="" />
      </ul>
      </div>
        `;
    }
}