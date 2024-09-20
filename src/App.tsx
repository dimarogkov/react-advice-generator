import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <main className='relative w-full max-w-[1440px] m-auto'>
            <Outlet />
        </main>
    );
};
