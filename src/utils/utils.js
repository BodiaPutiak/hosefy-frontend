export async function postData(url, data) {
    try {
        const formData = new FormData();
        
        Object.keys(data).forEach(key => {
            if (key === 'img') {
                formData.append(key, data[key]);
            } else {
                formData.append(key, JSON.stringify(data[key]));
            }
        });

        const response = await fetch(`${import.meta.env.VITE_DOMAIN}${url}`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Credentials' : true,
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET',
                'Access-Control-Allow-Headers':'application/json',
            },
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json(); 
    } catch (error) {
        console.log('Error:', error);
        throw error; 
    }
}
