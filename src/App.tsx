import React from 'react';
import './App.css';
import { ErrorBoundary } from './components/error-boundary';
import { ErrorFallback } from './components/error-fallback';
import Routing from './router';
function App() {
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <Routing />
    </ErrorBoundary>

  );
}

export default App;
