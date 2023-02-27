import logo from '../Images/logo192.png'

const Header = () => {
    return(
        <h1 className='py-2 pl-2' style={{borderBottom:"1px solid #777"}}>
            <img style={{height:"35px",verticalAlign:"top"}} src={logo} alt="Logo"></img>
            <span className='pt-4 m-2 text-white-50'>React Course - CountOpedia</span>
        </h1>
    )
}
export default Header;