import axios from "axios";

export default async function TranslationAPI(...strings) {
    
    const encodedParams = new URLSearchParams();
    encodedParams.set('texte', strings[0])
    encodedParams.set('to_lang', strings[1]);
    const options = {
        method: 'POST',
        url: 'https://google-translation-unlimited.p.rapidapi.com/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '95992756cbmshdd903a59b07377ap1b3e73jsn36c4b8682a30',
            'X-RapidAPI-Host': 'google-translation-unlimited.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        console.log(response.data.translation_data.translation);
        return response.data.translation_data.translation;
    } catch (error) {
        console.error(error.message);
    }
}
