import Post from "./base.js";

export default class ListPost extends Post{
    constructor(baseUrl, endpoint){
        super(baseUrl, endpoint);
    }
    getAllList(){
        return super.endpoint;
    }
}
export{ListPost}