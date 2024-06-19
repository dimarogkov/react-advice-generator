type Props = {
    className?: string;
};

export const Decor: React.FC<Props> = ({ className = '' }) => {
    return (
        <div className={`w-full ${className}`}>
            <img src='decor.svg' alt='advice_decor' className='relative w-full' />
        </div>
    );
};
