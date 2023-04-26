
        const p1 = [document.querySelector('#p1'),document.querySelector('.imagem'), document.querySelector('.t1')]


        const p2 =[document.querySelector('#p2'),document.querySelector('.imagem2'), document.querySelector('.t2')]

        

        const p3 =[document.querySelector('#p3'),document.querySelector('.imagem3'), document.querySelector('.t3')]


        const p4 = [document.querySelector('#p4'),document.querySelector('.imagem4'), document.querySelector('.t4')]


        const p5 =[document.querySelector('#p5'),document.querySelector('.imagem5'), document.querySelector('.t5')]
        

        const button1 = document.querySelector('#b1')

        const h2 = document.querySelector('h2')

        

    function mostrar(numero){

            

        if (numero === 'p1'){
            click(p1)
            
    
        }else if(numero === 'p2'){
            click(p2)
            

        }else if(numero === 'p3'){
            click(p3)

        }else if (numero === 'p4'){
            click(p4)

        }else{
            click(p5)
        }

        
    }
    function click(p){
        p[0].classList.toggle('invisible')
        p[1].classList.toggle('seta')
        p[2].classList.toggle('negrito')
       
    }

    
