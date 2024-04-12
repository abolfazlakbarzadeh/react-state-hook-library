
# React State Hook

A super simple React State Managemnt library :)

## Install
You can install it in your project by linking it to your project. Or run it in the demo.

1) In your project directory run the following command (Assuming that you have cloned the library folder next to your project folder):
```
    pnpm link ../react-state-hook-library
```
Now you can import it in your files like this:
``` tsx
import { useSharedSimpleHook } from "react-state-hook-library";
```

## Usage
You have to wrap parent of you component by state provider like this:
```tsx
import { ReactStateHookProvider } from "react-state-hook-library";

// and...
<ReactStateHookProvider>
      <App />
</ReactStateHookProvider>
// or...
// You can use intialValue prop to handle complex objects
<ReactStateHookProvider initialState={{ someKey: "somevalue" }}> 
      <App />
</ReactStateHookProvider>
```
And in your components those wrapped by `ReactStateHookProvider`:

```
import { useSharedSimpleHook } from "react-hook-library";

const [count, setCount] = useSharedSimpleHook(0);
// or
const [count, setCount] = useSharedSimpleHook();
```
You can use it exactly same as react's `useState`.

## Development
If you want to run tests of library:
```
$ cd react-state-hook-library
$ pnpm test
```
If you want to run demo of library:
```
$ cd react-state-hook-library/web
$ pnpm install
$ pnpm dev
```
If you want to run it in watch mode:
```
$ cd react-state-hook-library
$ pnpm watch
```