import React, { useState } from 'react';
import FormikForm from './FormikForm';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [fields, updateFields] = useState({
        role: 'Student',
        name: 'Name',
        email: 'example@iitbbs.ac.in',
        mobile_no: '1234567890'
    });

    return (
        <div className="container">
            <FormikForm fields={fields} updateFields={updateFields} />
        </div>
    );
}

export default App;
