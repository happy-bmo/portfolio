import PropTypes from 'prop-types';

export const GitHubIcon = ({ w = '1em', h = '1em' }) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        aria-hidden="true"
        focusable="false"
        height={w}
        width={h}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
    </svg>
);

export const InstagramIcon = ({ w = '1em', h = '1em' }) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        aria-hidden="true"
        focusable="false"
        height={h}
        width={w}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
        <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
    </svg>
);

export const HTMLIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path>
        <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path>
        <path
            fill="#EBEBEB"
            d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
        ></path>
        <path
            fill="#fff"
            d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
        ></path>
    </svg>
);

export const JSIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
        <path
            fill="#323330"
            d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
        ></path>
    </svg>
);

export const ReactIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <g fill="#61DAFB">
            <circle cx="64" cy="64" r="11.4"></circle>
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
        </g>
    </svg>
);

export const NodeIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <path
            fill="url(#a)"
            d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
        ></path>
        <path
            fill="url(#b)"
            d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"
        ></path>
        <path
            fill="url(#c)"
            d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
        ></path>
        <defs>
            <linearGradient
                id="a"
                x1="34.513"
                x2="27.157"
                y1="15.535"
                y2="30.448"
                gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#3F873F"></stop>
                <stop offset=".33" stopColor="#3F8B3D"></stop>
                <stop offset=".637" stopColor="#3E9638"></stop>
                <stop offset=".934" stopColor="#3DA92E"></stop>
                <stop offset="1" stopColor="#3DAE2B"></stop>
            </linearGradient>
            <linearGradient
                id="b"
                x1="30.009"
                x2="50.533"
                y1="23.359"
                y2="8.288"
                gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".138" stopColor="#3F873F"></stop>
                <stop offset=".402" stopColor="#52A044"></stop>
                <stop offset=".713" stopColor="#64B749"></stop>
                <stop offset=".908" stopColor="#6ABF4B"></stop>
            </linearGradient>
            <linearGradient
                id="c"
                x1="21.917"
                x2="40.555"
                y1="22.261"
                y2="22.261"
                gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".092" stopColor="#6ABF4B"></stop>
                <stop offset=".287" stopColor="#64B749"></stop>
                <stop offset=".598" stopColor="#52A044"></stop>
                <stop offset=".862" stopColor="#3F873F"></stop>
            </linearGradient>
        </defs>
    </svg>
);

export const NextJSIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <circle cx="64" cy="64" r="64"></circle>
        <path
            fill="url(#a)"
            d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"
        ></path>
        <path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path>
        <defs>
            <linearGradient
                id="a"
                x1="109"
                x2="144.5"
                y1="116.5"
                y2="160.5"
                gradientTransform="scale(.71111)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
                id="b"
                x1="121"
                x2="120.799"
                y1="54"
                y2="106.875"
                gradientTransform="scale(.71111)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
            </linearGradient>
        </defs>
    </svg>
);
export const BlazorIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <path
            fill="#5c2d91"
            d="M127.352 43.199c-5.727 35.891-36.562 62.379-72.902 62.633-3.566.137-7.137-.082-10.656-.648-15.18-2.574-26.496-15.402-27.16-30.785.125-17.336 14.148-31.359 31.488-31.484S79.68 56.617 80.047 73.953c.129 5.254-2.145 9.871-6.824 10-5 0-7.344-3.57-7.344-8.379V62.215c.004-4.496-3.621-8.156-8.117-8.191H46.559c-8.977-.062-16.832 6.012-19.035 14.715s1.824 17.781 9.75 21.996a19.5 19.5 0 0 0 23.688-4.223l.391-.582.391.645c2.738 3.719 7.152 5.82 11.762 5.602A15.54 15.54 0 0 0 87.902 75.93c.039-3.48-.348-6.949-1.16-10.328a39.57 39.57 0 0 0-42.969-30.926C23.645 36.879 8.43 53.922 8.512 74.168c.262 21.543 17.512 39.023 39.047 39.566 0 0 2.93.266 6.242.195a84.49 84.49 0 0 0 45.289-13.516c.191-.125.383.129.254.328a66.49 66.49 0 0 1-51.785 21.18c-12.75.23-25.039-4.762-34.02-13.812S-.332 86.723 0 73.977a48.37 48.37 0 0 1 19.426-38.73 47.38 47.38 0 0 1 27.941-9.223h15.031a42.29 42.29 0 0 0 31.203-13.777.59.59 0 0 1 .68-.141c.238.102.379.344.359.598-.637 6.758-2.887 13.262-6.562 18.969-.109.203-.09.453.051.633a.58.58 0 0 0 .598.215 45.45 45.45 0 0 0 31.602-26.055.8.8 0 0 1 1.367 0 57.58 57.58 0 0 1 5.656 36.734zM46.52 61.824c-6.422 0-11.633 5.207-11.633 11.633A11.64 11.64 0 0 0 46.52 85.09c6.426 0 11.633-5.211 11.633-11.633V62.602a.84.84 0 0 0-.801-.801zm0 0"
        ></path>
    </svg>
);

