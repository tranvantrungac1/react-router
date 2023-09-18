import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../logo.png';
import bell from './bell.png';
import user from './Group 2.png';
import logout from './sign-out-alt.png';
export default function Layout() {
    return (
        <>
            <header>
                <div className="Header">
                    <div className="Left">
                        <img src={logo}/>
                    </div>
                    <div className="Right">
                        <div className="Bell">
                            <img src={bell}/>
                        </div>
                        <div className="User">
                            <img src={user}/>
                        </div>
                        <div className="Logout">
                            <img src={logout}/>
                        </div>
                    </div>
                </div>
            </header>
            <body className="Body">
                <div className="Lside">
                    <Link className="PriBtn" to={'/'}>Quản lý tài khoản</Link>
                    <Link className="ScdBtn" to={'/'}>Quản lý nhân viên</Link>
                    <Link className="ScdBtn" to={'/'}>Quản lý đội bếp</Link>
                    <Link className="ScdBtn" to={'/'}>Tài khoản quản trị viên</Link>
                    <Link className="PriBtn" to={'/depart'}>Quản lý phòng ban</Link>
                    <Link className="PriBtn" to={'/system'}>Cài đặt hệ thống</Link>
                </div>
                <div className="Rside" id ="main">
                    <Outlet />
                </div>
            </body>            
        </>
    )
}