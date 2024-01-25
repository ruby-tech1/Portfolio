const link = {
    "link1": "https://wa.link/6tkxq1",
    "link2": "https://github.com/ruby-tech1?tab=repositories" 
}

function visit(link) {
    window.open(link)
}

document.querySelector('.home1').addEventListener("click", (() => {
    visit(link["link1"])
}))
document.querySelector('.home2').addEventListener("click", (() => {
    visit(link["link2"])
}))