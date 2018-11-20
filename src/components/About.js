import React, { Component } from 'react'
import Slider from "react-slick";
import './About.css';



export default class About extends Component {
  render() {
    var settings = {
      dots: true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img alt="test" src="https://scontent.fmdl2-1.fna.fbcdn.net/v/t1.0-9/42710769_2128654537451252_3931004534612033536_n.jpg?_nc_cat=110&_nc_ht=scontent.fmdl2-1.fna&oh=81cbdc89ed215ecf9969db6b0b5a96f1&oe=5C6E19DD" />
          </div>
          <div>
            <img alt="test" src="https://scontent.fmdl2-1.fna.fbcdn.net/v/t1.0-9/44369734_2141815052801867_5741617026955214848_n.jpg?_nc_cat=104&_nc_ht=scontent.fmdl2-1.fna&oh=6f13ba25fb5ecaaa3de79a4094015960&oe=5C750448" />
          </div>
          <div>
            <img alt="test" src="https://scontent.fmdl2-1.fna.fbcdn.net/v/t1.0-9/21761427_1882382145411827_1618213637308924994_n.jpg?_nc_cat=100&_nc_ht=scontent.fmdl2-1.fna&oh=2d32970207ed2b90a74c131377d7b96d&oe=5C8078D4" />
          </div>
          <div>
            <img alt="test" src="https://scontent.fmdl2-1.fna.fbcdn.net/v/t1.0-9/25446145_1924134701236571_5416044329276017886_n.jpg?_nc_cat=100&_nc_ht=scontent.fmdl2-1.fna&oh=4758d8ebb5090c1ceab5de6fa816bad3&oe=5C6792C2" />
          </div>
        </Slider>
      </div>
    );
  }
}
