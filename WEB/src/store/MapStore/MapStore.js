import { action, observable } from "mobx";
import MapRepository from './MapRepository';
import { autobind } from 'core-decorators';

@autobind
class MapStore {
    @observable maps = {};
    @observable pollygons = [];

   @action async getMap(){
       try {
           const data = await MapRepository.getMap();
           console.log(data);

           this.maps = data.data;
           console.log(this.maps);
       } catch (err) {
           console.log(err);
       }
   }

   @action async getPollygon(){
       try {
           const data = await MapRepository.getPollygon();
           this.pollygons = data.data.data;
           console.log(data);
           console.log(this.pollygons);
       } catch (err) {
           console.log(err);
       }
   }

   @action async getPlaceId(){
       try {
           
       } catch (err) {
           console.log(err);
       }
   }
}

export default MapStore;