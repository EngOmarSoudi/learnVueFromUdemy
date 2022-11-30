const vu = Vue.createApp( {
    data ()
    {
        return {
            firsName: "omar",
            lastName: "Alsoudi"
        }
    },
    methods: {
        fullName ()
        {
            return this.firsName +' '+ this.lastName.toUpperCase() ;
        }
    }
} ).mount( "#app" );
// setTimeout(  ()=>
// {
//     vu.firsName = "a";   
// },2000 ); 
// Vue.createApp( {
//     data ()
//     {
//         return {
//             firsName: "abood",
//             lastName: "Alsoudi"
//         }
//     }
// }).mount("#second")