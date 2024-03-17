const getGreeting = async(token) => {
    const url = `http://localhost:8080/hello`;
    try {
        const options = {
            contentType: 'text/plain',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };
        const data = await fetch(url, options)
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
};

export {
    getGreeting
};