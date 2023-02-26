let productsrender=document.getElementById('main-carts-container');
let categorias=document.getElementById('categorias');
let maincategoris=document.getElementById('main-categorias');
let maincanasta=document.getElementById('main-canasta')
let canti;
let i=0;
let listacar=[];

window.addEventListener('load',prender)
window.addEventListener('load',prender2)

function aumentar(){
    i++;
    canti.value=i;
        

}

function diminuye(){
    i--;
    canti.value=i;
        

}

const portafolio=[
    {
        name:'Chorizo Gales tradicional x 5 un',
        description:'deliciosos chorizo de carne de cerdo con cebolas y cilantro natural',
        imagen:'./imagenes/GT.jpg',
        id:'bgt',
        cantidad:0,

    },
    {
        name:'Chorizo Gales picante x 5 un',
        description:'deliciosos chorizo de carne de cerdo con cebolas y cilantro natural',
        imagen:'./imagenes/GP.jpg',
        id:'bgp',
        cantidad:0,

    },
    {
        name:'Chorizo Estarato 7 tradicional x 5 un',
        description:'deliciosos chorizo de carne de cerdo con cebolas y cilantro natural',
        imagen:'./imagenes/E7T.jpg',
        id:'be7t',
        cantidad:0,

    },
    {
        name:'Chorizo Estrato 7 picante x 5 un',
        description:'deliciosos chorizo de carne de cerdo con cebolas y cilantro natural',
        imagen:'./imagenes/E7P.jpg',
        id:'be7p',
        cantidad:0,

    },
    {
        name:'Chorizo Estrato 7 picante x 2 un',
        description:'deliciosos chorizo de carne de cerdo con cebolas y cilantro natural',
        imagen:'./imagenes/GT.jpg',
        id:'bgt2',
        cantidad:0,

    },
    {
        name:'Chorizo Estrato 7 tradicional x 2 un',
        description:'deliciosos chorizo de carne de cerdo con cebolas y cilantro natural',
        imagen:'./imagenes/GT.jpg',
        id:'bgp2',
        cantidad:0,

    },
    {
        name:'Chorizo Gales picante x 2 un',
        description:'deliciosos chorizo de carne de cerdo con cebolas y cilantro natural',
        imagen:'./imagenes/GT.jpg',
        id:'be7t2',
        cantidad:0,

    },
    {
        name:'Chorizo Gales tradicional x 2 un',
        description:'deliciosos chorizo de carne de cerdo con cebolas y cilantro natural',
        imagen:'./imagenes/GT.jpg',
        id:'be7p2',
        cantidad:0,

    },

]



function prender(){
    portafolio.forEach(element => {

        const imagecart=document.createElement('img')
        imagecart.src=element.imagen;

        const tittlecart=document.createElement('h1')
        tittlecart.textContent=element.name

        const pcart=document.createElement('p')
        pcart.textContent=element.description

        const buttoncart=document.createElement('button')
        buttoncart.textContent='AÑADIR'
        buttoncart.id=element.id




        const contimag=document.createElement('div');
        contimag.append(imagecart);
        contimag.className='image-container'    ;    
        

        const continfo=document.createElement('div');
        continfo.append(tittlecart,pcart,buttoncart);
        continfo.className="info-container";



        const contcart=document.createElement('div');  
        contcart.append(contimag,continfo);
        contcart.className='gales-container--cart';

        
        productsrender.appendChild(contcart)
        
        
    });

    productsrender.addEventListener('click',eliegecant)
}

