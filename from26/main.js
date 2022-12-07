const vu = Vue.createApp( {
    data ()
    {
        return {
            p: "hi",
            isPurple: false,
            selectColour: "",
            size: 150,
            model: 1,
            birds: [ 'Pigeons', 'Eagles', 'Doves', 'Parrots', ],
            ppl: [
                {name: "omar" ,age:25},
                {name: "abood" ,age:20},
                {name: "ali" ,age:13}
            ],
        }
    },
    computed: {
        circle_classes (){
            return {purple:this.isPurple}
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