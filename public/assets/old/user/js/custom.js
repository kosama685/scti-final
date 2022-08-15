$(document).ready(function () {
    


        let servicesSlider = $(".services-carousel");

        servicesSlider.owlCarousel({
            autoplay: true,
            autoplay: 5000,
            autoplaySpeed: 2000,
            autoplayHoverPause:true,

            loop: true,
            nav: false,

            dots: false,
            margin: 15,
            slideBy: 1,
            center: false,
            stagePadding: 5,
            navText: [
                '<i class="far fa-chevron-left"></i>',
                '<i class="far fa-chevron-right"></i>',
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                768: {
                    items: 2,
                    nav: false,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
            },
        });
    


    
    $('#dob-picker').datepicker({ uiLibrary: 'bootstrap4' });
    $('#exp').datepicker({ uiLibrary: 'bootstrap4' });
    $('#from-date').datepicker({ uiLibrary: 'bootstrap4' });
    $('#to-date').datepicker({ uiLibrary: 'bootstrap4' });
    $('#from-date1').datepicker({ uiLibrary: 'bootstrap4' });
    $('#to-date2').datepicker({ uiLibrary: 'bootstrap4' });
    $('#modal-expiry').datepicker({ uiLibrary: 'bootstrap4' });
    $('#strt_date').datepicker({ uiLibrary: 'bootstrap4' });
    $('#end_date').datepicker({ uiLibrary: 'bootstrap4' });
    $('#strt_date_2').datepicker({ uiLibrary: 'bootstrap4' });
    $('#end_date_2').datepicker({ uiLibrary: 'bootstrap4' });
    $('#stu_strt_date').datepicker({ uiLibrary: 'bootstrap4' });
    $('#stu_end_date').datepicker({ uiLibrary: 'bootstrap4' });
    // $('#system_message').modal('show');
    // $('#expired_message').modal('show');
    // $('#training-popup').modal('show');
    // $('#system_message_template').modal('show');
    // $('#upgrade_package').modal('show');
    // $('#purchase_package').modal('show');
    // $('#purchase_upgrade').modal('show');
    // $('#card_details').modal('show');
    // $('#update_success').modal('show');
    // $('#disable_recurring').modal('show');
    // $('#enable_recurring').modal('show');
    // $('#update_failed').modal('show');
    // $('#payment_pckg').modal('show');
    $('#sub').select2();
    $('#sub_dup').select2();
    $('#sub_interest').select2();
    $('.dataTables_filter input').attr('placeholder', 'Search');
    let input = document.querySelector('#phone');
    // window.intlTelInput(input, {
    //     // any initialisation options go here
    // });


    



});
//jQuery time

// $('.container-cv').on('click',function(){
// 	// alert(1);
// 	console.log($(this).parent().hasClass('active'))

// });

var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(document).on('click','.next',function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = now * 50 + '%';
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
                transform: 'scale(' + scale + ')',
                position: 'absolute'
            });
            next_fs.css({ left: left, opacity: opacity });
        },
        duration: 0,
        complete: function() {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$(document).on('click','.previous',function () {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    //de-activate current step on progressbar
    $('#progressbar li')
        .eq($('fieldset').index(current_fs))
        .removeClass('active');

    //show the previous fieldset
    previous_fs.show();
    //hide the current fieldset with style
    current_fs.animate({ opacity: 0 }, {
        step: function(now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale previous_fs from 80% to 100%
            scale = 0.8 + (1 - now) * 0.2;
            //2. take current_fs to the right(50%) - from 0%
            left = (1 - now) * 50 + '%';
            //3. increase opacity of previous_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({ left: left });
            previous_fs.css({
                transform: 'scale(' + scale + ')',
                opacity: opacity
            });
        },
        duration: 0,
        complete: function() {
            current_fs.hide();
            animating = false;
        },
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
    });
});

$('.submit').click(function() {
    return false;
});
