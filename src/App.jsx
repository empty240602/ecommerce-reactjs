import './App.css';
import Myfooter from '@components/Footer/Footer';
import Myheader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';

function App() {
    return (
        <>
            <MainLayout>
                <Myheader />
                Content
                <Myfooter />
            </MainLayout>
        </>
    );
}

export default App;
