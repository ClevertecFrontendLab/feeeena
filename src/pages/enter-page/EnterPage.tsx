import React from 'react';
import '@components/enter/login.css';

import { useNavigate } from 'react-router-dom';

import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import ContForm from '@constants/form/contForm/contForm';
import FormEl from '@constants/form/formEl';

import TabsEnter from '@components/enter/tabsEnter';
import LogoEnetr from '@components/enter/logoEnter';

export const Enter: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        

        if () {
            navigate('/main'); 
        } else {
            
            navigate('/login-error');
        }
    };
    return (
        <LayoutEnter>
            <ContForm>
                <LogoEnetr />
                <FormEl {/*onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError}*/} >
                    <TabsEnter />
                </FormEl>
            </ContForm>
        </LayoutEnter>
    );
};
