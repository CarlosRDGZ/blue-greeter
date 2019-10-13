const inpUser = document.getElementById('user')
const inpPassword = document.getElementById('password')
const imgUserPhoto = document.getElementById('user-photo')
const imgBackground = document.getElementById('background')
const images = [
  '1133740510019638.jpg',
  '1457725235322.jpg',
  'black-cat-13.jpg',
  'C__Data_Users_DefApps_AppData_INTERNETEXPLORER_Temp_Saved Images_51800_star_wars 1.jpg',
  'ending-sf1-ryu-special-bengus.png',
  'lara-croft-tomb-raider-video-game-wallpaper-2.jpg',
  'street-fighter-hd-wallpapers-69888-2556373.png',
  'thumb-1920-509913.jpg',
  'thumb-1920-563077.jpg',
  'thumb-1920-854554.png',
  'tom gronk.jpg',
  'ultimate-spider-man-wallpapers-27724-2111458.jpg',
  'YOMI.Fantasy.Strike.full.747065.jpg'
]

function setUserInfo(user) {
  inpUser.textContent = user.display_name
  imgUserPhoto.src = user.image
  lightdm.start_authentication(user.username);
}

function setBackground() {
  const lastSelectBackgroundIndex =
    Number(localStorage.getItem('backgroundIndex')) || -1

  let selectedIndex = random(images.length)
  while (selectedIndex === lastSelectBackgroundIndex)
    selectedIndex = random(images.length)

  localStorage.setItem('backgroundIndex', selectedIndex)
  imgBackground.src = 'images/' + images[selectedIndex]
  // imgBackground.height = screen.height
}

function random(n) {
  return Math.floor(Math.random() * n)
}

function provideSecret() {
  if (inpPassword.value) {
    lightdm.provide_secret(inpPassword.value)
  }
}

function authentication_complete() {
  if (lightdm.is_authenticated)
    lightdm.login(lightdm.authentication_user, 'i3');
  else {
    console.log('error')
  }
}

window.onload = function() {
  this.setBackground()
  this.setUserInfo(lightdm.users[0])
}