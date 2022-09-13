const Model = require('./model');
module.exports =
    class Bookmark extends Model{
        constructor(title,url,category){
            super();
            this.Title = title !== undefined ? title : "";
            this.Url = url !== undefined ? title : "";
            this.Category = category !== undefined ? category : "";

            this.setKey("Title");
            this.addValidator('Title','string');
            this.addValidator('Url','string');
            this.addValidator('Category','string');
        }
    }