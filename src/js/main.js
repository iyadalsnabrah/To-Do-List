$().ready(function () {
    $(".plus-clicked").click(function () {
        $(".todo-hide").toggle("slow");
    })


    $(".add-todo").keypress(function (event) {
        if (event.which === 13)
            if ($(".add-todo").val()) {
                $("tfoot").append("<tr><td>" + "<span> <i class='fas fa-trash-alt'></i> </span>" + $(".add-todo").val() + "</td></tr>");
                $(".add-todo").val("");
            }
    });


    $("tfoot").on("click", "td", function () {
        var chickStrike = $(this).html();
        if (!chickStrike.includes("strike")) {
            var strike = $(this).text();
            $(this).html("<span> <i class='fas fa-trash-alt'></i> </span><strike>" + strike + "</strike>");

        } else {
            var strike = $(this).text();
            $(this).html("<span> <i class='fas fa-trash-alt'></i> </span>" + strike);
        }

    });

    $("tfoot").on("click", "span", function (event) {
        $(this).parent().fadeOut(500, function () {
            $(this).remove();
        });
        event.stopPropagation();

    });


});

