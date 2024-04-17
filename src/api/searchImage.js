import axios from "axios";

const searchImage = async () =>
{
    const respons = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID B4wuZqFxllbBvzNFO4yy1WB6nqBxHTwTm3Vqyzuq-EY'
        },
        params: {
            query: 'cars'
        }
    })
    console.log(respons.data.results);
    return respons.data.results;
}
export default searchImage;