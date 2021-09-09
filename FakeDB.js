const DB  = {

 avengers :[

        {
            id: 1,
            name : "Hulk",
            powerLevel : 5
        },
        {
            id: 2,
            name : "Captin America",
            powerLevel : 2
        },
        {
            id: 3,
            name : "Thor",
            powerLevel : 4
        },
        {
            id: 4,
            name : "Black Widow",
            powerLevel : 3
        },
        {
            id: 5,
            name : "Captin Marvel",
            powerLevel : 5
        },
        {
            id: 6,
            name : "Black Panther",
            powerLevel : 3
        },
        {
            id: 7,
            name : "Ant Man",
            powerLevel : 3
        }
    
    ],

            
    getAvenger(id)
    {
        return this.avengers.find(avenger=> avenger.id === id);
    }

}

module.exports = DB;