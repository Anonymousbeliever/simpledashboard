// Common chart options
const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom'
        }
    }
};

// Balance Chart
const balanceCtx = document.getElementById('balanceChart').getContext('2d');
const balanceChart = new Chart(balanceCtx, {
    type: 'line',
    data: {
        labels: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0'],
        datasets: [{
            label: 'Bank Balances',
            data: Array(10).fill(0),
            borderColor: '#228B22',
            tension: 0.4,
            fill: false
        }, {
            label: 'Cash at Hand',
            data: Array(10).fill(0),
            borderColor: '#FFC107',
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            y: {
                beginAtZero: true,
                max: 1
            }
        }
    }
});

// Expenses Pie Chart
const expensesCtx = document.getElementById('expensesChart').getContext('2d');
const expensesChart = new Chart(expensesCtx, {
    type: 'pie',
    data: {
        labels: ['Category 1', 'Category 2', 'Category 3'],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: [
                '#228B22',
                '#17a2b8',
                '#FFC107'
            ]
        }]
    },
    options: {
        ...commonOptions,
        plugins: {
            legend: {
                position: 'right'
            }
        }
    }
});

// Income Chart
const incomeCtx = document.getElementById('incomeChart').getContext('2d');
const incomeChart = new Chart(incomeCtx, {
    type: 'line',
    data: {
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
        datasets: [{
            label: 'Monthly Income',
            data: Array(12).fill(0),
            borderColor: '#228B22',
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 1.0,
                ticks: {
                    stepSize: 0.1
                },
                grid: {
                    color: '#e9ecef'
                }
            },
            x: {
                grid: {
                    color: '#e9ecef'
                }
            }
        }
    }
});

// Sidebar toggle functionality
const sidebar = document.querySelector('.aside');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const overlay = document.querySelector('.sidebar-overlay');

function toggleSidebar() {
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
}

sidebarToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Update chart options on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        expensesChart.options.plugins.legend.position = 'bottom';
    } else {
        expensesChart.options.plugins.legend.position = 'right';
    }
    expensesChart.update();
});

//current year
document.getElementById("currentYear").textContent = new Date().getFullYear();