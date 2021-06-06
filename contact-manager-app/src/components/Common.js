import App from '../App';
import AddContact from './AddContact.js';
import Header from './Header.js';
import DisplayContacts from './DisplayContacts'

function Common(){
    return(
        <div> 
        <Header/>
        <AddContact/>
        <DisplayContacts/>
        </div>
    );
}

export default Common;