const vu = Vue.createApp( {
    data ()
    {
        return {
            p: "hi",
            isPurple: false,
            selectColour: "",
            size:150,
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