function eliegecant(a){

    if(localStorage.getItem('milistadecomp')=='null'){
        localStorage.setItem('milistadecomp',"[]");

    }
        listacar=JSON.parse(localStorage.getItem('milistadecomp'));

    console.log(a);
    if(a.target.nodeName==='BUTTON'){
        maincategoris.removeChild(productsrender);
        portafolio.forEach(element=>{
            if(element.id===a.target.id){

        const imagecart=document.createElement('img')
        imagecart.src=element.imagen;

        const tittlecart=document.createElement('h1')
        tittlecart.textContent=element.name

        const pcart=document.createElement('p')
        pcart.textContent=element.description

        const cantilabel=document.createElement('label')
        cantilabel.textContent='cantidad'
        cantilabel.for='label'

        const canticontain=document.createElement('div')
        canticontain.className='maxmin-box'

        const mas=document.createElement('span')
        mas.textContent='+'
        mas.id='mas'

        const inputcanti=document.createElement('input')
        inputcanti.id='canti'        

        const menos=document.createElement('span')
        menos.textContent='-'
        menos.id='menos'

        canticontain.append(mas,inputcanti,menos)

        

        const buttoncart=document.createElement('button')
        
        buttoncart.id=element.id

        const canastalink=document.createElement('a')
        canastalink.href="./canasta.html"
        canastalink.textContent='Agregar'
        canastalink.className='canasta-link'

        buttoncart.appendChild(canastalink);

        



        



        const contimag=document.createElement('div');
        contimag.append(imagecart);
        contimag.className='image-shop'    ;    
        

        const continfo=document.createElement('div');
        continfo.append(tittlecart,pcart,cantilabel,canticontain,buttoncart);
        continfo.className="info-shop";



        const contcart=document.createElement('div');  
        contcart.append(contimag,continfo);
        contcart.className='product-shop';

        maincategoris.appendChild(contcart);

        
        mas.addEventListener('click',aumentar)
        menos.addEventListener('click',diminuye)
        canti=document.getElementById('canti')

        buttoncart.addEventListener('click',()=>listacar.push(element));
        buttoncart.addEventListener('click',()=>listacar[listacar.length-1].cantidad=canti.value);
        buttoncart.addEventListener('click',()=>localStorage.setItem('milistadecomp',JSON.stringify(listacar)));

        




            }
        })

        

    }
    
    
}

function prender2(){
    
    listacar=JSON.parse(localStorage.getItem('milistadecomp'));
    

    listacar.forEach(element=>{
        const imagecart=document.createElement('img')
        imagecart.src=element.imagen;

        const tittlecart=document.createElement('h1')
        tittlecart.textContent=element.name

        const pcart=document.createElement('p')
        pcart.textContent=element.description

        const cantilabel=document.createElement('label')
        cantilabel.textContent='cantidad'
        cantilabel.for='label'

        const canticontain=document.createElement('div')
        canticontain.className='maxmin-box'

        const mas=document.createElement('span')
        mas.textContent='+'
        mas.id='mas'

        const inputcanti=document.createElement('input')
        inputcanti.id='canti' 
        inputcanti.value=element.cantidad;       

        const menos=document.createElement('span')
        menos.textContent='-'
        menos.id='menos'

        canticontain.append(mas,inputcanti,menos)

        // const buttoncart=document.createElement('button')
        // buttoncart.textContent='Agregar'
        // buttoncart.id=element.id


        



        const contimag=document.createElement('div');
        contimag.append(imagecart);
        contimag.className='image-shopf'    ;    
        

        const continfo=document.createElement('div');
        continfo.append(tittlecart,pcart,cantilabel,canticontain);
        continfo.className="info-shopf";

        const deletitemcontain=document.createElement('div')
        const delet=document.createElement('img')
        delet.src='./imagenes/basura.png'
        delet.className='delet-image'
        delet.id=element.id;
        

        deletitemcontain.appendChild(delet);




        const contcart=document.createElement('div');  
        contcart.append(contimag,continfo,deletitemcontain);
        contcart.className='product-shopf';

        maincanasta.appendChild(contcart);



        


    })

    const enviarpedido=document.createElement('button')
    enviarpedido.textContent='enviar el pedio';
    enviarpedido.className='secundary-button1';

    
    maincanasta.appendChild(enviarpedido)
    

    maincanasta.addEventListener('click',eliminaritem)
    
}


function eliminaritem(a){
    listacar=JSON.parse(localStorage.getItem('milistadecomp'));

    if(a.target.className=='delet-image'){
        for(let j=0; j < listacar.length;j++){
            if(listacar[j].id==a.target.id){
                listacar.splice(i,1)
                
            }
        }
        
    }
    localStorage.setItem('milistadecomp',JSON.stringify(listacar))
    maincanasta.innerHTML="";
    prender2();

}



