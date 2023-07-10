import React from 'react'

const socialLink = [
  {
    name: 'logo Facebook',
    element: '/facebook.js'
  },
  {
    name: 'logo twitter',
    element: '/facebook.js'
  },
  {
    name: 'logo instagram',
    element: '/facebook.js'
  },
  {
    name: 'logo linkedin',
    element: '/facebook.js'
  },
]

const NavBar = () => {
  return (
    <header>
      <div class="header-top">

        <div class="container">

          <ul class="header-social-container">

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

          </ul>

          <div class="header-alert-news">
            <p>
              <b>Free Shipping</b>
              This Week Order Over - $55
            </p>
          </div>

          <div class="header-top-actions">

            <select name="currency">

              <option value="usd">USD &dollar;</option>
              <option value="eur">EUR &euro;</option>

            </select>

            <select name="language">

              <option value="en-US">English</option>
              <option value="es-ES">Espa&ntilde;ol</option>
              <option value="fr">Fran&ccedil;ais</option>

            </select>

          </div>

        </div>

      </div>
    </header>
  )
}

export default NavBar
