const product = document.getElementById('products');
const company = document.getElementById('company');
const connect = document.getElementById('connect');

const productclick = document.getElementById('productclick');
const companyclick = document.getElementById('companyclick');
const connectclick = document.getElementById('connectclick');

productclick.addEventListener('click',() => {


    if(product.classList.contains('hidden')){

        product.classList.remove("hidden");
        company.classList.add('hidden');
    }else{
        product.classList.add('hidden')
    }
});
companyclick.addEventListener('click',() => {


    if(company.classList.contains('hidden')){

        company.classList.remove("hidden")
    }else{
        company.classList.add('hidden')
    }
});
connectclick.addEventListener('click',() => {


    if(connect.classList.contains('hidden')){

        connect.classList.remove("hidden")
    }else{
        connect.classList.add('hidden')
    }
});
