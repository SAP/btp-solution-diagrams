import ColorModeToggle from '@theme-original/ColorModeToggle';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents-react/dist/Assets';

export default function ColorModeToggleWrapper(props) {
    const onChange = (mode) => {
        setTheme(mode === 'dark' ? 'sap_horizon_dark' : 'sap_horizon');
        props.onChange(mode);
    };
    return <ColorModeToggle {...props} onChange={onChange} />;
}
