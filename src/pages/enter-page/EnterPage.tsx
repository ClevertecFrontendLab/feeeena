import React from 'react';
import '@components/enter/login.css';

import { useNavigate } from 'react-router-dom';

import LayoutEnter from '@constants/layoutEnter/layoutEnter';
import ContForm from '@constants/form/contForm/contForm';
import FormEl from '@constants/form/formEl';

import TabsEnter from '@components/enter/tabsEnter';
import LogoEnetr from '@components/enter/logoEnter';

export const Enter: React.FC = () => {
    return (
        <LayoutEnter>
            <ContForm>
                <LogoEnetr />
                <FormEl>
                    <TabsEnter />
                </FormEl>
            </ContForm>
        </LayoutEnter>
    );
};
