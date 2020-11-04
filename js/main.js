let btn_wd = document.querySelector('#wd')
let btn_ud = document.querySelector('#ud') 
let btn_mu = document.querySelector('#mu')
let btn_all = document.querySelector('#all')
let btn_all1 = document.querySelector('#all1')
let filterArea = Array.from(document.querySelectorAll('.filterItem'))

function active(elem){
    elem.style.transition = '0.3s'
    elem.style.opacity = 1
    setTimeout(() => elem.style.display = 'block', 300)
}

function disactive(elem){
    elem.style.transition = '0.3s'
    elem.style.opacity = 0
    setTimeout(() => elem.style.display = 'none', 300)
}

function clicked(btn){
    btn_all.classList.remove("focused")
    btn_mu.classList.remove("focused")
    btn_ud.classList.remove("focused")
    btn_wd.classList.remove("focused")
    btn.classList.add("focused")
}
clicked(btn_all)

btn_ud.onclick = () =>{
    clicked(btn_ud)
    for(let i=0; i<filterArea.length; i++)
        filterArea[i].dataset.filter == 'ud' ? active(filterArea[i]) : disactive(filterArea[i])
}

btn_wd.onclick = () =>{
    clicked(btn_wd)
    for(let i=0; i<filterArea.length; i++)
        filterArea[i].dataset.filter == 'wd' ? active(filterArea[i]) : disactive(filterArea[i])
}

btn_mu.onclick = () =>{
    clicked(btn_mu)
    for(let i=0; i<filterArea.length; i++)
        filterArea[i].dataset.filter == 'mu' ? active(filterArea[i]) : disactive(filterArea[i])
}

btn_all.onclick = () =>{
    clicked(btn_all)
    for(let i=0; i<filterArea.length; i++)
        active(filterArea[i])
}

btn_all1.onclick = () =>{
    for(let i=0; i<filterArea.length; i++)
        active(filterArea[i])
}

