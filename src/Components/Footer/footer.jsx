import './footer.scss'

export default function Footer() {
    return(                  
        <div className="footer">

        <div className="footer__widget">
            <ul className="share">
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            </ul>
        </div>
    
        <div className="footer__widget">
            <ul className="menu-footer">
                <li><a href="#">About</a></li>
                <li><a href="#">For Business</a></li>
                <li><a href="#">Suggestions</a></li>
                <li><a href="#">Help & FAQs</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
        </div>
    
        <div className="footer__widget mb-0">
            <p className="mb-1">©Copyright 2013 companyname inc.</p>
            <ul className="menu-footer">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
            </ul>
        </div>
    </div>
    );
}