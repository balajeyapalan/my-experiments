function AddContact(){
    return(        
        <div>
            <table colSpan="2" rowSpan="2">
                <tr>
                    <th colSpan="2">Add Contact Form</th>
                </tr>
                <tr>
                    <td>First Name:</td>
                    <td><input type="text" id="firstname" name="firstname" value=""/></td>
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td><input type="text" id="lastname" name="lastname" value=""/></td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><input type="text" id="email" name="email" value=""/></td>
                </tr>

                <tr>
                    <td>DOB:</td>
                    <td><input type="text" id="dob" name="dob" value=""/></td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td><input type="text" id="address" name="address" value=""/></td>
                </tr>
                <tr>
                    <td>City:</td>
                    <td><input type="text" id="city" name="city" value=""/></td>
                </tr>
                <tr>
                    <td>State:</td>
                    <td><input type="text" id="state" name="state" value=""/></td>
                </tr>
                <tr>
                    <td>PinCode:</td>
                    <td><input type="text" id="pincode" name="pincode" value=""/></td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="button" value="Submit"/>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default AddContact;