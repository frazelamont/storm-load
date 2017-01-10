const create = url => {
	return new Promise((resolve, reject) => {
		let s = document.createElement('script');
		s.src = url;
		s.onload = s.onreadystatechange = function() {
			if (!this.readyState || this.readyState === 'complete') resolve();
		};
		s.onerror = s.onabort = reject;
		document.head.appendChild(s);
	});
};

export const synchronous = urls => {
	if(!Array.isArray(urls)) throw new Error('Must be an array of URLs');

	return new Promise((resolve, reject) => {
		let next = () => {
			if (!urls.length) return resolve();
			create(urls.shift()).then(next).catch(reject);
		};
		next();
	});
};

export default (urls, async = true) => {
	if (!async) return synchronous(urls);
	
	if(!Array.isArray(urls)) throw new Error('Must be an array of URLs'); 

	return Promise.all(urls.map(url => create(url)));
};