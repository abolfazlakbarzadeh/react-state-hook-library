var $8zHUo$reactjsxdevruntime = require("react/jsx-dev-runtime");
var $8zHUo$react = require("react");
var $8zHUo$lodash = require("lodash");


function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $c8de63f7539955a2$exports = {};

$parcel$export($c8de63f7539955a2$exports, "ReactHookProvider", () => $4867e356d9e401b7$export$38866cc0218ba23e);
$parcel$export($c8de63f7539955a2$exports, "useSharedSimpleHook", () => $bbcc0c0e6f09ab75$export$953116e2218f0e4a);


const $cc8bad687d39e902$var$updater = (state, key, value)=>{
    if (!state.current) {
        console.error("Current state is undefined!");
        return state;
    }
    // check if content type of key is string or object
    if (typeof key === "string") {
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
const $cc8bad687d39e902$var$reducer = (state, action)=>{
    const { key: key, value: value } = action.payload;
    action.key;
    return $cc8bad687d39e902$var$updater(state, key, value);
};
var $cc8bad687d39e902$export$2e2bcd8739ae039 = $cc8bad687d39e902$var$reducer;


const $c921148f76e1433b$export$232ca1d7c88c0dfc = {};
const $c921148f76e1433b$export$d728221901039fad = {
    update: "update"
};


var $8f471fbcc86583bb$export$2e2bcd8739ae039 = (state, dispatch)=>{
    return {
        update: (key, value)=>{
            dispatch({
                key: (0, $c921148f76e1433b$export$d728221901039fad).update,
                payload: {
                    key: key,
                    value: value
                }
            });
        }
    };
};




const $4867e356d9e401b7$export$1a1248661f5db76a = /*#__PURE__*/ (0, $8zHUo$react.createContext)();
const $4867e356d9e401b7$export$38866cc0218ba23e = ({ children: children, initialState: initialState })=>{
    const [state, dispatch] = (0, $8zHUo$react.useReducer)((state, dispatch)=>(0, $cc8bad687d39e902$export$2e2bcd8739ae039)((0, ($parcel$interopDefault($8zHUo$lodash))).cloneDeep(state), dispatch), {
        current: {}
    }, ()=>({
            current: Object.assign({}, (0, $c921148f76e1433b$export$232ca1d7c88c0dfc), initialState)
        }));
    const functions = (0, $8zHUo$react.useMemo)(()=>(0, $8f471fbcc86583bb$export$2e2bcd8739ae039)(state, dispatch), [
        state
    ]);
    return /*#__PURE__*/ (0, $8zHUo$reactjsxdevruntime.jsxDEV)($4867e356d9e401b7$export$1a1248661f5db76a.Provider, {
        value: {
            state: state.current,
            functions: functions
        },
        children: children
    }, void 0, false, {
        fileName: "src/provider/provider.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, undefined);
};






const $bbcc0c0e6f09ab75$export$953116e2218f0e4a = (value)=>{
    const context = (0, $8zHUo$react.useContext)((0, $4867e356d9e401b7$export$1a1248661f5db76a));
    if (!context) throw Error("Please make sure you wrap your component that uses the shared mode hook with the shared mode hook provider.");
    (0, $8zHUo$react.useEffect)(()=>{
        if (value) context.functions.update(value);
    }, []);
    return [
        context.state,
        context.functions.update
    ];
};




$parcel$exportWildcard(module.exports, $c8de63f7539955a2$exports);


//# sourceMappingURL=index.js.map