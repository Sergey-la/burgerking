import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { publicRoutes } from './routes';
import { NOT_FOUND_ROUTE } from './utils/consts';
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

            <Route path="*" element={<Navigate to={NOT_FOUND_ROUTE} />} />
        </Routes>
    );
}

export default AppRouter;
