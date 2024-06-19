import cn from 'classnames';

type Props = {
    type?: 'button' | 'reset' | 'submit';
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Btn: React.FC<Props> = ({ type = 'button', className = '', disabled = false, onClick = () => {} }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                `absolute left-[50%] -bottom-[25px] sm:-bottom-[28px] flex items-center justify-center w-[50px] sm:w-[56px] h-[50px] sm:h-[56px] rounded-[50%] bg-[#52ffa8] transition-opacity duration-300 hover:opacity-75 -translate-x-[50%] ${className}`,
                {
                    'pointer-events-none bg-slate-300': disabled,
                }
            )}
        >
            <img src='btn_icon.svg' alt='btn_icon' className='relative w-[20px] sm:w-[24px]' />
        </button>
    );
};
