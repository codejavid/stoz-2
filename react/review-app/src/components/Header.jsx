import { Link } from "react-router-dom"


const Header = ({text,bgColor,textColor}) => {

  const headerStyle = {
    backgroundColor:bgColor,
    color:textColor
  }

  return (
    <header style={headerStyle}>
        <div className="container">
           <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignContent:"center"
           }}>
             <Link to="/">
             <h2>{text}</h2>
             </Link>
             <nav style={{
            display:"flex",
            gap:"20px"
           }}>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
             </nav>
           </div>
        </div>
    </header>
  )
}

export default Header