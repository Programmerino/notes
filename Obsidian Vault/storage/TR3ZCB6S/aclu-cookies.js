function setCookies(envName) {

  let cookieString = ''

  // prepend cookie name with the current env
  cookieString += (envName) ? envName + '-' : ''

  // set last site visit to current date/time
  const currentDate = new Date()
  cookieString += 'aclu-last-visit=' + encodeURIComponent(currentDate.toUTCString())

  // set expiration date 1 year in future
  const expiration = new Date(currentDate.getTime())
  expiration.setFullYear(currentDate.getFullYear() + 1)

  cookieString += ';expires=' + expiration.toUTCString()

  // set the path and SameSite policy
  cookieString += ';Path=/;Domain=aclu.org;Secure;SameSite=Lax'

  // set cookie in browser
  document.cookie = cookieString
}

function init(envName) {
  setCookies(envName)
}