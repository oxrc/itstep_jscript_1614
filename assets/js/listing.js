var app = new Vue({
    el: '#UserList',
    data:{
     users:Persons,
        pages:[],
        personPerPage:20,
    },
    methods: {
      remove (index) {     
        this.$delete(this.names, index)
        },
        edit (name){
         document.location.href = "https://www.google.com/search?q=" + name;
        },
        sortByNumber(){            
            if (this.sorted===false){                
                this.sorted=true;                  
          this.names.sort(function (a,b) {
              return a.count>b.count;               
            } 
        )}
         else if (this.sorted===true){           
                this.sorted=false;               
          this.names.sort(function (a,b) {
              return a.count<b.count;//                
            })}         
        },//sorted
        sortByName(){            
            if (this.sorted===false){                
                this.sorted=true;                  
          this.names.sort(function (a,b) {
              return a.text.toUpperCase()>b.text.toUpperCase(); } 
        )}
         else if (this.sorted===true){           
                this.sorted=false;               
          this.names.sort(function (a,b) {
              return a.text.toUpperCase()<b.text.toUpperCase();
            })} 
        },
        computed:{
            numberPage:function(){
               return Math.ceil(Persons.length/personPerPage)
            }
//            for (i=1; i<numberPage; i++){
//            pages.push(i);
//        }
        }
    }//methods
})//Vue


function pagination(num,limit,range)

{   range = range||3;

   var arr = [];

   for (var i=1; i<=limit; i++)  {

    if(i <= range||(i > num -range/2&&i < num + range/2)||i>limit - range)

    {if (arr[arr.length-1]&& i != arr[arr.length-1]+1)arr.push('...');arr.push(i)}

   }
  return arr
}

