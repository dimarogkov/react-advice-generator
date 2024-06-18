import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <main className='relative flex items-center justify-center w-full max-w-[1440px] min-h-screen p-[20px] sm:p-[24px] m-auto'>
            <Outlet />
        </main>
    );
};
