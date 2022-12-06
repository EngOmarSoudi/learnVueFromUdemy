const vu = Vue.createApp( {
    data ()
    {
        return {
            firstName: "omar",
            midleName: "Abdulfattah",
            lastName: "Alsoudi",
            URL: "https://hello.com",
            raw_url: "<a href='https://hello.com' target='_blank'> Google.</a>",
            Age:25,
        }
    },
    methods: {
        
        updateMidelName (event)
        {
            this.midleName = event.target.value;
        },
        increment ()
        {
            this.Age++
         },
        decrement ()
        {
            this.Age--
        },
        updatelastName (msg,event)
        {
            event.preventDefault();
            console.log(msg);
            this.lastName = event.target.value
        },

        
    },
    computed: {
        fullName ()
        {
            return this.firstName +' '+this.midleName+' '+ this.lastName.toUpperCase() ;
        },
    },
    watch: {
        Age ( newVal, oldVal )
        {
            setTimeout( () =>
            {
                this.Age=20
            },3000)
            }
    },
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