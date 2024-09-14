import Chart from 'chart.js/auto';

// example
(async function () {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
    ];

    new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
})();


// 個人總覽月支出
(async function () {
    const data2 = [
        { date: 1, count: 6 },
        { date: '', count: 10 },
        { date: '', count: 8 },
        { date: '', count: 12 },
        { date: '', count: 20 },
        { date: '', count: 15 },
        { date: '', count: 13 },
        { date: '', count: 9 },
        { date: 8, count: 12 },
        { date: 15, count: 15 },
        { date: 22, count: 18 },
        { date: 29, count: 6 },
    ];

    new Chart(
        document.getElementById('personalPay'),
        {
            type: 'bar',
            data: {
                labels: data2.map(row => row.date),
                datasets: [
                    {
                        label: '2024 年 07 月',
                        data: data2.map(row => row.count),
                        // backgroundColor: '#22C55E'
                        backgroundColor: data2.map(row =>
                            row.date === 8 ? '#15803C' : '#22C55E' // date: 8 的條件設定顏色
                        ),
                        borderRadius: 100,
                    }
                ]
            }
        }
    );

    Chart.defaults.backgroundColor = $success
})();