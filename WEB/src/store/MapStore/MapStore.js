import { action, observable } from "mobx";
import MapRepository from './MapRepository';
import { autobind } from 'core-decorators';

@autobind
class MapStore {
    @observable maps = {};
    @observable pollygons = [];
    @observable placeId = "";

   @action async getMap(){
       try {
           const data = await MapRepository.getMap();
           console.log(data);
           this.maps = data;
           console.log(this.maps);
       } catch (err) {
           console.log(err);
       }
   }

   @action async getPollygon(){
       try {
           const data = await MapRepository.getPollygon(this.placeId);
           this.pollygons = data.data.data;
           console.log(data);
           console.log(this.pollygons);
       } catch (err) {
           console.log(err);
       }
   }

   @action async getPlaceId(Idx){
       try {
           const data = await MapRepository.getPlaceId(Idx);
           this.placeId = data.data.data[0].place_id;
       } catch (err) {
           console.log(err);
       }
   }
}

export default MapStore;