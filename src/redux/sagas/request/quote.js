import axios from 'axios'

export function requestGetQuote(){
    return axios.request({
        method: 'get',
        url:'https://api.quotable.io/random',
    });
}
