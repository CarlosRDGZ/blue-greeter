const inpUser = document.getElementById('user')
const inpPassword = document.getElementById('password')
const imgUserPhoto = document.getElementById('user-photo')

function setUserInfo(user) {
  inpUser.textContent = user.display_name
  imgUserPhoto.src = user.image
  lightdm.start_authentication(user.username);
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
  this.setUserInfo(lightdm.users[0])
}