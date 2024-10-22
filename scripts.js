const links = document.querySelectorAll('.links a')
const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')

for (let link of links) {
  if (link.pathname === window.location.pathname) {
    link.classList.add('bold')
  }
}

for (let card of cards) {
  const image = card.querySelector('.card_cover_image').getAttribute('src')
  const title = card.querySelector('.card_content_title').textContent 
  const author = card.querySelector('.card_content_author').textContent

  card.addEventListener('click', function() {
    modal.querySelector('.modal_cover_image').src = image
    modal.querySelector('.modal_content_title').textContent = title
    modal.querySelector('.modal_content_author').textContent = author
    modalOverlay.classList.add('active')
  })
}

modalOverlay.querySelector('.close_modal').addEventListener('click', function() {
  modal.querySelector('.modal_cover_image').src = ''
  modal.querySelector('.modal_content_title').textContent = ''
  modal.querySelector('.modal_content_author').textContent = ''

  modalOverlay.classList.remove('active')
})