import React from 'react';
import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ErrorBoundary } from './components/error-boundary';
import { ErrorFallback } from './components/error-fallback';
import Routing from './router';
import { StoreProvider } from './context/auth-context';
import Toast from './components/toast';
function App() {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <StoreProvider>
        <Toast />
        <Routing />
      </StoreProvider>
    </ErrorBoundary>

  );
}

export default App;
