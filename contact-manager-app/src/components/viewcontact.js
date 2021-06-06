function viewcontact(){
    return(
        <div>
            <table>
                <tr>
                    <th colSpan="2">View Contact Details</th>
                </tr>
                <tr>
                    <td>First Name:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td></td>
                </tr>

                <tr>
                    <td>DOB:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>City:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>State:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>PinCode:</td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" value="Back"/>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default viewcontact;