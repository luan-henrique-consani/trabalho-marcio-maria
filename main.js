let clique = document.querySelectorAll('.clique');
let secao = document.querySelectorAll('.secao');

window.addEventListener('scroll', () =>{
    secao.forEach(section =>{
        let top = window.scrollY;
        let offSet = section.offsetTop - 130;
        let altura = section.offsetHeight;
        let idSecao = section.getAttribute('id');
        if(top >= offSet && top < offSet + altura){
            clique.forEach(link =>{
                link.classList.remove('ativo');

                document.querySelector(`header nav a[href*='${idSecao}']`).classList.add('ativo');
            })
        }
    })
});

function scrollSec (event){
    event.preventDefault();
    
    const href = event.currentTarget.getAttribute('href');
    const secao = document.querySelector(href);

    let topSecao = secao.offsetTop - 130;

    window.scrollTo({
        top: topSecao,
        behavior: 'smooth'
    })

}

clique.forEach(link => {
    link.addEventListener('click', scrollSec)

});