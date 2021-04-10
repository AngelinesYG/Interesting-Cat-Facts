$(() => { //on load begins

  $('button').on('click', (event)=> {
    // event.target.preventDefault()
    let $userInput = $('input[type="click"]').val()
    let $getDataFact = $(event.target).val()

    $.ajax({
      url:'https://cat-fact.herokuapp.com/facts'

    }).then(
      (data)=>{
        for (let i = 0; i < data.length; i++) {
          const $getDataFact = $('<div>')
          const $text = $('<div>')
        //
        //
        //   $text.html(data[i].length)
          $getDataFact.append(data[i].text)
          $('body').append($getDataFact)
       }//closing loop
        console.log(data)

      },//closing data function
      ()=>{
        console.log('bad request');
      }//closing blank function
    );//closing then

  })//closing event function

})//Onload ends
