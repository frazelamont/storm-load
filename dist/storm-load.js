/**
 * @name storm-load: Lightweight promise-based script loader
 * @version 0.3.0: Tue, 10 Jan 2017 13:35:53 GMT
 * @author stormid
 * @license MIT
 */
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