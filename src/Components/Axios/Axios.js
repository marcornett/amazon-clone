import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-1a782/us-central1/api',
    // headers: 'pk_test_51HsttbDX941wjKlxV86OIIIlwYu6qQKt4gBoPjfRSocVAGquOq1SSkhZLmqgRxZq05CLrpTJVigqPMupYYdSrTeq00aFKEn3g5',
})

export default instance