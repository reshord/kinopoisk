


const arr = [
    {
        id: 1, title: 'Assassin"s Creed', rating: '8.2', img: 'https://i.ibb.co/rsRNtv8/kredo.jpg'
        
    },
    {
        id: 2, title: 'Bright', rating: '3', img: 'https://i.ibb.co/f1vCkQ7/yarkost.jpg'
    },
    {
        id: 3, title: 'По наклонной', rating: '9', img: 'https://i.ibb.co/2swxhyd/po-naklonnoy.jpg'
    },
    {
        id: 4, title: 'Tor', rating: '4.5', img: 'https://i.ibb.co/tzk9fcf/tor.jpg'
    }, 
    {
        id: 5, title: 'Gemini', rating: '5.2', img: 'https://i.ibb.co/YWLdr4d/gemini.jpg'
    },
    {
        id: 6, title: 'Finch', rating: '2.5', img: 'https://i.ibb.co/fk9Pdjq/finch.jpg'
    },
    {
        id: 7, title: 'Xitman', rating: '6.9', img: 'https://i.ibb.co/ZzzfVMs/hitman.jpg'
    },
    {
        id: 8, title: 'Shazam', rating: '5.0', img: 'https://i.ibb.co/rfV03vs/Shazam.jpg'
    },
    {
        id: 9, title: 'Lara Kroft', rating: '8.9', img: 'https://i.ibb.co/dmSbmqs/lara-kroft.jpg'
    },
    {
        id: 10, title: 'Doctor Strange', rating: '7.4', img: 'https://i.ibb.co/HNMqmjG/Doctor-Strange.jpg'
    },
    
    
]

function changeRadius(change) {
   
    if(change > 7) {
        return 'green'
    }else if(change > 4) {
        return 'yellow'
    }else {
        return 'red'
    }
}
const content = document.querySelector('.content')

const createEl = (arr) => {
    
    
                arr.sort((a,b) => a.rating - b.rating).forEach((item) => {
                    const itemEl = document.createElement('div')
                    itemEl.innerHTML = `
                    <div data-id="${item.id}" class="card">
                        <div class="card-title">${item.title}</div>
                            <div class="card-rating card-rating--${changeRadius(item.rating)}">${item.rating}</div>
                            <div class="card-image">
                                <img class="image" src="${item.img}" alt="">
                            </div>
                            <div class="card-button">
                                <button class="btn">Watch</button>
                            </div>
                    </div>`
                    
                content.appendChild(itemEl)
            


                const btn = document.querySelectorAll('.btn')
                btn.forEach((btnEl) => {
                    btnEl.addEventListener('click', () => {
                        modal.classList.add('active')
                        body.classList.add('removeScroll')
                    })
                closeModal.addEventListener('click', () => {
                    modal.classList.remove('active')
                    body.classList.remove('removeScroll')
                })
            })
        })
}



const checkbox = document.querySelector('#checkbox')

const sortBefore7Raring = () => {
    checkbox2.checked = false
    content.innerHTML = ''
    const res = arr.filter(el => {
        if(el.rating < 7 && el.rating > 4) {
            const itemEl = document.createElement('div')
                    itemEl.innerHTML = `
                    <div data-id="${el.id}" class="card">
                        <div class="card-title">${el.title}</div>
                            <div class="card-rating card-rating--${changeRadius(el.rating)}">${el.rating}</div>
                            <div class="card-image">
                                <img class="image" src="${el.img}" alt="">
                            </div>
                            <div class="card-button">
                                <button class="btn">Watch</button>
                            </div>
                    </div>`

            content.appendChild(itemEl)
        }

    })

} 

checkbox.addEventListener('click', sortBefore7Raring)

const checkbox2 = document.querySelector('#checkbox2')


const sortAfter7Raring = () => {
    checkbox.checked = false
    content.innerHTML = ''
    const res = arr.filter(el => {
        if(el.rating > 7) {
            const itemEl = document.createElement('div')
                    itemEl.innerHTML = `
                    <div data-id="${el.id}" class="card">
                        <div class="card-title">${el.title}</div>
                            <div class="card-rating card-rating--${changeRadius(el.rating)}">${el.rating}</div>
                            <div class="card-image">
                                <img class="image" src="${el.img}" alt="">
                            </div>
                            <div class="card-button">
                                <button class="btn">Watch</button>
                            </div>
                    </div>`

            content.appendChild(itemEl)
        }

    })

}

checkbox2.addEventListener('click', sortAfter7Raring)   


    

const modal = document.querySelector('.modal'),
          closeModal = document.querySelector('.span'),
          body = document.querySelector('body'),
          modalContent = document.querySelector('.modal-content__text'),
          btn = document.querySelectorAll('.btn')
          

window.addEventListener('click', (event) => {
    
    const btn = event.target.closest('.card-button')
    
    if(btn) {
        const card = btn.closest('.card')
        
              infoCard = {
                title: card.querySelector('.card-title').innerText,
                rating: card.querySelector('.card-rating').innerText,
                cardImg: card.querySelector('.image').getAttribute('src')
              } 
                modalContent.innerHTML = `
                    <div class="modal-content__text">
                        <h4>Name: ${infoCard.title}</h4>
                        <h4>Rating: ${infoCard.rating}</h4>
                        <h4>Description: </h4>
                    </div>

                `
    }
})
    
createEl(arr)


