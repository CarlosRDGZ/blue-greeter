const userBox = document.getElementById('user')
const userPhoto = document.getElementById('user-photo')

function setUserInfo(user) {
  userBox.textContent = user.display_name
  userPhoto.src = user.image
  lightdm.start_authentication(user.username);
}

function authentication_complete()
{
  if (lightdm.is_authenticated)
    lightdm.login (lightdm.authentication_user, 'i3');
  else {
    console.log('error')
  }

}

window.onload = function() {
  this.setUserInfo(lightdm.users[0])
}