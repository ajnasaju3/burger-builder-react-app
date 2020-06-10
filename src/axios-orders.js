import axios from 'axios'
const instance=axios.create({
    baseURL:'https://react-my-burger-8c77d.firebaseio.com/'
})
export default instance