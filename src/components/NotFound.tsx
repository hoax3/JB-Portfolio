import { ImSad } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'


export const NotFound = () => {
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/')
    return (
        <div style={{textAlign:'center', paddingTop:'8em'}}>
            <h1>Page Not Found <ImSad /></h1>
            <p>Looks like you hit a page that doesn't exist. Click the button below to return to the country roads.</p>
            <button type='button' onClick={handleOnClick} style={{borderRadius:'10px', padding:'10px', backgroundColor:'black', color:'white', fontSize:'2em'}}>
                Take Me HOOOOOOME
            </button>
        </div>
    )
    }
