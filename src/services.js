import axios from 'axios';

pingDatabase = () => {
    axios.get().then(res => {
            return res.data;
        });
}