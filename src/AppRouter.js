import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { publicRoutes } from './routes';
import { MAIN_ROUTE } from './utils/consts';
import Layout from './components/Layout/Layout';

function AppRouter() {
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route
                    key={path}
                    path={path}
                    element={<Layout children={<Component />} />}
                    exact
                />
            ))}

            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
}

export default AppRouter;
