const vu = Vue.createApp( {
    data ()
    {
        return {
            firstName: "omar",
            lastName: "Alsoudi",
            URL: "https://hello.com",
            raw_url:"<a href='https://hello.com' target='_blank'> Google.</a>"
        }
    },
    methods: {
        fullName ()
        {
            return this.firstName +' '+ this.lastName.toUpperCase() ;
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