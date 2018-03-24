function init_tooltip(){
  $(function(){
        $("[data-tooltip]").mouseover(function (eventObject) {
            // console.log(eventObject.pageY)
            $data_tooltip = $(this).attr("data-tooltip");
            $("#tooltip").html($data_tooltip)
                .css({
                  "top" : eventObject.currentTarget.getBoundingClientRect().top - $("#tooltip").height(),
                  "left" : eventObject.currentTarget.getBoundingClientRect().right + 10
                })
                .show();
            }).mouseout(function () {
              $("#tooltip").hide()
                .html("")
                .css({
                    "top" : 0,
                    "left" : 0
                });
        });
  });
}