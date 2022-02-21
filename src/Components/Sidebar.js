import './Sidebar.css'


const Sidebar = () => {
    return ( 
        <div className="sidebar1">
            <div className="logo_content">
                <div className="logo">
                    <img src="./media/icons8-noodles-48.png" alt="" />
                    <div className="logo_name">Foodie</div>
                </div>
                <i class='bx bx-menu' id="btn"></i>
            </div>
            <ul className="nav_list">
                <li>
                    <i class='bx bx-search'></i>
                    <input type="text" placeholder="Search..." />
                   
                    {/* <span className="tooltip">Home</span> */}
                </li>
                <li>
                    <a href="http://localhost:3000/home">
                    <i class='bx bx-grid-alt'></i>
                    <span className="links_name">Home</span>
                    </a>
                    {/* <span className="tooltip">Home</span> */}
                </li>
                <li>
                    <a href="http://localhost:3000/my-cart">
                    <i class='bx bx-cart-alt' ></i>
                    <span className="links_name">My Cart</span>
                    </a>
                    {/* <span className="tooltip">Home</span> */}
                </li>
                <li>
                    <a href="#">
                    <i class='bx bx-user'></i>
                    <span className="links_name">My Account</span>
                    </a>
                    {/* <span className="tooltip">Home</span> */}
                </li>
            </ul>
            <div className="profile_content">
                <div className="profile">
                    <div className="profile_details">
                        <img src="https://www.kindpng.com/picc/m/285-2855863_a-festival-celebrating-tractors-round-profile-picture-placeholder.png" alt="" />
                        <div className="name_job">
                            <div className="name">Varun Narayan</div>
                            <div className="job">React Developer</div>
                        </div>
                    </div>
                    <a href="http://localhost:3000/"><i class='bx bx-log-out' id="log_out"></i></a>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;