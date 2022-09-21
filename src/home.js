import pexels2 from '../images/pexels2.jpg'
import pexels3 from '../images/pexels3.jpg'
import pexels4 from '../images/pexels4.jpg'
import pexels5 from '../images/pexels5.jpg'
import pexels6 from '../images/pexels6.jpg'
import pexels7 from '../images/pexels7.jpg'
import pexels8 from '../images/pexels8.jpg'

import './style/home.css'

const main_content = document.getElementById('content')

const loadTopText = () => {
    const top = document.createElement('div')
    const h1 = document.createElement('h1')
    const top_p = document.createElement('p')
    
    top.classList.add('top-div')
    top_p.classList.add('top-text-p')
    h1.textContent = "The Place"
    top_p.textContent =  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Hic eveniet voluptates delectus molestias error deleniti 
                        animi quia architecto saepe recusandae tenetur dignissimos`    
    
    top.appendChild(h1)
    top.appendChild(top_p)
    return top
}


const loadImage = () => {     
    const image_div = document.createElement('div')
    image_div.setAttribute('class', 'img-div')
    const image = document.createElement('img')
    image.setAttribute('class', 'home-image')
    image.src = pexels2

    image_div.appendChild(image)
    return image_div
    
}

const loadImages = () => {
    let images_list = [pexels3, pexels4, 
        pexels5, pexels6, pexels7, pexels8]
    const images_div = document.createElement('div')

    for (let i=0; i < images_list.length; i++) {
        const img = document.createElement('img')
        img.classList.add(`img${i}`)
        img.src = images_list[i]
        images_div.appendChild(img)

    }
    images_div.classList.add('images-container')
    return images_div

}
const loadText = () => {
    const text_div = document.createElement('div')
    const about_paragraph = document.createElement('p')
    text_div.classList.add('about')
    about_paragraph.classList.add('about-p')
    about_paragraph.textContent = `
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Hic eveniet voluptates delectus molestias error deleniti 
    animi quia architecto saepe recusandae tenetur dignissimos 
    voluptatum modi, veniam, magni temporibus provident nesciunt 
    perspiciatis voluptate perferendis! Hic fuga aliquid optio ratione. 
    Dolores vero optio fuga porro enim voluptatem iste quos possimus rem 
    incidunt quia reiciendis, itaque, natus hic assumenda eligendi at 
    eveniet nesciunt error!
    `
    text_div.appendChild(about_paragraph)
    text_div.appendChild(loadImages())
    return text_div
}

const loadpage = () => {
    const content_child = document.createElement('div')
    content_child.setAttribute('class', 'content-div-child')
    
    content_child.appendChild(loadTopText())
    content_child.appendChild(loadImage())
    main_content.appendChild(content_child)
    main_content.appendChild(loadText())

}


export default loadpage

