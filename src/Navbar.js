import { Link } from "react-router-dom";
import TheatersIcon from '@mui/icons-material/Theaters';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <Button
                    variant="outlined"
                    size='large'
                    color="secondary"
                    endIcon={<TheatersIcon style={{ maxWidth: '40px', maxHeight: '40px', minWidth: '40px', minHeight: '40px' }} />}
                >
                    <h2>The Movie Site</h2>
                </Button>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create" className='create-movie'>Add New Movie</Link>
            </div>
        </nav >
    );
}

export default Navbar;