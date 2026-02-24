import './Footer.css'

function Footer() {
    return (
        <footer>
        <div className='footer-inner'>
            <p className='footer-logo'>My Shop</p>
            <div className='footer-links'>
                <a href="#">Instagram</a>
                <a href="#">Linkedin</a>
                <a href="#">Facebook</a>
                <a href="#">Email</a>
            </div>
            <p className='footer-copy'>©️ 2025 My Shop. All rights reserved.</p>
        </div>
       </footer>
    )
}

export default Footer