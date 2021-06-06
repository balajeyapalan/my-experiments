function DisplayContacts(){
    return(
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Pincode</th>
                    <th>View</th>
                    <th>Delete</th>                   
                </tr>
                <tr>
                    <td colSpan="11" align="center">No data found</td>
                </tr>
            </table>
        </div>
    );
}

export default DisplayContacts;