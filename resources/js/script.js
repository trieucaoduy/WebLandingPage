$(document).ready(
    function() {
        $('.about').waypoint(
            function(direction) {
                if (direction == "down") {
                    $('nav').addClass('sticky');
                } else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '600px'
            }
        )
    }
)

/*$(document).ready(
    function(){
        $('.showcase').waypoint(
            function(direction){
                if(direction == "down"){
                    $('.main-nav li a').addClass
                }
            }
        )
    }
)*/

/*Nav Toggler*/
$('.nav-toggler').click(
    function() {
        $('.main-nav').slideToggle(200);
    }
)