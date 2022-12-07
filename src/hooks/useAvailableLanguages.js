import { useState, useEffect } from 'react';

function useAvailableLanguages(){
    const [languages, setLanguages] = useState(null);

    useEffect(()=>{

        if(!languages){
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Access-Control-Allow-Origin", "*");            
        
            fetch("http://localhost:8080/langs")
            .then(response => response.text())
            .then(result => setLanguages(JSON.parse(result)))
            .catch(error => console.log('error', error));
        }
    // eslint-disable-next-line
    },[]);

    return languages;
}

export default useAvailableLanguages;