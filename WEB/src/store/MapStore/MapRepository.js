import axios from "axios";

class MapRepository {
  async getMap(){
      try {
        await axios.get(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAjai91TopNgOQxu2Rq0ssPjAbbY5FZBZQ&callback=initMap`).then(res => {console.log(res)});
      } catch (err) {
          console.log(err);
      }
  }

  async getPollygon(){
      try {
          await axios.get(`http://192.168.137.1:7777/map/getLocation`)
      } catch (err) {
          console.log(err);
      }
  }

  async getPlaceId(placeIdx){
      try {
          await axios.get(`http://192.168.137.1:7777/map/placeId?address=${placeIdx}`)
      } catch (err) {
          console.log(err);
      }
  }
}

export default new MapRepository();