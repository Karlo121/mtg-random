import axios from 'axios';

interface Book {
    isbn : string;
    name : string;
    price : number;
    author : string;
}


export let getImage = () => { 
    axios.get<Book[]>('/books', {
        baseURL : 'https://ecom-backend-example/api/v1',
    }).then( response => {
        console.log(response.data);
        console.log(response.status);
    })
};
