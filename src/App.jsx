import './stylesheet/main.css'
import pic from './assets/images/pic.jpg'

function App() {
  return (
    <>
      <div class="container-fluid text-bg">

        <div className="name-card">
          <img
            className="imgWrapper"
            src={pic}

            alt="Adetula Johnson Zion"
          />

          <div className="about-me-lg">
            <div className="about-me-sm">
              <h2 className="name-card-text">Zion Johnson</h2>
              <h3 className="name-card-role">Backend Engineer</h3>
              <p className="about-me-text">
                Zion is a motivated software developer and he is experienced in
                Javascript and NodeJS. He is always interested in Web-Security and
                creating user-friendly solutions with Tech.
                <br />
                He connects effectively, collaborates, and communicates effortlessly. He
                is a Computer Scientist that loves learning for life
              </p>
            </div>
          </div>

        </div>
        <h2 className="project-header">Projects</h2>

        <div className="project-wrapper">

          <div className="project-card">
            <h4 className="project-name">Library app</h4>

            <p className="project-text">
              Welcome to a reference library that allows book lovers get some facts
              about popular books. This app uses a role-based authentication with the
              power of EJS and some cool libraries
            </p>
            <a
              className="card-link"
              target="_blank"
              href="https://github.com/mczionjohnson/Penguin-Book-Library.git"
            >
              <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
            </a>
            <a
              className="card-link"
              target="_blank"
              href="https://penguin-book-library.onrender.com"
            >
              <i className="fa fa-link fa-2x" aria-hidden="true"></i>
            </a>
          </div>

          <div className="project-card">
            <h4 className="project-name">Blogging app</h4>

            <p className="project-text">
              Connect to database and enjoy this secured server for a blogging app! It
              also has input validations and allows user authentications
            </p>
            <a
              className="card-link"
              target="_blank"
              href="https://github.com/mczionjohnson/Blogging-api"
            >
              <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
            </a>
            <a
              className="card-link"
              target="_blank"
              href="https://blogging-api-el66.onrender.com/"
            >
              <i className="fa fa-link fa-2x" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="footer-wrapper">
          <h4 className="footer-text">You can reach me:</h4>


          <a className="footer-link" target="_blank" href="https://github.com/mczionjohnson">
            <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
          </a>
          <a className="footer-mail" target="_blank" href="mailto:mczionjohnson@gmail.com">
            mczionjohnson@gmail.com
          </a>
          <a className="footer-link" target="_blank" href="https://www.linkedin.com/in/the-zion-johnson/">
            <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
          </a>



        </div>
      </div>
    </>
  )
}

export default App
