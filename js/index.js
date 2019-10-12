const userBox = document.getElementById('user')
const userPhoto = document.getElementById('user-photo')

function setUserInfo(user) {
  userBox.textContent = user.display_name
  userPhoto.src = user.image
}

window.onload = function() {
  this.setUserInfo(lightdm.users[0])
}