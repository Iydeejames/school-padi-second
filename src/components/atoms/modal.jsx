import React from 'react';

export default function Modal({children}) {
    return <div className="fixed inset-0 z-50 bg-[#000000]/50 flex justify-center items-center">{children}</div>;
}
