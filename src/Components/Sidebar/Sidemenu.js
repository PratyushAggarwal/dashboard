import React from 'react';
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";
import { BiHomeAlt, BiMap , BiSearchAlt2 } from "react-icons/bi";
import { FiCalendar , FiSettings} from "react-icons/fi";
import { IoChatbubblesOutline, IoNewspaperOutline } from "react-icons/io5";
import {IoIosLogOut} from "react-icons/io";
import { MdOutlineSpeed, MdOutlineKeyboardArrowRight, MdKeyboardArrowDown ,MdNotificationsNone , MdLockOutline , MdSupport } from "react-icons/md";
import { AiOutlineShop, AiOutlineTable, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineMail, HiOutlineCube , HiAdjustments } from "react-icons/hi";
import { RiRssLine, RiTodoLine, RiWindowLine, RiFileChartLine, RiStackLine, RiBookmarkFill } from "react-icons/ri";
import { GoFileSubmodule } from "react-icons/go";
import { BsBag, BsGlobe } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { useState } from 'react';
import {CgProfile} from "react-icons/cg";
import {GrSettingsOption} from "react-icons/gr";

const routes1 = [
    {
        path: "/",
        name: "Dashboard",
        icon: <BiHomeAlt size={18}/>,
        sub: true,
        open: false,
        subroute: [
            {
                path: "/Dashboard/Analytics",
                name: "Analytics",
            },
            {
                path: "/Dashboard/Ecommerce",
                name: "Ecommerce",
            },
            {
                path: "/Dashboard/Projects",
                name: "Projects",
            },
            {
                path: "/Dashboard/ewallets",
                name: "E-wallets",
            },
        ]
    },

];

const routes2 = [
    {
        path: "/calender",
        name: "Calender",
        icon: <FiCalendar size={18}/>,
        sub: false,
    },
    {
        path: "/chat",
        name: "Chat",
        icon: <IoChatbubblesOutline size={18}/>,
        sub: false,
    },
    {
        path: "/crm",
        name: "CRM",
        icon: <MdOutlineSpeed size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/crm/Dasboard",
                name: "Dashboard",
            },
            {
                path: "/crm/project",
                name: "Project",
            },
            {
                path: "/crm/orderlist",
                name: "Orders List",
            },
            {
                path: "/crm/clients",
                name: "Clients",
            },
            {
                path: "/crm/management",
                name: "Management",
            },
        ]
    },
    {
        path: "/ecommerce",
        name: "Ecommerce",
        icon: <AiOutlineShop size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/ecommerce/products",
                name: "Products",
            },
            {
                path: "/ecommerce/orders",
                name: "Orders",
            },
            {
                path: "/ecommerce/customers",
                name: "Customers",
            },
        ]
    },
    {
        path: "/email",
        name: "Email",
        icon: <HiOutlineMail size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/email/inbox",
                name: "Inbox",
            },
            {
                path: "/email/reademail",
                name: "Read Email",
            },

        ]
    },
    {
        path: "/projects",
        name: "Projects",
        icon: <BsBag size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/projects/list",
                name: "List",
            },
            {
                path: "/projects/details",
                name: "Details",
            },
            {
                path: "/projects",
                name: "Create Project",
            },
        ]
    },
    {
        path: "/socialfeed",
        name: "Social Feed",
        icon: <RiRssLine size={18}/>,
        sub: false,
    },
    {
        path: "/tasks",
        name: "Tasks",
        icon: <RiTodoLine size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/tasks",
                name: "List",
            },
            {
                path: "/tasks",
                name: "Details",
            },
            {
                path: "/tasks",
                name: "Kanban Board",
            },
        ]
    },
    {
        path: "/filemanager",
        name: "File Manager",
        icon: <GoFileSubmodule size={18}/>,
        sub: false,
    },
];

const routes3 = [
    {
        path: "/pages",
        name: "Pages",
        icon: <IoNewspaperOutline size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/pages",
                name: "Profile",
            },
            {
                path: "/pages",
                name: "Authentication",
            },
            {
                path: "/pages",
                name: "Error",
            },
        ]
    },
    {
        path: "/landing",
        name: "Landing",
        icon: <BsGlobe size={18}/>,
    },
    {
        path: "/layouts",
        name: "Layouts",
        icon: <RiWindowLine size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/layouts",
                name: "Horizontal",
            },
            {
                path: "/layouts",
                name: "Detached",
            },
            {
                path: "/layouts",
                name: "Full",
            },
        ]
    },

];

