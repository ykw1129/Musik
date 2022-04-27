import React from 'react';

type LoaderProps = {
    height?: string | number;
    width?: string | number;
    color?: string;
    label?: string;
    radius?: number;
};

export const Loader = ({
    height = 80,
    width = 80,
    color = '#31c27c',
    label = '',
    radius = 18,
}: LoaderProps) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 38 38"
        stroke={color}
        aria-label={label}
    >
        <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
                <circle strokeOpacity=".5" cx="18" cy="18" r={radius} />
                <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </path>
            </g>
        </g>
    </svg>
);
