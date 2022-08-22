import { useColorMode } from "@chakra-ui/react";

interface IconProps {
    iconName: 'REGISTER_STATUS' | 'WATER_LEVEL'
}

export function Icon({iconName}: IconProps) { 
    const { colorMode } = useColorMode()

    function showIcon(name: string) {
        switch (name) {
            case 'REGISTER_STATUS':
                return(
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 11V5.5H5.5V38.5H7.33333V20.1667H10.0833V22H22.9167V18.9447H25.6667C26.1529 18.9447 26.6192 19.1379 26.963 19.4817C27.3068 19.8255 27.5 20.2919 27.5 20.7781V21.0833H25.6667V28.4167H38.5V21.0833H36.6667V20.1667C36.6667 15.1039 32.5627 11 27.5 11H22.9167V9.16667H17.4167V7.33333H23.8333C24.0764 7.33333 24.3096 7.23676 24.4815 7.06485C24.6534 6.89294 24.75 6.65978 24.75 6.41667C24.75 6.17355 24.6534 5.94039 24.4815 5.76849C24.3096 5.59658 24.0764 5.5 23.8333 5.5H9.16667C8.92355 5.5 8.69039 5.59658 8.51849 5.76849C8.34658 5.94039 8.25 6.17355 8.25 6.41667C8.25 6.65978 8.34658 6.89294 8.51849 7.06485C8.69039 7.23676 8.92355 7.33333 9.16667 7.33333H15.5833V9.16667H10.0833V11H7.33333ZM34.8333 20.1667C34.8333 18.2217 34.0607 16.3565 32.6854 14.9812C31.3102 13.606 29.4449 12.8333 27.5 12.8333H22.9167V17.1114H25.6667C26.6391 17.1114 27.5718 17.4977 28.2594 18.1854C28.947 18.873 29.3333 19.8056 29.3333 20.7781V21.0833H34.8333V20.1667ZM36.6667 22.9167H27.5V26.5833H36.6667V22.9167ZM21.0833 11H11.9167V20.1667H21.0833V11ZM10.0833 18.3333H7.33333V12.8333H10.0833V18.3333Z" fill={`${colorMode === 'dark' ? 'hsla(128, 10%, 90%, 1)' : 'hsla(130, 10%, 30%, 1)'}`}/>
                        <rect x="27.5" y="22.825" width="9.2125" height="3.85" fill="url(#paint0_linear_15865_411)"/>
                        <rect x="11.825" y="11" width="9.35" height="9.2125" fill="url(#paint1_linear_15865_411)"/>
                        <defs>
                            <linearGradient id="paint0_linear_15865_411" x1="27.5" y1="22.6875" x2="38.5" y2="28.1875" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#33B874"/>
                                <stop offset="1" stop-color="#2F88FF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_15865_411" x1="11.6874" y1="11" x2="24.0624" y2="22.6875" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#33B874"/>
                                <stop offset="1" stop-color="#2F88FF"/>
                            </linearGradient>
                        </defs>
                    </svg>
                );

            case 'WATER_LEVEL':
                return(
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 38.5C28.2488 38.5 34.125 32.6238 34.125 25.375C34.125 13.125 21 3.5 21 3.5C21 3.5 7.875 13.125 7.875 25.375C7.875 32.6238 13.7512 38.5 21 38.5Z" stroke={`${colorMode === 'dark' ? 'hsla(128, 10%, 90%, 1)' : 'hsla(130, 10%, 30%, 1)'}`} stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.875 25.375C7.875 32.6238 13.7512 38.5 21 38.5C28.2488 38.5 34.125 32.6238 34.125 25.375C34.125 25.375 26.25 28 21 25.375C15.75 22.75 7.875 25.375 7.875 25.375Z" fill="url(#paint0_linear_15865_422)" stroke={`${colorMode === 'dark' ? 'hsla(128, 10%, 90%, 1)' : 'hsla(130, 10%, 30%, 1)'}`} stroke-width="1.66667" stroke-linejoin="round"/>
                        <defs>
                            <linearGradient id="paint0_linear_15865_422" x1="10.5" y1="26.25" x2="32.1562" y2="38.0625" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#33B874"/>
                                <stop offset="1" stop-color="#1FB2F5"/>
                            </linearGradient>
                        </defs>
                    </svg>
                )
        
            default:
                return(<></>);
        }
    }

    return(
        showIcon(iconName)
    )

}