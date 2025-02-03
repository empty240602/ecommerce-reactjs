// import HomePage from '@components/HomePage/HomePage';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
// import Blog from '@components/Blog/Blog';
import routers from '@/routers/routers';
import { Suspense } from 'react';

function App() {
    const root = document.getElementById('root');
    return ReactDOM.createRoot(root).render(
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routers.map((item, index) => {
                        return (
                            <Route
                                path={item.path}
                                element={<item.component />}
                                key={index}
                            />
                        );
                    })}
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
