import React, {ChangeEvent, useState} from 'react';
import {Link} from 'react-router-dom';

import Layout from '../components/login/layout';
import Input from '../components/common/Input';
import Checkbox from '../components/common/Checkbox';

import { onChangeHandler } from '../utils/onChangeHandler';

const Login = () =>{

    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });

    const handleUserLogin = () =>{

    };

    const handleOnChange=(e: ChangeEvent<HTMLInputElement> ) => {
        onChangeHandler({e, formState, setFormState});
    };

    return(
        <Layout>
            <>
                <div className='header-1 mb-5'>
                    <div>Log into your account</div>
                </div>
                
                <form onSubmit={handleUserLogin}>
                    <div>
                        <Input
                            type='text'
                            name='username'
                            placeholder='Username'
                            required={true}
                            value={ formState.username }
                            onChange={ handleOnChange }
                        />
                    </div>
                    <div className='mt-4'>
                        <Input
                            type='password'
                            name='password'
                            placeholder='Password'
                            required={true}
                            value={ formState.password }
                            onChange={ handleOnChange }
                        />
                    </div>

                    <div className='mt-5 d-flex justify-content-between'>
                        <Checkbox
                            name='rememberMe'
                            label='Remember me'
                            onChange={ handleOnChange }
                        />
                        <Link to={'/forgot-password'} className='text-1'>Forgot password?</Link>
                    </div>

                    <div className='mt-4 text-center'>
                        <button type='submit' className='btn button-1'>
                            Sign In
                        </button>
                    </div>
                </form>
            </>
        </Layout>
    );
};

export default Login;