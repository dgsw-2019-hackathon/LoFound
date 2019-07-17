import { action, observable } from "mobx";
import MapRepository from './MapRepository';
import { autobind } from 'core-decorators';

@autobind
class MapStore {
    @observable maps = {};
    @observable pollygons = [];
    @observable placeId = "";
    @observable losts = [];


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

   @action async getPollygon(placeIdx){
       try {
           const data = await MapRepository.getPollygon(placeIdx);
           this.pollygons = data.data.data;
           console.log(data);
           console.log(this.pollygons);
           return data.data.data;
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

   @action async getLosts(){
       try {
           const data = await MapRepository.getLosts();
           console.log(data);
           this.losts = data.data.data;
           return data.data.data;
       } catch (err) {
           console.log(err);
       }
   }
}

export default MapStore;