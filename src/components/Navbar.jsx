import {Link, useNavigate} from 'react-router-dom'
import react from 'react'
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'
import  './Navbar.css'
import {useState} from 'react'
const Navbar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handlSubmit = (e) => {
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  

    return(
        <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie /> MoviesLib</Link>
        </h2>
    <form onSubmit={handlSubmit}>
     <input type="text" placeholder="Busque um filme" onChange={(e)=>setSearch(e.target.value)} value={search}/>
     <button type="submit">
        <BiSearchAlt2/>
     </button>
    </form>
      </nav>
    )
}

export default Navbar