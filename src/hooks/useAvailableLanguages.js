import { useState, useEffect } from 'react';

function useAvailableLanguages(){
    const [languages, setLanguages] = useState(null);

    useEffect(()=>{

        if(!languages){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Access-Control-Allow-Origin", "*");            
            
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
        
            fetch("http://localhost:3001/langs")
            .then(response => response.text())
            .then(result => setLanguages(JSON.parse(result)))
            .catch(error => console.log('error', error));
        }

    },[]);

    return languages;
}

export default useAvailableLanguages;