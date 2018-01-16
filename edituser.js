
var vm = new Vue({
    el: '#app',
    data: {
        rows: [
            {description: "Interest"}
        ]
    },
    methods: {
        addRow: function (index) {
            try {
                this.rows.splice(index + 1, 0, {});
            } catch(e)
            {
                console.log(e);
            }
        },
        removeRow: function (index) {
            this.rows.splice(index, 1);
        }
    }
});