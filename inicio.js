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
      
      //imagem
      if (idade >= 0 && idade < 12){
        gif.innerHTML= '<iframe src= https://tenor.com/embed.js href="https://tenor.com/view/she-ra-imp-hordak-entrapdak-gif-15650290"></a><a href="https://tenor.com/search/she+ra-gifs">She Ra GIFs</a></div> <script type="text/javascript></script>'

      } else if (idade < 18){

      } else if (idade < 65){

      } else {

      }


    } else if(fgen[1].checked){
      //genero
      genero = 'mulher'
      pron = 'uma'

      //imagem
      if (idade >= 0 && idade < 12){
        

      } else if (idade < 18){

      } else if (idade < 65){

      } else {

      }

    } else if (fgen[2].checked){
      //genero
      genero = 'NB'
      pron = 'ume'

      //imagem
      if (idade >= 0 && idade < 12){

      } else if (idade < 18){

      } else if (idade < 65){

      } else {

      }

    }
    
    rsu.innerHTML = `Você é ${pron} ${genero} e tem ${idade} anos!`
  }
  
}