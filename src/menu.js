import './style/menu.css'

const main_content = document.getElementById('content')

const menuItem = (name, desc, price) => {
    const menu_item = document.createElement('div')
    const menu_item_name = document.createElement('h2')
    const menu_item_desc = document.createElement('p')
    const menu_item_price = document.createElement('p')

    menu_item_name.classList.add('name')
    menu_item_desc.classList.add('desc')
    menu_item_price.classList.add('price')
    menu_item.classList.add('menu-item')

    menu_item_name.textContent = name 
    menu_item_desc.textContent = desc 
    menu_item_price.textContent = price
    menu_item.appendChild(menu_item_name)
    menu_item.appendChild(menu_item_price)
    menu_item.appendChild(menu_item_desc)

    return menu_item

}
const loadMenu = () => {
    const desc = `
    Dolores vero optio fuga porro enim voluptatem 
    iste quos possimus rem incidunt quia reiciendis, 
    itaque, natus hic assumenda eligendi at eveniet 
    nesciunt error!
    `
    const menu_content_div = document.createElement('div')
    const menu_div = document.createElement('div')
    const h1 = document.createElement('h1')
    h1.textContent = "Menu"
    
    menu_content_div.classList.add('menu-content')
    menu_div.classList.add('menu')
    menu_div.appendChild(h1)
    menu_div.appendChild(menuItem('Fruit salad', desc, '$10'))
    menu_div.appendChild(menuItem('Chicken and beer', desc, '$100'))
    menu_div.appendChild(menuItem('Fried rice', desc, '$15'))
    menu_div.appendChild(menuItem('Pasta', desc, '$15'))
    menu_content_div.appendChild(menu_div)
    main_content.appendChild(menu_content_div)


}

export default loadMenu