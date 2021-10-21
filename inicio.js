function verificar(){
  var data = new Date()
  var anoa = data.getFullYear()
  var Fano = document.querySelector('input#ano')
  var gif =  document.createElement('gif')
  var res = document.querySelector('div#rsu')
  

  if(Fano.value.length == 0 || Fano.value > anoa){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fgen = document.getElementsByName('radgen')
    var idade = anoa - Number(Fano.value)
    var genero = ''
    var pron = ''

    if (fgen[0].checked){
      //genero
      genero = 'homem'
      pron = 'um'


    } else if(fgen[1].checked){
      //genero
      genero = 'mulher'
      pron = 'uma'

     

    } else if (fgen[2].checked){
      //genero
      genero = 'NB'
      pron = 'ume'


    }
    
    rsu.innerHTML = `Você é ${pron} ${genero} e tem ${idade} anos!`
  }
  
}