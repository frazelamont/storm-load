const create = url => {
    return new Promise(function(resolve) {
        if (!(/js$/.test(url))){
            console.log(url + " is not a js file");
            return resolve();
        }
        let script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
        script.onload = script.onerror = resolve;
    });
}

export const synchronous = urls => {
    return new Promise((resolve, reject) => {
        let next = () => {
            if (!urls.length) return resolve();
            let url = urls.shift();
            create(url).then(next);
        };
        next();
    });
};

export default (urls, async = true) => {
    if (!async) return synchronous(urls);

    return new Promise((resolve, reject) => {
        if(!!!Array.isArray(urls)) return reject(); 
        
        return Promise.all(urls.map(url => {
                    return create(url); 
                }))
                .then(resolve, reject);
    });
};