$(() => { //on load begins

$('button').on('click', (event)=> {
   event.preventDefault()
  let $userInput = $('input[type="click"]').val()


$.ajax({
    url:'https://cat-fact.herokuapp.com/facts'


}).then(
    (data)=>{
      for (let i = 0; i < data.length; i++) {
      // console.log(data)
      const $getDataFact = $('<div>')
      const $text = $('<div>')


      $text.html(data[i].length)
      $getDataFact.append($text)
      $('body').append($getDataFact)

      }


    },
    ()=>{
        console.log('bad request');
      }
    );

  })


})//Onload ends
