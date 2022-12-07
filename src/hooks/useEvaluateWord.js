import { useState, useEffect } from 'react';

function useEvaluateWord(data, language) {
    const [response, setResponse] = useState(null);
    
    useEffect(() => {
        if(data) {
            const lang = language.toLowerCase()
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Access-Control-Allow-Origin", "*");

            var raw = JSON.stringify({
                "langISO": lang,
                "word": data
            });
            
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
        
            fetch("http://localhost:8080/eval", requestOptions)
            .then(response => response.text())
            .then(result => setResponse(JSON.parse(result)))
            .catch(error => console.log('error', error));
        }
    }, [data, language]);

  return response;
}

export default useEvaluateWord;