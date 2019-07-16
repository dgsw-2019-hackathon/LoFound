import { action, observable } from "mobx";
import MapRepository from './MapRepository';
import { autobind } from 'core-decorators';

@autobind
class MapStore {
    @observable maps = [];
    @observable pollygons = [];

   @action getMap(){
       try {
           const data = await MapRepository.getMap();
           this.maps = data.data.data;
       } catch (err) {
           console.log(err);
       }
   }

   @action getPollygon(){
       try {
           const data = await MapRepository.getPollygon();
           this.pollygons = data.data.data;
       } catch (err) {
           console.log(err);
       }
   }
}

export default MapStore;