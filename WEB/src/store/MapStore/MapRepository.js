import axios from "axios";

class MapRepository {

  async getMap(){
      try {
        return await axios.get(`https://maps.googleapis.com/maps/api/js?key=AIzaSyAjai91TopNgOQxu2Rq0ssPjAbbY5FZBZQ&callback=initMap`, {
            headers: { 'x-access-token': localStorage.getItem('userInfo')}
        })
        .then(res => {console.log(res)});
      } catch (err) {
          console.log(err);
      }
  }

  async getPollygon(placeId){
      try {
          return await axios.get(`http://192.168.137.1:7777/map/getLocation?placeId=${placeId}`,{
            headers: { 'x-access-token': localStorage.getItem('userInfo')}
          })
      } catch (err) {
          console.log(err);
      }
  }

  async getPlaceId(placeIdx){
      try {
          return await axios.get(`http://192.168.137.1:7777/map/placeId?address=${placeIdx}`,{
              headers: { 'x-access-token': localStorage.getItem('userInfo')}
          })
      } catch (err) {
          console.log(err);
      }
  }
}

export default new MapRepository();