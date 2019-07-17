import axios from 'axios';

class ShopRepository {
  
    async getProduct(){
        try {
            await axios.get(`http://192.168.137.1:7777/`)
        } catch (err) {
            console.log(err);
        }
    }

}

export default new ShopRepository();