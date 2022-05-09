function create_nav(title){

    d3.select("body").append("h2")
        .attr("class","pagetitle")
        .text(title)

    var div_nav=d3.select("body")
        .append("div")
        .attr("class","navbar")
    div_nav.append("a")
        .attr("href","index.html")
        .text("Index")
    div_nav.append("a")
        .attr("href","publications.html")
        .text("Publications")
    div_nav.append("a")
        .attr("href","softwares.html")
        .text("Software")

}
