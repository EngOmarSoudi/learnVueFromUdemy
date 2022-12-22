const vu = Vue.createApp( {
    data ()
    {
        return {
            message: "Hello World!",
        };
        
    },
    beforeCreate ()
    {
        console.log( "beforeCreate() function called!", this.message );
    },
    created ()
    {
        console.log( "Created() function called!", this.message );
    },
    beforeMount ()
    {
        console.log( "beforeMount() function called!", this.$el );
    }, 
    mounted ()
    {
        console.log( "Mount() function called!", this.$el );
    },
    beforeUpdate ()
    {
        console.log( "beforeUpdate() function called!");
    },
    updated ()
    {
        console.log( "updated() function called!" );
    },
    beforeUnmount ()
    {
        console.log( "beforeUnmount() function called!" );
    },
    unmounted ()
    {
        console.log( "unmounted() function called!" );
    }
    
    
    
} )
vu.mount( "#app" );
// setTimeout(() => {
//     vu.mount( "#app" );
// }, 3000 );
// sertTimeout(() => {
//     vu.unmount();
// }, 6000 );
