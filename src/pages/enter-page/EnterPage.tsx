import React from 'react';
import '@components/enter/login.css';

import { useNavigate } from 'react-router-dom';

import LayoutEnter from '@constants/layoutEnter.tsx';
import ContForm from '@constants/form/contForm';
import FormEl from '@constants/form/formEl';

import TabsEnter from '@components/enter/tabsEnter';
import LogoEnetr from '@components/enter/logoEnter';

export const Enter: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        navigate('/main');
    };

    const handleLoginError = () => {
        navigate('/error');
    };
    return (
        <LayoutEnter>
            <ContForm>
                <LogoEnetr />
                <FormEl onLoginSuccess={handleLoginSuccess} onLoginError={handleLoginError}>
                    <TabsEnter />
                </FormEl>
            </ContForm>
        </LayoutEnter>
    );
};
