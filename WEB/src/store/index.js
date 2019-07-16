import MapStore from "./MapStore/MapStore";
import PropertyStore from "./property/PropertyStore";

const store = {
    map: new MapStore(),
    property: new PropertyStore()
}

export default store;