export const CSharpIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <path
            fill="#9B4F96"
            d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
        ></path>
        <path
            fill="#68217A"
            d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
        ></path>
        <path
            fill="#fff"
            d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"
        ></path>
    </svg>
);

export const JavaIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <path
            fill="#0074BD"
            d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
        ></path>
        <path
            fill="#EA2D2E"
            d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
        ></path>
        <path
            fill="#0074BD"
            d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
        ></path>
        <path
            fill="#EA2D2E"
            d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
        ></path>
        <path
            fill="#0074BD"
            d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
        ></path>
    </svg>
);

export const SQLServerIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <defs>
            <linearGradient
                id="a"
                x1="-2901.9519"
                x2="-2061.249"
                y1="923.573"
                y2="1420.3311"
                gradientTransform="matrix(.01102 0 0 -.01102 56.808 125.521)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#909ca9"></stop>
                <stop offset="1" stopColor="#ededee"></stop>
            </linearGradient>
            <linearGradient
                id="b"
                x1="-2882.7"
                x2="-2206.249"
                y1="10288.81"
                y2="10288.81"
                gradientTransform="matrix(.01102 0 0 -.01102 56.808 125.521)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#939fab"></stop>
                <stop offset="1" stopColor="#dcdee1"></stop>
            </linearGradient>
            <radialGradient
                id="c"
                cx="-14217.448"
                cy="7277.7051"
                r="898.12"
                gradientTransform="matrix(-.01059 -.0016 -.00321 .02118 -64.462 -130.43)"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset="0" stopColor="#ee352c"></stop>
                <stop offset="1" stopColor="#a91d22"></stop>
            </radialGradient>
        </defs>
        <path
            fill="url(#a)"
            d="m79.363 59.755-25.634 8.37-22.3 9.842-6.24 1.648a135.666 135.666 0 0 1-5.057 4.592c-1.976 1.704-3.816 3.255-5.23 4.378-1.57 1.24-3.895 3.565-5.077 5.038-1.764 2.209-3.158 4.553-3.759 6.355-1.066 3.255-.542 6.549 1.511 9.591 2.636 3.875 7.886 7.828 14.008 10.52 3.12 1.377 8.37 3.14 12.324 4.127 6.567 1.667 19.278 3.47 26.272 3.74 1.414.059 3.313.059 3.39 0 .156-.097 1.241-2.17 2.501-4.746 4.3-8.778 7.4-17.012 9.087-24.046 1.007-4.262 1.801-9.939 2.324-16.662.136-1.88.194-8.177.078-10.308-.175-3.487-.485-6.316-.97-9.086-.077-.408-.096-.776-.057-.796.077-.057.31-.135 3.468-1.046l-.639-1.51zm-5.851 3.43c.233 0 .852 5.947 1.007 9.706.039.795.02 1.318-.02 1.318-.154 0-3.274-1.84-5.501-3.236-1.938-1.22-5.62-3.661-6.2-4.127-.195-.135-.176-.155 1.413-.697 2.693-.91 9.088-2.965 9.3-2.965zm-13.06 4.3c.175 0 .62.252 1.686.911 3.991 2.5 9.417 5.523 11.742 6.53.716.31.794.193-.853 1.318-3.526 2.402-7.924 4.766-13.31 7.149-.95.426-1.745.755-1.764.755-.039 0 .078-.484.233-1.065 1.297-4.825 2.034-9.707 2.073-13.621.02-1.938.02-1.938.194-1.996-.04.02-.02.02 0 .02zm-2.692 1.027c.116.117.038 4.457-.117 5.639a49.361 49.361 0 0 1-1.782 8.428c-.213.717-.407 1.318-.446 1.356-.078.097-2.732-2.5-3.604-3.507-1.511-1.744-2.693-3.487-3.565-5.192-.445-.872-1.143-2.577-1.085-2.635.31-.214 10.521-4.166 10.599-4.089zm-12.672 4.98c.019 0 .038 0 .058.019.039.039.175.35.291.698.62 1.685 2.014 4.165 3.216 5.754 1.318 1.744 3.042 3.605 4.476 4.825.465.387.891.755.949.813.116.117.155.097-3.004 1.299-3.66 1.395-7.652 2.79-12.225 4.262a609.837 609.837 0 0 0-3.274 1.066c-.175.058-.116-.04.387-.834 2.267-3.544 5.715-10.5 7.653-15.422.33-.853.66-1.705.718-1.899.077-.271.174-.368.425-.504.136-.038.272-.077.33-.077zM41.213 75.1c.058.039-.93 2.112-1.899 4.01-1.88 3.663-3.933 7.267-6.684 11.646-.466.755-.91 1.453-.97 1.53-.096.136-.134.097-.445-.503-.659-1.299-1.201-2.965-1.492-4.496-.29-1.511-.232-4.146.098-5.774.25-1.2.232-1.181.813-1.472 2.48-1.26 10.502-5.018 10.58-4.941zm33.422 1.357v.813c0 4.321-.465 10.25-1.143 14.57-.116.756-.213 1.376-.232 1.396 0 0-.562-.155-1.22-.349a49.985 49.985 0 0 1-8.914-3.817c-1.88-1.027-4.61-2.713-4.533-2.79.019-.02.833-.446 1.782-.95 3.798-1.976 7.44-4.107 10.599-6.22 1.182-.794 2.964-2.072 3.351-2.421zm-48.05 5.734c.077 0 .057.155-.059.853a27.507 27.507 0 0 0-.213 2.072c-.155 2.83.31 4.923 1.705 7.79.388.794.698 1.453.678 1.472-.135.117-12.962 3.876-16.992 4.98-1.201.33-2.247.62-2.325.639-.136.04-.155.02-.097-.31.446-2.848 2.616-6.568 5.639-9.707 2.014-2.093 3.623-3.313 6.374-4.882 1.976-1.124 5.018-2.81 5.25-2.887 0-.02.02-.02.04-.02zm30.225 5.406c.02-.02.484.233 1.046.562 4.147 2.403 9.92 4.631 14.841 5.774l.446.097-.62.349c-2.576 1.434-11.044 4.96-19.704 8.195-1.26.465-2.5.93-2.732 1.027-.233.097-.446.155-.446.135 0-.02.349-.697.794-1.53 2.422-4.534 4.863-10.056 6.104-13.892.155-.368.251-.697.27-.717zm-3.08 1.007c.019.02-.136.427-.33.892-1.686 4.088-3.895 8.545-6.724 13.543-.716 1.28-1.317 2.306-1.336 2.306-.02 0-.601-.349-1.299-.775-4.107-2.519-7.75-5.619-10.132-8.622l-.35-.426 1.764-.485c6.316-1.724 11.683-3.584 17.011-5.87.756-.31 1.376-.563 1.395-.563zm19.142 6.685s.02.02 0 0c.02.446-.969 4.437-1.783 7.324-.678 2.422-1.259 4.32-2.325 7.672-.464 1.474-.87 2.693-.89 2.693-.02 0-.136-.018-.253-.057-5.754-1.047-10.908-2.5-15.752-4.437-1.356-.543-3.293-1.415-3.41-1.512-.038-.039 1.124-.581 2.597-1.22 8.816-3.856 17.96-8.235 21.1-10.114.368-.233.658-.349.716-.349zM28.677 96.8c.039.04-2.422 3.585-5.87 8.41-1.202 1.685-2.597 3.661-3.12 4.397a77.468 77.468 0 0 0-1.763 2.597l-.814 1.26-.872-.737c-1.027-.853-2.809-2.674-3.604-3.681-1.666-2.073-2.79-4.263-3.235-6.258-.214-.93-.214-1.396-.02-1.453a1459.3 1459.3 0 0 1 10.308-2.423 861.65 861.65 0 0 0 6.936-1.627c1.124-.271 2.035-.485 2.054-.485zm2.48.95.62.697c2.79 3.12 5.638 5.426 9.087 7.44.62.35 1.085.66 1.046.68-.135.096-11.974 4.3-17.457 6.199a462.501 462.501 0 0 1-5.638 1.957c-.019 0-.194-.117-.387-.252l-.349-.252.562-.814c1.82-2.635 4.107-5.522 9.086-11.528zm15.462 11.063c.019-.02.871.29 1.918.679 2.519.949 4.514 1.55 7.188 2.228 3.294.833 8.06 1.647 10.87 1.88.426.038.658.077.581.135-.136.077-2.984 1.027-5.076 1.685-3.333 1.047-13.505 4.05-21.798 6.433a218.735 218.735 0 0 1-2.925.834c-.194.038-.834-.137-.834-.214 0-.038.465-.639 1.027-1.298 2.79-3.333 5.561-7.053 7.867-10.579.64-.969 1.182-1.764 1.182-1.783zm-3.41.097c.019.02-1.357 2.228-3.76 6.026-1.026 1.608-2.17 3.43-2.576 4.069-.388.62-.97 1.589-1.298 2.131l-.562.988-.291-.077c-.698-.194-5.6-1.919-6.898-2.442a48.226 48.226 0 0 1-4.514-2.072c-1.55-.834-3.487-2.074-3.332-2.113.038-.02 2.693-.736 5.89-1.608 8.485-2.306 13.194-3.642 16.275-4.611.562-.175 1.046-.31 1.065-.29zm24.122 5.657h.02c.077.195-3.062 8.913-4.206 11.664-.251.62-.348.776-.484.756-.329-.02-4.882-.658-7.653-1.065-4.824-.736-12.924-2.151-14.957-2.616l-.466-.097 2.887-.659c6.2-1.395 9.184-2.15 12.207-3.08a86.251 86.251 0 0 0 11.412-4.399c.6-.27 1.104-.484 1.24-.503z"
        ></path>
        <path
            fill="url(#b)"
            d="M52.935.001c-.426-.058-7.305 2.422-11.741 4.224-5.988 2.441-10.637 4.766-13.505 6.781-1.066.756-2.403 2.093-2.616 2.616a1.812 1.812 0 0 0-.116.659l2.597 2.46 6.18 1.977 14.706 2.635 16.817 2.887.175-1.453c-.058 0-.097-.02-.155-.02l-2.209-.348-.445-.795c-2.287-4.03-4.805-9.029-6.278-12.4-1.142-2.616-2.228-5.638-2.828-7.808C53.187.098 53.149.02 52.935 0Zm-.31.988h.02c.019.02.096.563.174 1.202.33 2.712.93 5.328 1.88 8.157.716 2.13.716 2.015-.117 1.763-1.976-.542-10.83-2.073-17.244-2.965-1.027-.135-1.899-.27-1.899-.29-.077-.078 4.63-2.538 6.704-3.507 2.654-1.22 9.94-4.263 10.482-4.36ZM33.947 9.67l.756.252c4.108 1.395 14.434 3.372 20.131 3.837.639.058 1.182.116 1.2.116.02.02-.522.31-1.22.639-2.751 1.376-5.774 3.062-7.866 4.36-.62.387-1.182.698-1.26.698-.077 0-.484-.078-.91-.137l-.775-.116-1.938-1.899a803.532 803.532 0 0 0-7.11-6.84zm-.775.601 2.732 3.41c1.492 1.88 3.004 3.72 3.333 4.127.33.407.6.736.58.756-.077.058-3.952-.698-6.005-1.162-2.112-.485-2.984-.718-4.282-1.125l-1.066-.349v-.27c.02-1.3 1.667-3.237 4.456-5.212zm23.212 4.65c.077 0 .174.174.406.697.66 1.453 2.713 5.367 3.217 6.123.155.252.426.272-2.306-.174-6.568-1.066-8.68-1.415-8.68-1.453 0-.02.194-.155.446-.291 2.035-1.124 4.088-2.557 5.91-4.088.445-.368.852-.717.93-.775.019-.039.057-.058.077-.039z"
        ></path>
        <path
            fill="url(#c)"
            d="M25.209 13.35s-.426.679-.02 1.687c.252.62.988 1.375 1.822 2.15 0 0 8.621 8.409 9.668 9.61 4.766 5.503 6.84 10.928 7.033 18.407.117 4.805-.794 9.029-3.061 13.931-4.03 8.796-12.536 18.504-25.653 29.276l1.918-.64c1.24-.93 2.926-1.917 6.879-4.087 9.125-5 19.394-9.591 31.988-14.32 18.135-6.82 47.954-14.802 64.926-17.398l1.764-.271-.272-.427c-1.55-2.403-2.616-3.894-3.895-5.483-3.72-4.611-8.233-8.35-13.756-11.45-7.595-4.244-17.418-7.557-29.857-10.017-2.345-.466-7.499-1.357-11.684-1.996a1193.72 1193.72 0 0 1-20.925-3.41c-2.267-.388-5.658-.969-7.905-1.454-1.163-.252-3.39-.775-5.134-1.375-1.395-.543-3.41-1.085-3.837-2.732Zm4.999 4.844c.019-.018.329.098.736.233a50.336 50.336 0 0 0 2.81.853 142.908 142.908 0 0 0 2.557.678c1.162.29 2.131.561 2.15.561.136.136 2.093 6.394 2.752 8.797.252.91.446 1.685.427 1.685-.02.02-.233-.31-.485-.755-2.267-3.991-5.851-8.04-9.998-11.296-.542-.387-.95-.736-.95-.756Zm9.532 2.636c.098 0 .524.058 1.047.174 3.293.736 9.203 1.86 12.98 2.5.64.097 1.144.213 1.144.251 0 .04-.232.175-.523.33-.64.329-3.216 1.86-4.069 2.44-2.15 1.435-4.088 2.985-5.483 4.38-.562.562-1.046 1.027-1.046 1.027s-.116-.33-.214-.736c-.697-2.694-2.15-6.685-3.468-9.495-.213-.445-.387-.852-.387-.89 0 .038 0 .019.02.019zm16.78 3.196c.116.04.31.698.697 2.151a31.732 31.732 0 0 1 .93 8.874c-.039.814-.078 1.57-.117 1.667l-.058.193-1.007-.33c-2.073-.658-5.444-1.646-8.331-2.46-1.647-.446-2.984-.852-2.984-.89 0-.117 2.403-2.52 3.43-3.43 1.956-1.725 7.265-5.832 7.44-5.775zm1.336.194c.058-.058 8.022 1.317 11.645 2.015 2.694.523 6.607 1.337 6.84 1.434.115.039-.291.27-1.59.853-5.115 2.305-8.912 4.378-12.69 6.897-.988.659-1.822 1.202-1.84 1.202-.02 0-.04-.562-.04-1.24 0-3.681-.735-7.402-2.092-10.54-.136-.31-.252-.601-.233-.62zm20.596 4.07c.058.057-.193 1.627-.426 2.557-.698 2.887-2.577 7.169-4.882 11.199-.408.717-.776 1.298-.815 1.317-.038.02-.56-.271-1.162-.62-2.247-1.318-4.805-2.557-7.595-3.72-.775-.33-1.453-.6-1.472-.64-.136-.115 6.103-4.242 9.396-6.219 2.617-1.589 6.88-3.952 6.956-3.875zm1.473.232c.174 0 3.7.968 5.541 1.511 4.553 1.356 9.785 3.274 13.195 4.824l1.414.64-.988.232c-8.33 1.918-15.461 4.128-22.34 6.917-.562.233-1.066.427-1.104.427-.039 0 .155-.446.407-.988 2.073-4.399 3.41-8.99 3.74-12.905.019-.368.077-.658.135-.658zm-35.108 8.06c.058-.058 2.75.581 4.204.988 2.21.62 6.898 2.19 6.898 2.305 0 .02-.523.466-1.143 1.008-2.538 2.112-4.98 4.34-7.906 7.169-.871.833-1.607 1.511-1.646 1.511-.04 0-.058-.116-.04-.271.446-3.255.35-7.44-.27-11.683-.059-.543-.117-1.008-.098-1.027zm56.595.058c.038.039-1.24 2.053-2.054 3.196-1.162 1.667-2.868 3.876-6.723 8.72a1289.453 1289.453 0 0 0-5.076 6.413c-.775.969-1.414 1.782-1.435 1.782-.018 0-.27-.348-.542-.774-2.17-3.256-4.766-6.104-7.847-8.661a44.534 44.534 0 0 0-1.433-1.163c-.214-.155-.388-.31-.388-.33 0-.057 3.293-1.472 5.793-2.479 4.38-1.783 10.346-3.914 14.823-5.29 2.344-.736 4.843-1.453 4.882-1.414zm1.492.387c.077-.019.543.214 1.104.543 4.709 2.693 9.32 6.162 12.962 9.726 1.027 1.008 3.566 3.643 3.527 3.662 0 0-.892.078-1.938.155-8.157.62-18.6 2.344-28.636 4.766-.679.155-1.28.29-1.318.29-.038 0 .717-.755 1.667-1.665 5.89-5.677 8.583-9.261 11.76-15.656.446-.948.833-1.762.872-1.82-.02 0-.02 0 0 0zm-43.149 4.418c.271.058 2.79 1.24 4.689 2.19 1.744.871 4.36 2.266 4.495 2.383.02.019-.91.503-2.054 1.066a135.032 135.032 0 0 0-10.017 5.521c-.93.562-1.705 1.027-1.724 1.027-.078 0-.058-.078.465-1.027 1.744-3.177 3.139-6.975 3.933-10.676.077-.29.155-.484.213-.484zm-2.519.465c.058.058-.6 2.441-1.007 3.74-.795 2.46-2.132 5.54-3.43 7.866-.31.542-.775 1.337-1.027 1.782l-.484.775-1.085-1.046c-1.26-1.22-2.286-1.976-3.603-2.655-.524-.27-.931-.503-.931-.542 0-.155 3.314-3.158 5.852-5.328 1.82-1.57 5.657-4.65 5.715-4.592zm15.404 6.336.95.62c2.17 1.415 4.727 3.294 6.684 4.94 1.104.91 3.235 2.83 3.662 3.294l.232.252-1.57.446c-8.873 2.46-15.732 4.65-23.734 7.595-.892.33-1.647.6-1.705.6-.116 0-.213.097 1.783-1.744 5.115-4.707 9.648-9.9 13.02-14.957zm-4.05 1.007c.04.039-2.615 3.778-4.204 5.89-1.899 2.519-5.27 6.743-7.596 9.494-.968 1.144-1.8 2.093-1.84 2.112-.058.02-.078-.27-.078-.717 0-2.344-.6-4.844-1.646-6.975-.446-.891-.524-1.104-.426-1.201.368-.33 6.006-3.546 9.57-5.464 2.404-1.279 6.162-3.177 6.22-3.139zM44.1 55.26c.058 0 .503.232 1.008.503a21.28 21.28 0 0 1 3.332 2.248c.039.038-.465.446-1.124.93-1.84 1.317-4.63 3.43-6.258 4.728-1.705 1.356-1.763 1.394-1.57 1.104 1.28-1.957 1.919-3.061 2.597-4.476a36.066 36.066 0 0 0 1.627-4.05c.155-.56.349-.987.388-.987zm6.53 5.114c.096-.018.213.156.735.931 1.104 1.647 1.957 3.856 2.17 5.638l.04.387-2.655 1.028c-4.747 1.84-9.126 3.661-12.09 5.018a217.066 217.066 0 0 0-3.236 1.55c-.95.484-1.724.852-1.724.833 0-.02.6-.465 1.336-1.008C41 70.547 46.018 65.935 49.777 61.324c.407-.484.775-.93.813-.949zm-3.004.737c.078.077-2.131 2.577-3.642 4.108-3.74 3.816-7.44 6.8-12.032 9.706-.582.368-1.105.698-1.163.736-.135.078.038-.116 2.054-2.305a52.694 52.694 0 0 0 3.352-3.972c.736-.95.871-1.085 1.937-1.84 2.849-2.055 9.417-6.511 9.494-6.434z"
        ></path>
    </svg>
);

