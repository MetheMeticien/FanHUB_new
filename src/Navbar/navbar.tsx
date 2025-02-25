import "./navbar.css"

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src="assets/logo.png" alt="logo" />
            </div>
            <div className="search">
                <img src="assets/magnifying-glass.png" alt="" />
                <input type="text" placeholder="Search you fav celebs"/>
            </div>
            <div className="profile">
                <img src="assets/profile_pic.jpg" alt="dp" />
            </div>
        </div>
    );
}