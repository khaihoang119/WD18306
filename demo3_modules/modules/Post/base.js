import APICaller from "../Base/APICaller.js";
export default class Post extends APICaller {
    constructor(baseURL, endpoint) {
        super(baseURL);
        this._endpoint = 'posts';
    }
}