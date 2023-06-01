$ = jQuery.noConflict();

let score = 0;
let user_ans = [];

const ANS = [2,2];

function ans(ques,ans) {
    user_ans[ques-1] = ans;
  }

$(document).ready(function () {
    progressBar.Next();


    // slide to start. should always be 1 as it's also the lower bound to the number of slides. corresponds to [pos] attribute on html element
    let active_slide = 1;

    // last slide. should be the upper bound to the number of slides. corresponds to [pos] attribute on html element
    let slide_count = $('.slide').length;

    // speed of animations (ms)
    let speed = 500;

    // hide all slides that aren't starting active slide
    $(".slide[pos!='" + active_slide + "']").each(function () {
        $(this).hide();
    })

    $(".slide-toggle[direction='next']").click(function () {

        // non active slides moved down so they can slide up when activated
        $(".slide[pos!='" + active_slide + "']").each(function () {
            $(this).css("top", "10px");
        })

        let next_slide = active_slide + 1;


        if (next_slide <= slide_count) {

            /*   
            Note: delay only works if .hide() or .show() are in its internal queue. Therefore you need to pass an argument to it, even if it's 0. (praise be to stackoverflow)
            */

            $(".slide[pos='" + active_slide + "']").animate({ opacity: 0, top: "-10px" }, { duration: speed }).hide(0).animate({ top: "10px" });

            $(".slide[pos='" + next_slide + "']").delay(speed).show(0).animate({ opacity: 1, top: "0px" }, { duration: speed });


        } else {

            next_slide = 1;

            $(".slide[pos='" + active_slide + "']").animate({ opacity: 0, top: "-10px" }, { duration: speed }).hide(0).animate({ top: "10px" });

            $(".slide[pos='" + next_slide + "']").delay(speed).show(0).animate({ opacity: 1, top: "0px" });
            progressBar.Reset();
        }

        // once animations are done, set new active slide
        active_slide = next_slide;
        progressBar.Next();
    })


    $(".slide-toggle[direction='prev']").click(function () {

        // non active slides moved up so they can slide down when activated
        $(".slide[pos!='" + active_slide + "']").each(function () {
            $(this).css("top", "-10px");
        })


        let next_slide = active_slide - 1;


        if (next_slide < 1) {

            next_slide = slide_count;

            $(".slide[pos='" + active_slide + "']").animate({ opacity: 0, top: "10px" }, { duration: speed }).hide(0).animate({ top: "10px" });

            $(".slide[pos='" + next_slide + "']").delay(speed).show(0).animate({ opacity: 1, top: "0px" }, { duration: speed });

            progressBar.Reset();

        } else {

            $(".slide[pos='" + active_slide + "']").animate({ opacity: 0, top: "10px" }, { duration: speed }).hide(0).animate({ top: "10px" });

            $(".slide[pos='" + next_slide + "']").delay(speed).show(0).animate({ opacity: 1, top: "0px" });
            progressBar.Back();
        }

        // once animations are done, set new active slide
        active_slide = next_slide;
    
       
    })


    $('#start').click(function(){
        $('.quiz-entry').slideUp(500);
        $('.quiz-body').delay(600).slideDown(500);
    });

    $('#submit').click(function(){
        for (let i = 0; i < ANS.length; i++) {
            if(ANS[i]==user_ans[i]){
                score++;
                  } 
        } 
        $('#correct-ans').html(score);
        $(this).html('<span id="spin"></span>');
        $('.quiz-body').delay(1450).fadeOut(500);
        $('.final-screen').delay(1500).fadeIn(500);
    });

    $('#total-ques').html(slide_count/2);
    $('#correct-ans').html(score);

    $('.ques .slide-toggle').click((e)=>{
     let  parentPos = $(e.target).parent().attr('pos');
     $('.ques[pos='+parentPos+'] button.active').removeClass('active');
     $(e.target).addClass('active');
    })

})

//Progress Bar

var progressBar = {
    Bar : $('#progress-bar'),
    Reset : function(){
      if (this.Bar){
        this.Bar.find('li').removeClass('active'); 
      }
    },
    Next: function(){
      $('#progress-bar li:not(.active):first').addClass('active');
    },
    Back: function(){
      $('#progress-bar li.active:last').removeClass('active');
    }
  }
  
  progressBar.Reset();