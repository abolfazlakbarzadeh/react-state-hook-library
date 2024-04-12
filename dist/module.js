import {jsxDEV as $hgUW1$jsxDEV} from "react/jsx-dev-runtime";
import {createContext as $hgUW1$createContext, useReducer as $hgUW1$useReducer, useMemo as $hgUW1$useMemo, useContext as $hgUW1$useContext, useEffect as $hgUW1$useEffect} from "react";
import $hgUW1$lodash from "lodash";


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $f6df5ab02bec0b68$exports = {};

$parcel$export($f6df5ab02bec0b68$exports, "ReactStateHookProvider", () => $190a8be343b4b13e$export$43bf47c9b398fb64);
$parcel$export($f6df5ab02bec0b68$exports, "useSharedSimpleHook", () => $ecfc1e9502cb4f54$export$953116e2218f0e4a);


const $256fe88b69e53c62$var$updater = (state, key, value)=>{
    // check if content type of key is string or object
    if (typeof key !== "object") {
        // if passed payload is a state updater function, then invoke it and update state
        if (typeof key === "function") {
            const newState = key(state.current);
            state.current = newState;
            return state;
        }
        // if there is no specific value as value payload, then set key's value as new state
        if (!value) {
            // @ts-ignore
            state.current = key;
            return state;
        }
        // if type of the state is string then we just update the value
        if (typeof state.current !== "object") state = value;
        else state.current[key] = value;
    } else if (typeof key === "object") state.current = key;
    return state;
};
const $256fe88b69e53c62$var$reducer = (state, action)=>{
    const { key: key, value: value } = action.payload;
    action.key;
    return $256fe88b69e53c62$var$updater(state, key, value);
};
var $256fe88b69e53c62$export$2e2bcd8739ae039 = $256fe88b69e53c62$var$reducer;


const $228aa45f51f65fd4$export$232ca1d7c88c0dfc = {};
const $228aa45f51f65fd4$export$d728221901039fad = {
    update: "update"
};


var $2cd5cbe5f351d0b6$export$2e2bcd8739ae039 = (state, dispatch)=>{
    // this approach can help us to have helper functions to manage complex states
    return {
        update: (key, value)=>{
            dispatch({
                key: (0, $228aa45f51f65fd4$export$d728221901039fad).update,
                payload: {
                    key: key,
                    value: value
                }
            });
        }
    };
};




const $190a8be343b4b13e$export$55cddbf7a8528541 = /*#__PURE__*/ (0, $hgUW1$createContext)();
const $190a8be343b4b13e$export$43bf47c9b398fb64 = ({ children: children, initialState: initialState })=>{
    const [state, dispatch] = (0, $hgUW1$useReducer)((state, dispatch)=>(0, $256fe88b69e53c62$export$2e2bcd8739ae039)((0, $hgUW1$lodash).cloneDeep(state), dispatch), {
        current: {}
    }, ()=>({
            // Check if there is an initial state of the provider
            current: Object.keys((0, $228aa45f51f65fd4$export$232ca1d7c88c0dfc)).length || initialState ? Object.assign({}, (0, $228aa45f51f65fd4$export$232ca1d7c88c0dfc), initialState) : undefined
        }));
    const functions = (0, $hgUW1$useMemo)(()=>(0, $2cd5cbe5f351d0b6$export$2e2bcd8739ae039)(state, dispatch), [
        state
    ]);
    return /*#__PURE__*/ (0, $hgUW1$jsxDEV)($190a8be343b4b13e$export$55cddbf7a8528541.Provider, {
        value: {
            state: state.current,
            functions: functions
        },
        children: children
    }, void 0, false, {
        fileName: "src/provider/provider.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, undefined);
};






const $ecfc1e9502cb4f54$export$953116e2218f0e4a = (value)=>{
    const context = (0, $hgUW1$useContext)((0, $190a8be343b4b13e$export$55cddbf7a8528541));
    if (!context) throw Error("Please make sure you wrap your component that uses the shared mode hook with the shared mode hook provider.");
    (0, $hgUW1$useEffect)(()=>{
        if (typeof value != "undefined") context.functions.update(value);
    }, []);
    return [
        context.state,
        context.functions.update,
        context.functions
    ];
};






export {$190a8be343b4b13e$export$43bf47c9b398fb64 as ReactStateHookProvider, $ecfc1e9502cb4f54$export$953116e2218f0e4a as useSharedSimpleHook};
//# sourceMappingURL=module.js.map
