import cn from 'classnames';

type Props = {
    type?: 'button' | 'reset' | 'submit';
    className?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Btn: React.FC<Props> = ({
    type = 'button',
    className = '',
    disabled = false,
    onClick = () => {},
}) => {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                `flex items-center justify-center w-full h-[48px] md:h-[54px] font-semibold text-[14px] px-[20px] rounded-[6px] text-[#fff] bg-[#3c8067] transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'pointer-events-none bg-slate-300': disabled,
                }
            )}
        >
            {/* <img src='btn_icon.svg' alt='btn_icon' /> */}
        </button>
    );
};
