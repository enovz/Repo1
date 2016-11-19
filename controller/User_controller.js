
'use strict';

class UserController{
    
    constructor(){

        this.inMemoStorage = [
            {id:1, name:"user1"},
            {id:2, name:"user2"},
            {id:3, name:"user3"}
        ];
    }

    getAll(){
        let result = this.inMemoStorage;
        return result;
    }
    getById(id){
        let result = this.inMemoStorage.filter(user => user.id === id );
        return result ? result[0] : null;
    }
}

module.exports = new UserController;