const routes4 = [
    {
        path: "/baseui",
        name: "Base UI",
        icon: <HiOutlineCube size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/baseui",
                name: "Avatar",
            },
            {
                path: "/baseui",
                name: "Badges",
            },
            {
                path: "/baseui",
                name: "Cards",
            },
        ]
    },
    {
        path: "/extendedui",
        name: "Extended UI",
        icon: <RiBookmarkFill size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/extendedui",
                name: "Dragula",
            },
            {
                path: "/extendedui",
                name: "Ratings",
            },
            {
                path: "/extendedui",
                name: "TreeView",
            },
        ]
    },
    {
        path: "/widgets",
        name: "Widgets",
        icon: <RiStackLine size={18}/>,
    },
    {
        path: "/icons",
        name: "Icons",
        icon: <GiSteeringWheel size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/icons",
                name: "Dripicons",
            },
            {
                path: "/icons",
                name: "Material Design",
            },
        ]
    },
    {
        path: "/forms",
        name: "Forms",
        icon: <FaWpforms size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/forms",
                name: "Validation",
            },
            {
                path: "/forms",
                name: "Wizard",
            },
        ]
    },
    {
        path: "/charts",
        name: "Charts",
        icon: <RiFileChartLine size={18}/>,
        sub: true,
        subroute: [
            {
                path: "/charts",
                name: "Apex Chart",
            },
            {
                path: "/charts",
                name: "Brite Chart",
            },
        ]
    },
    {
        path: "/tables",
        name: "Tables",
        icon: <AiOutlineTable size={18}/>,
    },
    {
        path: "/maps",
        name: "Maps",
        icon: <BiMap size={18}/>,
    },
    {
        path: "/multilevel",
        name: "MultiLevel",
        icon: <GoFileSubmodule size={18}/>,
    },

];

