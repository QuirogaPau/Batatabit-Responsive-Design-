document.addEventListener('DOMContentLoaded', function () {
    const mainCurrencyTable = document.querySelector('.main-currency-table')
    const currencyTableContainer = document.querySelector('.currency-table-container');
    
    const feesTableContainer = document.querySelector('.fees-table__container');
    const mainFeesTable = document.querySelector('.main-fees-table');
    const arrowRight = document.querySelector('.icon-arrow-right');
    const arrowLeft = document.querySelector('.icon-arrow-left');

    arrowRight.addEventListener('click', function () {
                currencyTableContainer.style.display = 'none'; 
                mainCurrencyTable.style.display = 'none';
                mainFeesTable.style.display = 'block';
                feesTableContainer.style.display = 'block'; 
                
            });

            arrowLeft.addEventListener('click', function () {
                currencyTableContainer.style.display = 'block';
                mainCurrencyTable.style.display = 'block'; 
                mainFeesTable.style.display = 'none';
                feesTableContainer.style.display = 'none'; 

            });
        });
   