import { Suspense } from 'react';

import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import ErrorBoundary from 'components/@shared/ErrorBoundary';
import ScrollToTop from 'components/@shared/ScrollToTop';
import Loading from 'components/Loading';
import LoginModal from 'components/Login';
import SignupModal from 'components/Signup';
import PageLayout from 'layouts/Page';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

import Routes from './Routes';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Router>
            <ScrollToTop />
            <PageLayout>
              <SignupModal />
              <LoginModal />
              <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                  <Routes />
                </Suspense>
              </ErrorBoundary>
            </PageLayout>
          </Router>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
