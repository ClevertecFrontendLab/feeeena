import React from 'react';
import '@components/enter/login.css';

import LayoutEnter from '@constants/layoutEnter.tsx';
import ContForm from '@constants/contForm.tsx';
import FormEl from '@constants/formEl.tsx';

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
