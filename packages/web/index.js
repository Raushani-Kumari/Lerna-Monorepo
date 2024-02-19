import {createTemplate} from "../core/template";
import {init} from "snabbdom";
import eventlisteners from "snabbdom/build/modules/eventlisteners";

const patch = init([eventlisteners]);

const state = {
    count: 0,
};

const updateState = (newState) =>{
    Object.assign(state,newState);
    render();
};
const onMountCallbacks = [];

const onMount = (callback) => {
    onMountCallbacks.push(callback);
};

const render = () => {
    const newVNode = createTemplate(state, {}, updateState, onMount);
    const oldVNode = document.getElementById('app');

    patch(oldVNode, newVNode);
    onMountCallbacks.forEach((callback) => callback());
};

document.addEventListener('DOMContentLoaded', () => {
    render();
});