const SideBar = ({ children }) => {
    const [dash, setDash] = useState("None");
    const [name, setName] = useState("menu-close");
    const [bar, setBar] = useState("bars-close");
    const [rest, setRest] = useState("rest-close");

    function clickHandler(e) {
        if (name === "menu-close") {
            setDash("None");
        }
        else if(e===dash){
            setDash("None");
        }
        else {
            setDash(e);
        }
    }

    function changeName(e) {
        if (name === "menu") {
            setName("menu-close");
            setBar("bars-close");
            setRest("rest-close");
        }
        else {
            setName("menu");
            setBar("bars");
            setRest("rest");
        }
    }

    // console.log(document.getElementById("content").scrollHeight);
    // let x = element.scrollHeight;

    return (
        <div className='wrapper'>
            <div className="main.container">
                    <motion.div className={name} >
                    <div className="top_section" ><img src="https://coderthemes.com/hyper/saas/assets/images/logo.png" alt="logo" className="logo" /></div>
                    <div className="top_section1" ><img src="https://coderthemes.com/hyper/saas/assets/images/logo_sm.png" alt="logo" className="logo" /></div>
                    <div className="description">Navigation</div>

                    <section className="routes1">
                        {routes1.map((route) => (
                            <div className="item">
                                    <NavLink to={route.path} key={route.name} className="elements" onClick={() => clickHandler(route.name)}>
                                        <div className="icon">
                                            {route.icon}
                                        </div>
                                        <div className="link_text">Dashboard</div>
                                        <div className="arrowicon" >
                                            {dash!==route.name && route.sub && <MdOutlineKeyboardArrowRight />}
                                        </div>
                                        <div className="arrowicon" >
                                            {dash===route.name && route.sub && <MdKeyboardArrowDown />}
                                        </div>
                                    </NavLink>
                                    {dash===route.name && route.subroute.map((subroute) => (
                                        <NavLink to={subroute.path} key={subroute.name} className="subelements">
                                            <div className="link_text">{subroute.name}</div>
                                        </NavLink>
                                    ))}
                            </div>
                        ))}
                    </section>

                    <div className="description">Apps</div>
                    <section className="routes2">
                        {routes2.map((route) => (
                            <div>
                                <NavLink to={route.path} key={route.name} className="elements" onClick={() => clickHandler(route.name)}>
                                    <div className="icon">
                                        {route.icon}
                                    </div>
                                    <div className="link_text" >{route.name}</div>
                                    <div className="arrowicon" >
                                        {dash!==route.name && route.sub && <MdOutlineKeyboardArrowRight />}
                                    </div>
                                    <div className="arrowicon" >
                                        {dash===route.name && route.sub && <MdKeyboardArrowDown />}
                                    </div>
                                </NavLink>
                                {dash===route.name && route.subroute && route.subroute.map((subroute) => (
                                    <NavLink to={subroute.path} key={subroute.name} className="subelements">
                                        <div className="link_text">{subroute.name}</div>
                                    </NavLink>
                                ))}
                            </div>

                        ))}
                    </section>

                    <div className="description">Custom</div>
                    <section className="routes3">
                        {routes3.map((route) => (
                            <div>
                                <NavLink to={route.path} key={route.name} className="elements" onClick={() => clickHandler(route.name)}>
                                    <div className="icon">
                                        {route.icon}
                                    </div>
                                    <div className="link_text">{route.name}</div>
                                    <div className="arrowicon" >
                                        {dash!==route.name && route.sub && <MdOutlineKeyboardArrowRight />}
                                    </div>
                                    <div className="arrowicon" >
                                        {dash===route.name && route.sub && <MdKeyboardArrowDown />}
                                    </div>
                                </NavLink>
                                {dash===route.name && route.subroute && route.subroute.map((subroute) => (
                                    <NavLink to={subroute.path} key={subroute.name} className="subelements">
                                        <div className="link_text">{subroute.name}</div>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </section>

                    <div className="description">Components</div>
                    <section className="routes4">
                        {routes4.map((route) => (
                            <div>
                                <NavLink to={route.path} key={route.name} className="elements" onClick={() => clickHandler(route.name)}>
                                    <div className="icon">
                                        {route.icon}
                                    </div>
                                    <div className="link_text">{route.name}</div>
                                    <div className="arrowicon" >
                                        {dash!==route.name && route.sub && <MdOutlineKeyboardArrowRight />}
                                    </div>
                                    <div className="arrowicon" >
                                        {dash===route.name && route.sub && <MdKeyboardArrowDown />}
                                    </div>
                                </NavLink>
                                {dash===route.name && route.subroute && route.subroute.map((subroute) => (
                                    <NavLink to={subroute.path} key={subroute.name} className="subelements">
                                        <div className="link_text">{subroute.name}</div>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </section>
                    </motion.div>
                <div className='content-page' id="content">
                    {/* {console.log(document.getElementById("content").scrollHeight)} */}
                <div className={bar}>
                    <AiOutlineMenu size={20} width={25} onClick={changeName} className="list" />
                    <form className="search">
                    <div className="input-group">
                        <BiSearchAlt2 size={20} className="search-icon"/>
                        <input
                        type="text"
                        className="form-control dropdown-toggle"
                        placeholder="Search..."
                        id="top-search"
                        />
                        <button className="input-group-text btn-primary" type="submit">Search</button>
                    </div>
                    </form>
                    <div className="more-icons">
                        <div className="lang">
                            <div className="dropdown">
                            <a
                                href="/"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <div className="eng">
                                <img src="https://coderthemes.com/hyper/saas/assets/images/flags/us.jpg" alt="flag" className="flag" />
                                <div >English</div>
                                <MdKeyboardArrowDown  />
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a href="/dashboard" className="dropdown-item">
                                    <img src="https://coderthemes.com/hyper/saas/assets/images/flags/germany.jpg" alt="flag" className="flag" />
                                    <div>German</div>
                                
                                </a>
                                <a href="/dashboard" className="dropdown-item">
                                    <img src="https://coderthemes.com/hyper/saas/assets/images/flags/italy.jpg" alt="flag" className="flag" />
                                    <div>Italian</div>
                                </a>
                                <a href="/dashboard" className="dropdown-item">
                                    <img src="https://coderthemes.com/hyper/saas/assets/images/flags/spain.jpg" alt="flag" className="flag" />
                                    <div>Spanish</div>
                                </a>
                                <a href="/dashboard" className="dropdown-item">
                                    <img src="https://coderthemes.com/hyper/saas/assets/images/flags/russia.jpg" alt="flag" className="flag" />
                                    <div>Russian</div>
                                </a>
                            </div>
                            </div>
                        </div>
                            
                        <MdNotificationsNone className="noti" size={30} />
                        <HiAdjustments className="adjust" size={30}/>
                        <FiSettings className="settings" size={30}/>
                    </div>
                
                    <div className="dropdown">
                        <a
                            href="/"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                        <div className="profile">
                            <img src="https://coderthemes.com/hyper/saas/assets/images/users/avatar-1.jpg" alt="profile" className="profile-img" />
                            <div className="pr-name">
                                <div>Dominic Keller</div>
                                <div>Founder</div>
                            </div>
                        </div>
                        </a>
                    <div
                            className="dropdown-menu dropdown-menu-end"
                            style={{
                                position: "absolute",
                                inset: "0px 0px auto auto",
                                margin: 0,
                                transform: "translate(-0.046875px, 72px)"
                            }}
                            data-popper-placement="bottom-end"
                            >
                            {/* item*/}
                            <div className=" dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>
                            {/* item*/}
                            <a href="/dashboard" className="dropdown-item notify-item">
                                <CgProfile className="profile-icons"/>
                                <span>My Account</span>
                            </a>
                            {/* item*/}
                            <a href="/dashboard" className="dropdown-item notify-item">
                                <GrSettingsOption className="profile-icons" />
                                <span>Settings</span>
                            </a>
                            {/* item*/}
                            <a href="/dashboard" className="dropdown-item notify-item">
                                <MdSupport className="profile-icons" />
                                <span>Support</span>
                            </a>
                            {/* item*/}
                            <a href="/dashboard" className="dropdown-item notify-item">
                                <MdLockOutline className="profile-icons" />
                                <span>Lock Screen</span>
                            </a>
                            {/* item*/}
                            <a href="/dashboard" className="dropdown-item notify-item">
                                <IoIosLogOut className="profile-icons" />
                                <span>Logout</span>
                            </a>
                            </div>
                            </div>
                </div>
                <div className={rest}>
                    {children}
                </div>
                </div>
                
                        
                </div>
        </div>
        
    );

}

export default SideBar;