import axios from 'axios';


class ProperPropertyRepositoryty{
    async getProperty() {
        try {
            await axios.get('http://192.168.137.1:7777/losts/');
        } catch (err) {
            console.log(err);
        }
    }
}

export default new PropertyRepository();