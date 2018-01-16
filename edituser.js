Vue.filter('currencyDisplay', {
    read: function (val) {
        if (val > 0) {
            return accounting.formatMoney(val, "$", 2, ".", ",");
        }
    },
    write: function (val, oldVal) {
        return accounting.unformat(val, ",");
    }
});
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
        },
        getData: function () {
            $.ajax({
                context: this,
                type: "POST",
                data: {
                    rows: this.rows
                },
                url: "/api/data"
            });
        }
    }
});