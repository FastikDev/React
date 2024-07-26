import React, { createRef } from 'react';

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = createRef();
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const formData = new FormData(this.formRef.current);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        // Handle checkbox separately as it doesn't work with FormData
        data.student = this.formRef.current.student.checked;

        this.props.onSubmit(data);
    }

    render() {
        return (
            <form className='login-form' ref={this.formRef} onSubmit={this.handleSubmit}>
                <h1 className='form-title'>Profile</h1>
                <div className='form-control'>
                    <label className='form-label' htmlFor='name'>Name</label>
                    <input className='form-input' type='text' id='name' name='name' />
                </div>
                <div className='form-control'>
                    <label className='form-label' htmlFor='student'>Student</label>
                    <input className='form-input' type='checkbox' id='student' name='student' />
                </div>
                <div className='form-control'>
                    <label className='form-label' htmlFor='occupation'>Occupation</label>
                    <select name='occupation' className='form-input' id='occupation'>
                        <option value=''>Select...</option>
                        <option value='london'>London</option>
                        <option value='new-york'>New York</option>
                        <option value='sidney'>Sidney</option>
                        <option value='berlin'>Berlin</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label className='form-label' htmlFor='about'>About</label>
                    <textarea name='about' className='form-input' id='about' />
                </div>
                <button className='submit-button' type='submit'>Submit</button>
            </form>
        );
    }
}

export default UserForm;
