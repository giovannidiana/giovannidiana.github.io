function create_nav(title){
    var div_outer=d3.select("body").append("div")
                                   .style("display","flex")

    var div_header = div_outer.append("div").style("float","left")

    div_header.append("h2")
        .style("margin",0)
        .style("padding","8px")
        .style("white-space","nowrap")
        .attr("align","right")
        .text(title)

    var div_nav=div_outer.append("div")
        .style("width","100%")
        .style("float","right")

    var nav=div_nav.append("ul").attr("class","ulnav")
    nav.append("li").attr("class","nav").append("a")
        .attr("href","index.html")
        .text("Index")
    nav.append("li").attr("class","nav").append("a")
        .attr("href","publications.html")
        .text("Publications")
    nav.append("li").attr("class","nav").append("a")
        .attr("href","softwares.html")
        .text("Software")
}
