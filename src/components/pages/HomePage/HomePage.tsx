import { useEffect, useState } from 'react';
import { getAdvice } from '../../../services/advice';
import { Advice } from '../../../types/advice';

import { Card } from '../../elements/Card';
import { Decor } from '../../elements/Decor';
import { Btn, Label, Loader, Title } from '../../ui';

export const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [advice, setAdvice] = useState<Advice | null>(null);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let time = 0;
        setIsLoading(true);

        getAdvice()
            .then((data) => setAdvice(data.slip))
            .finally(() => (time = window.setTimeout(() => setIsLoading(false), 1000)));

        return () => {
            clearTimeout(time);
        };
    }, [counter]);

    return (
        <Card>
            <div className='w-full mb-[32px] last:mb-0'>
                {!isLoading ? (
                    <>
                        <Label className='mb-[20px] last:mb-0'>{`Advice # ${advice?.id}`}</Label>
                        <Title>"{advice?.advice}"</Title>
                    </>
                ) : (
                    <Loader />
                )}
            </div>

            <Decor className='mb-[28px] last:mb-0' />
            <Btn disabled={isLoading} onClick={() => setCounter((prev) => prev + 1)} />
        </Card>
    );
};
