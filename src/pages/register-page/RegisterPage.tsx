import React from 'react';
import '@components/enter/login.css';

import { LayoutEnter } from '@constants/layoutEnter/layoutEnter';
import { ContForm } from '@constants/form/contForm/contForm';
import { FormEl } from '@constants/form/formEl';

import { TabsEnter } from '@components/enter/tabsEnter';
import { LogoEnter } from '@components/enter/logoEnter';
import { Registration } from '@components/enter/regist';

export const RegisterPage: React.FC = () => {
    return (
        <LayoutEnter>
            <ContForm>
                <LogoEnter />
                <FormEl>
                    <TabsEnter />
                    <Registration />
                </FormEl>
            </ContForm>
        </LayoutEnter>
    );
};
