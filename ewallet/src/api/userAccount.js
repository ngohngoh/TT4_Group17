import axios from 'axios';

export default axios.create({
    baseURL: 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts',
    headers: {
        'x-api-key': 'PDprxfeN6h773d3G9RvBN2zp6H79R0tjp17Fhd0d'
    }
})