import './App.css';
import Myfooter from '@components/Footer/Footer';
import Myheader from '@components/Header/Header';
import MyButton from '@components/Button/Button';
import MainLayout from '@components/Layout/Layout';

function App() {
    return (
        <>
            <MainLayout>
                <Myheader />
                Content
                <Myfooter />
                <MyButton />
            </MainLayout>
        </>
    );
}

export default App;