export const MySQLIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <path
            fill="#00618A"
            d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"
        ></path>
    </svg>
);
export const LinuxIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <path fill="#E95420" d="M104.663 0H24v128h80.663V0Z"></path>
        <path
            fill="#fff"
            d="M42.443 90.31c4.611 0 8.35-3.768 8.35-8.416 0-4.648-3.739-8.416-8.35-8.416-4.612 0-8.35 3.768-8.35 8.416 0 4.648 3.738 8.416 8.35 8.416Zm34.778-18.454c4.612 0 8.35-3.768 8.35-8.416 0-4.648-3.738-8.416-8.35-8.416-4.611 0-8.35 3.768-8.35 8.416 0 4.648 3.739 8.416 8.35 8.416Zm-15.945 31.702c-6.016-1.299-11.042-5.17-13.868-10.662a11.934 11.934 0 0 1-7.14.883c3.419 8.464 10.67 14.611 19.573 16.535 1.953.422 3.943.627 5.93.614a12.107 12.107 0 0 1-2.444-7.037 20.048 20.048 0 0 1-2.048-.336l-.003.003Zm14.066 8.461c4.612 0 8.35-3.768 8.35-8.416 0-4.648-3.738-8.416-8.35-8.416-4.611 0-8.35 3.768-8.35 8.416 0 4.648 3.739 8.416 8.35 8.416Zm11.62-11.507c2.597-3.3 4.426-7.2 5.305-11.344a27.771 27.771 0 0 0-3.937-20.963 12.1 12.1 0 0 1-4.695 5.542 20.736 20.736 0 0 1 1.93 13.975 20.658 20.658 0 0 1-2.597 6.521 12.092 12.092 0 0 1 3.997 6.272l-.003-.003ZM41.8 69.824a11.785 11.785 0 0 1 3.156.256c1.361.294 2.64.813 3.812 1.549 3.76-5.45 9.826-8.72 16.399-8.842a12.213 12.213 0 0 1 2.534-6.826c-10.503-.838-20.708 4.625-25.905 13.866l.003-.003Z"
        ></path>
    </svg>
);
export const DockerIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#3A4D54"
            d="M73.8 50.8h11.3v11.5h5.7c2.6 0 5.3-.5 7.8-1.3 1.2-.4 2.6-1 3.8-1.7-1.6-2.1-2.4-4.7-2.6-7.3-.3-3.5.4-8.1 2.8-10.8l1.2-1.4 1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4 4.3-1.3 9.3-1 13.1 1.2l1.5.9-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8-9.8 24.3-31 35.8-56.8 35.8-13.3 0-25.5-5-32.5-16.8l-.1-.2-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V50.8h11.3V39.6h22.5V28.3h13.5v22.5z"
        ></path>
        <path
            fill="#00AADA"
            d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"
        ></path>
        <path
            fill="#28B8EB"
            d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1 15.8-6.1 30.6-17.7 40.9-30.9-.2.1-.4.1-.5.2z"
        ></path>
        <path
            fill="#028BB8"
            d="M18.7 71.8c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1-1.6 0-3.2 0-4.9-.1 6 6.8 15.5 10.8 27.3 10.8 21.4 0 40-8.1 50.8-26H18.7v-.1z"
        ></path>
        <path
            fill="#019BC6"
            d="M23.5 71.8c1.3 5.8 4.3 10.4 8.8 13.5 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5.2 1.2-8.6 1.4 8.5 4.4 20.8 4.3 34.9-1.1 8.5-3.3 16.8-8.2 24.2-14.1H23.5z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#00ACD3"
            d="M28.4 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3-12h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#23C2EE"
            d="M39.6 52.7h9.8v9.8h-9.8v-9.8zm.9.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#00ACD3"
            d="M50.9 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#23C2EE"
            d="M50.9 41.5h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm3.1 10.4H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#00ACD3"
            d="M62.2 41.5H72v9.8h-9.8v-9.8zm.8.8h.8v8.1H63v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#23C2EE"
            d="M62.2 30.2H72V40h-9.8v-9.8zm.8.8h.8v8.1H63V31zm1.5 0h.8v8.1h-.8V31zm1.4 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31zm1.5 0h.8v8.1h-.8V31z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#00ACD3"
            d="M73.5 52.7h9.8v9.8h-9.8v-9.8zm.8.8h.8v8.1h-.8v-8.1zm1.4 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1zm1.5 0h.8v8.1h-.8v-8.1z"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#D4EEF1"
            d="M48.8 78.3c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7"
        ></path>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            fill="#3A4D54"
            d="M48.8 79.1c.2 0 .5 0 .7.1-.2.1-.4.4-.4.7 0 .4.4.8.8.8.3 0 .6-.2.7-.4.1.2.1.5.1.7 0 1.1-.9 1.9-1.9 1.9-1.1 0-1.9-.9-1.9-1.9 0-1 .8-1.9 1.9-1.9M1.1 72.8h125.4c-2.7-.7-8.6-1.6-7.7-5.2-5 5.7-16.9 4-20 1.2-3.4 4.9-23 3-24.3-.8-4.2 5-17.3 5-21.5 0-1.4 3.8-21 5.7-24.3.8-3 2.8-15 4.5-20-1.2 1.1 3.5-4.9 4.5-7.6 5.2"
        ></path>
        <path
            fill="#BFDBE0"
            d="M56 97.8c-6.7-3.2-10.3-7.5-12.4-12.2-2.5.7-5.5 1.2-8.9 1.4-1.3.1-2.7.1-4.1.1-1.7 0-3.4 0-5.2-.1 6 6 13.6 10.7 27.5 10.8H56z"
        ></path>
        <path
            fill="#D4EEF1"
            d="M46.1 89.9c-.9-1.3-1.8-2.8-2.5-4.3-2.5.7-5.5 1.2-8.9 1.4 2.3 1.2 5.7 2.4 11.4 2.9z"
        ></path>
    </svg>
);
export const FigmaIcon = ({ w = '1em', h = '1em' }) => (
    <svg viewBox="0 0 128 128" height={h} width={w}>
        <path
            fill="#0acf83"
            d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"
        ></path>
        <path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"></path>
        <path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"></path>
        <path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"></path>
        <path
            fill="#1abcfe"
            d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"
        ></path>
    </svg>
);

GitHubIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

InstagramIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

HTMLIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

JSIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

ReactIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};
NextJSIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};
NodeIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

CSharpIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

BlazorIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

JavaIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

SQLServerIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

MySQLIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

LinuxIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};


DockerIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};

FigmaIcon.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
};
