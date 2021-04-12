$(() => { //on load begins

  let currentImgIndex = 0;//sets current image @ indx 0 which selects 1st image
  let lastIndex = $('.carousel-images').children().length-1;//takes array minus one because index starts at 0 so it will take off the empy spot at the end.
  // let $userInput = $('input[type="click"]').val()
  // let $getDataFact = $(event.target).val()
  $('button').on('click', (event)=> { //sets what will happen on click of bttn
    // event.target.preventDefault()   //which is the event listener

    $.ajax({
      url:'https://cat-fact.herokuapp.com/facts',//url/api pulling from

    }).then( //make carousel here and append to it
      (data)=>{
        $('.fact').remove()//removes last fact and puts new one when clicked
        $(".carousel-images")//takes the images in the carousel
        .children()          // and hides them until called upon by the click
        .eq(currentImgIndex)
        .css("display","none");//this hides them
        //
        let $userInput = $('input[type="click"]').val()//establishes what the interacton from the user will do and refers back to event listener that says that the interaction will be a click.
        // let $data = $(event.target).val('<div>')
        const $data = $('<div>')//sets the data from the API as a div in order to appear on the page. This div holds the text <p> inside of it.

          if (currentImgIndex < lastIndex) {
            currentImgIndex++;//loop for the images. It says if the current
          }else {  // image is less than the last image, to set it to the first
            currentImgIndex = 0; //which is index 0
          }
          //show next image
          $(".carousel-images") // this tells it that once current img is
            .children() //selected, to css style it to display in block form
            .eq(currentImgIndex) //since it's originally set to none
            .css("display", "block");

        // for (let i = 0; i < data.length; i++) {
          const randomNum = Math.floor(Math.random()* data.length)//this selects the data(text)randomly to display on the page.
          // const $getDataFact = $('<div>')//div holding value from data
          const $text = $('<p>').html(data[randomNum].text).addClass('fact') //this executes the above random fact to siplay the text and the addClass function overites or alternates with the above function that is set to remove fact, so that once removed it pushes the new fact.
        //
          // $text.html(data[i].text)
          // $text.html(data[1].text)
          $data.append($text).css("font-size", "20px", "text-align","center") //appends data from API as text the the data functon.
          // $('body').append($data)//carousel to body

        // }//closing loop
        $('.body1').prepend($data)//appends data to the body.
        console.log(data)

      },//closing data function
      ()=>{
        console.log('bad request');
      }//closing blank function
    );//closing then

  })//closing event function

})//Onload ends
