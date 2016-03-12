
$(function () {

    $(document).ready(function () {

        // Build the chart
        $('#container').highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Your Personal Budget'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Category',
                colorByPoint: true,
                data: [{
                    name: 'Home and Utilities',
                    y: 34.00
                }, {
                    name: 'Car',
                    y: 12.00,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Health',
                    y: 10.00
                }, {
                    name: 'Food',
                    y: 14.00
                }, {
                    name: 'Savings',
                    y: 10.00
                }, {
                    name: 'Other/Debts/Fun',
                    y: 20.00
                }]
            }]
        });
    });
});
