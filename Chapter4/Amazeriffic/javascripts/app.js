var main = function () {
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                $slideshow,
                $screenshot1,
                $screenshot2,
                $screenshot3,
                $screenshot4,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
               /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            } else if ($element.parent().is(":nth-child(4)")){
                $slideshow = $("<script>");
                $slideshow.text("jQuery('a.gallery').colorbox({ rel:'group1', slideshow: true });");

                $screenshot1 = $("<li><a class='gallery' href='images/amazeriffic_ch4.png'>Photo_1</a></li>");
                $screenshot2 = $("<li><a class='gallery' href='images/amazeriffic_ch4_1.png'>Photo_2</a></li>");
                $screenshot3 = $("<li><a class='gallery' href='images/amazeriffic_ch4_2.png'>Photo_3</a></li>");
                $screenshot4 = $("<li><a class='gallery' href='images/amazeriffic_ch4_3.png'>Photo_4</a></li>");

                $content = $("<ul>").append($screenshot1,$screenshot2,$screenshot3,$screenshot4,$slideshow);
            }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
