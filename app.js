$(() => { //on load begins

  let currentImgIndex = 0;
  let lastIndex = $('.carousel-images').children().length-1;//+data
  // let $userInput = $('input[type="click"]').val()
  // let $getDataFact = $(event.target).val()
  $('button').on('click', (event)=> {
    // event.target.preventDefault()

    $.ajax({
      url:'https://cat-fact.herokuapp.com/facts',

    }).then( //make carousel here and append to it
      (data)=>{
        $('.fact').remove()
        $(".carousel-images")
        .children()
        .eq(currentImgIndex)
        .css("display","none");
        //
        let $userInput = $('input[type="click"]').val()
        // let $data = $(event.target).val('<div>')
        const $data = $('<div>')

          if (currentImgIndex < lastIndex) {
            currentImgIndex++;
            }else {
            currentImgIndex = 0;
          }
          //show next image
          $(".carousel-images")
            .children()
            .eq(currentImgIndex)
            .css("display", "block");

        // for (let i = 0; i < data.length; i++) {
          const randomNum = Math.floor(Math.random()* data.length)
          // const $getDataFact = $('<div>')//div holding value from data
          const $text = $('<p>').html(data[randomNum].text).addClass('fact') //div going into the $getDataFact
        //
          // $text.html(data[i].text)
          // $text.html(data[1].text)
          $data.append($text) //append to carousel
          // $('body').append($data)//carousel to body

        // }//closing loop
        $('body').append($data)
        console.log(data)

      },//closing data function
      ()=>{
        console.log('bad request');
      }//closing blank function
    );//closing then

  })//closing event function

})//Onload ends
