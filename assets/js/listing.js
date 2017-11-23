var  personPerPage=20;
var  pages= [];

var app = new Vue({
    el: '#UserList',
    data: {
        users: Persons,
         pages:pages
    },
    methods: {
        colvoPages: function (){
           return Math.ceil(Persons.length /personPerPage);
        },
        pagess: function () {
            for (i = 1; i < app.colvoPages(); i++) {
                pages.push(i);
            }
             return pages;
        },
    }, //methods
}) //Vue
pages=app.pagess();
