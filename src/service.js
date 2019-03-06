import io from 'socket.io-client';
/**
 * @description This is the default service that will be doing something and will
 * eventually be imported in index.js and hence exported. Fell free to play around
 * and happy coding.
 * @author gaurav sharma
 * @since 17th March 2019
 */
export default class Logger {
	constructor(URL) {
		this.socket = io(URL);
		this.socket.on('logbook-connected', () => console.log('connection established'));
	}

	log(payload) {
		this.socket.emit('log-event', payload);
	}
};
