import React, { FC, PropsWithChildren, useState } from 'react';
import "../Buttons/styles.css";

const Icon: FC<PropsWithChildren> = 
    ({ children }) => (
        <i className='material-symbols-outlined'>
           {children}  
        </i>
    );

export const Button = () => {
    const [isOpen, setIsOpen] =
        useState<boolean>(false);

    return (
        <div className={`fab ${isOpen ? "open" : ""}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <Icon>+</Icon>
            </button>
            <div className='menu'>
                <button>
                    <Icon>info</Icon>
                    <span>Add Users</span>
                </button>
                <button>
                    <Icon>plano</Icon>
                </button>
                <button>
                    <Icon>360°</Icon>
                    <span>+ diseños</span>
                </button>
                {/* other buttons */}
            </div>
        </div>
    )
};