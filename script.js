const photos = [
    {
        src: "Map.jpg",
        caption: "Map of Dutchtown"
    },
    {
        src: "Marquette_Park.jpg",
        caption: "Kids playing Soccer at Marquette Park"
    },
    {
        src: "Dutchtown_Strip.jpg",
        caption: "Dutchtown's central strip"
    },
    {
        src: "KeokukSt.jpg",
        caption: "East on Keokuk from California | Paul Sableman"
    }
]

const gallerySection = document.querySelector('.gallery')

for (const photo of photos) {

    const figure = document.createElement('figure')
    figure.classList.add('photo')

    const img = document.createElement('img')
    img.src = photo.src
    img.alt = photo.caption

    const caption = document.createElement('figcaption')
    caption.textContent = photo.caption

    figure.appendChild(img)
    figure.appendChild(caption)
    gallerySection.appendChild(figure)
}

const context = document.querySelector('#myChart')

new Chart(context, {
    type: 'doughnut',
    data: {
        labels: ['African-American', 'White', 'Asian', 'Two or More Races', 'Native American', 'Hispanic'],
        datasets: [{
            label: 'Racial and Ethnic Breakdown',
            data: [7785, 3993, 1275, 1228, 1075, 1858],
            backgroundColor: ['#752122', '#bc4749', '#f2e8cf', '#98c880', '#6a994e', '#386641']
        }]
    }
})

const button = document.querySelector('#truthB')
const text = document.querySelector('#truthT')

button.addEventListener('click', () => { text.classList.remove('hide') })