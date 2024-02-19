import { h } from "snabbdom";

const createTemplate = (state, props, updateState, onMount) => {
    const handleClick = () => {
        updateState({count: state.count + 1});
    };

    onMount(() => {
        console.log('component mounted');
    });

    return h('div', {on: { click: handleClick}}, [`count: ${state.count}`]);
}
export default createTemplate;