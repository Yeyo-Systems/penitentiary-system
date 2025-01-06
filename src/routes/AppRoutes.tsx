import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PrivateRoute } from './components';
import { ADMIN_POLICY, USER_POLICY } from './constants';

import { MainLayout, SimpleLayout } from '../layouts';

import { AdminTestPage } from '../areas/admin';
import { DashboardPage } from '../areas/app';
import { LoginPage } from '../areas/auth';
import { PageNotFoundPage } from '../areas/common';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* auth */}
        <Route element={<SimpleLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* app */}
        <Route path="/" element={<PrivateRoute roles={USER_POLICY} />}>
          <Route element={<MainLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Route>

        {/* admin */}
        <Route path="/admin" element={<PrivateRoute roles={ADMIN_POLICY} />}>
          <Route element={<MainLayout />}>
            <Route index element={<AdminTestPage />} />
          </Route>
        </Route>

        {/* not found */}
        <Route element={<SimpleLayout />}>
          <Route path="*" element={<PageNotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
