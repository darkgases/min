$(function () {


    $("#pyq").click(function () {

        $("#dynamic").load($(this).data("page"))

        $("#title").load("page/title/title-pyq.html")
        $("#menu").load("page/menu/menu-pyq.html")

    })
    $("#robot").click(function () {

        $("#dynamic").load($(this).data("page"))

        $("#title").load("page/title/title-robot.html")
        $("#menu").load("page/menu/menu-robot.html")

    })

})