const homeServices = {
    getData: () => {
        return new Promise((resolve, reject) => {
            fetch('https://app.villume.com/check-health')
                .then(response => response.json())
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        })
    }
}

export default homeServices