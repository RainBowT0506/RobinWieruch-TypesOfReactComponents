實作文章 [Robin Wieruch - Types of React Components](https://www.robinwieruch.de/react-component-types/)

Github：
* [RobinWieruch-TypesOfReactComponents](https://github.com/RainBowT0506/RobinWieruch-TypesOfReactComponents)

React自2013年推出以來，經歷了相對穩定的演進，但在此期間出現了不同的React組件類型。
本指南旨在向React初學者提供歷史概述，探討各種React組件和模式的演變，並解釋它們在現代React應用中的使用情況。
目標是幫助開發人員清晰理解React組件的類型，知道哪些在現代仍有應用，以及為何某些已被淘汰。
# React createClass Components
### `createClass` 元件介紹
React 的 `createClass` 方法是在引入 JavaScript ES6 之前，創建類別元件的基本方式。這個方法作為生成 React 類別元件的工廠，特別是在缺乏 ES6 類別語法的情況下。提供的範例演示了 `createClass` 元件的基本結構，展示了像是 `getInitialState` 用於設置初始狀態，以及 `render` 用於顯示 JSX 輸出的方法。額外的方法，例如處理事件的 `onChange`，可以輕鬆地添加進來。
### 周期方法與副作用
`createClass` 元件支援週期方法來處理副作用。在範例中，使用 `componentDidUpdate` 週期方法來將輸入欄位的值寫入瀏覽器的本地儲存，以實現即使在瀏覽器刷新後仍保留數據。透過在 `getInitialState` 方法中從本地儲存中讀取，確保在元件掛載時檢索先前的輸入。
### `createClass` 方法的過時狀態
重要的是要注意，`createClass` 方法在React核心套件中已不再提供。如果開發人員希望使用它，需要安裝額外的 npm 套件 `create-react-class`。建議在專案中可以使用 JavaScript ES6 或更新的語法時，避免使用 `createClass`。這突顯了React向現代JavaScript標準的演進。
## React Mixins
### React Mixin 的介紹
React Mixin 被引入作為 React 中的第一種高級模式，用於實現可重複使用的元件邏輯。透過 Mixin，開發者能夠將元件的邏輯提取為獨立的對象。當在使用 Mixin 的元件中引入時，該 Mixin 的所有功能都被注入到該元件中。
### Mixin 的使用範例
React Mixin 展示了一個使用 Mixin 的情況，其中 Mixin 提供了元件的初始狀態，並擴展了一個 `setLocalStorage()` 方法供元件使用。
在 React Mixin 中，Mixin 提供了元件的初始狀態，該狀態是從本地存儲中讀取的，同時還擴展了一個 `setLocalStorage()` 方法，供元件在需要時使用。
### Mixin 的缺點與過時
然而，由於 Mixins 具有一些缺點，現代的 React 應用程序中不再使用它們。有關 Mixins 以及為何 Mixins 已經過時的更多資訊，可以參考相關連結。
# React Class Components
React Class Components 是在 JavaScript ES6 引入後推出的一種元件撰寫方式，有時也被稱為 React ES6 class components。透過 JavaScript 類別構造函數，它用於在 React 中設置初始狀態或綁定方法，同時必須包含 `render` 方法以返回 JSX 輸出。
### 使用箭頭函數的替代語法
另一種 JavaScript ES6 的語法是使用箭頭函數，可以簡化方法的定義，提供更簡潔的程式碼。
### React Class Components 的使用與現代應用
React Class Components 提供了生命週期方法，用於元件的裝載、更新和卸載。儘管在現代 React 應用中 React Function Components 更加活躍，但 React Class Components 仍然被廣泛使用，因為它們在功能上不再落後於 React Function Components。
## React Higher-Order Components
React Higher-Order Components（HOCs）是一種進階的 React 模式，用於在 React 元件之間實現可重複使用的邏輯。它作為 React Mixins 的替代方案，能夠將特定功能提取為可應用於不同元件的 Higher-Order Component。
### Higher-Order Component 的概念
Higher-Order Component 是一個函數，接受一個元件作為輸入，然後返回一個新的元件，該元件具有擴展功能。在示例中，我們看到了一個名為 `withLocalStorage` 的 HOC，它提供了處理本地存儲邏輯的功能，使得這一邏輯能夠在不同的 React 元件中重複使用。
這種模式使我們能夠更好地組織和管理元件之間的共享邏輯，提高代碼的可重用性和可維護性。
### HOCs 與現代 React 模式
雖然現代 React 應用中更多地使用 React 函數組件和 Hooks，但是 HOCs 仍然是一個有價值的模式，用於在元件之間共享邏輯。React Higher-Order Components 和 Render Prop Components（另一種高級模式）都在實際應用中得到了廣泛使用，這兩者都是有效管理元件邏輯的方法。
# React Function Components
### React Function Components 簡介
React Function Components 是 React Class Components 的等效物，但以函數的形式表達，而非使用類別。在過去，Function Components（函數型組件）無法使用狀態或副作用，因此被稱為 Functional Stateless Components（功能型無狀態組件）。然而，隨著 React Hooks 的引入，它們被重新定義為 Function Components。
React Hooks 將狀態和副作用引入到 React Function Components 中。React 內建了各種內置的 hooks，同時也提供了創建自定義 hooks 的能力。這個模式讓我們能夠更好地組織和管理元件之間的共享邏輯，提高代碼的可重用性和可維護性。
### 使用 React Function Component 的示例
以下是一個以 React Function Component 為基礎的示例，使用了內置的 React useState Hook 來管理元件的狀態。這個例子展示了如何使用 `useState` Hook 來跟蹤輸入字段值的狀態。
### 使用副作用的 React Function Component
React Hooks 也引入了用於處理副作用的功能。通常，使用內置的 React `useEffect` Hook，當元件的 props 或狀態發生變化時，該 hook 會執行指定的函數。這個例子展示了如何使用 `useEffect` Hook 來在元件狀態變化時更新本地存儲。
### 自定義 Hook 的使用
最後，我們可以將上述的兩個 Hook 提取為一個自定義 Hook，以確保元件狀態與本地存儲同步。這個自定義 Hook 將狀態和副作用邏輯封裝在一個可重複使用的函數中。自定義 Hook 的提取使其可以在其他元件中重複使用，是 React 中等效於 Mixins、Higher-Order Components 和 Render Prop Components 的高級模式之一。
### 結論
React Function Components 與 Hooks 和 React Class Components 一同被廣泛用於編寫現代 React 應用。然而，我堅信 React Function Components 與 Hooks 將來會取代 React Class Components。React Class Components 或許將只在舊的 React 應用程式或教學中再次出現，就像 React createClass Components 和 React Mixins 一樣。這也適用於 Higher-Order Components 和 Render Prop Components，它們可能會被 React Hooks 替代以實現可重複使用的邏輯。在這個指南中，我們介紹了不同類型的 React Components，以及它們的使用方式，並將它們放在了歷史背景中。

# 術語
- `createClass`: 在ES6之前用於建立React類別元件的方法，目前已在React核心套件中過時，需透過安裝額外的`create-react-class`套件才能使用。
- ES6: JavaScript ECMAScript 2015，引入了更結構化和面向對象編程的類別語法。
- 週期方法: React元件的特殊方法，在元件生命週期的不同階段觸發，例如 `componentDidUpdate`。
- getInitialState: 在 `createClass` 元件中用於設置React元件初始狀態的方法。
- render: `createClass` 元件中必需的方法，用於顯示JSX輸出。
- onChange: 在 `createClass` 元件中添加的處理事件的範例額外方法。
- 本地儲存: 在範例中使用的瀏覽器數據儲存機制，用於在瀏覽器刷新後持久化數據。
- 現代JavaScript標準: 指的是使用ES6及更高版本的JavaScript語法，標誌著React開發中遠離舊有方法如`createClass`的趨勢。
- React Mixin: React 中用於實現可重複使用元件邏輯的高級模式。透過 Mixin，可以將元件的邏輯提取為獨立的對象，使元件能夠引入 Mixin 中的功能。
- `getInitialState`: React 元件生命週期方法之一，用於設置元件的初始狀態。
- `componentDidUpdate`: React 元件生命週期方法之一，在元件更新後觸發。
- Mixin 過時: Mixins 在現代 React 應用中不再使用，因為它們帶有一些缺點，可以閱讀相關連結以瞭解更多信息。
- `localStorage`: 瀏覽器中用於存儲數據的機制，被 Mixin 用來實現在本地存儲中保存元件狀態的功能。
- 可重複使用的元件邏輯: Mixin 提供了一種方式，可以將元件中的通用邏輯提取出來，實現在不同元件中的重複使用。
- 現代 React 應用程序: 使用現代 JavaScript 語法和模式的 React 應用，避免使用過時的技術如 Mixins。
## React patterns
React 中有一些進階的設計模式，可以讓你更有效地組織和管理你的應用程式。以下是一些常見的進階 React 模式：

1. **高階元件 (Higher-Order Components - HOCs):**
   高階元件是一種函式，接受一個元件並返回一個新的元件。這可用於共享邏輯、處理邏輯和狀態管理。例如，`withRouter` 是一個 HOC，它將路由相關的屬性（例如 `match` 和 `history`）注入到元件中。

   ```jsx
   import { withRouter } from 'react-router-dom';

   const MyComponent = ({ match, history }) => {
     // 使用 match 和 history
   };

   export default withRouter(MyComponent);
   ```

2. **Render Props 模式:**
   Render Props 模式是通過元件的 prop 傳遞一個函式，這個函式返回一個 React 元素，使得可以在元件內部渲染這個元素。這種模式用於共享邏輯，使得元件可以根據應用程式的狀態和邏輯進行自定義渲染。

   ```jsx
   class DataFetcher extends React.Component {
     state = {
       data: null,
     };

     componentDidMount() {
       // 獲取資料的邏輯
     }

     render() {
       return this.props.render(this.state.data);
     }
   }

   // 使用 Render Props 模式
   <DataFetcher render={(data) => <DisplayData data={data} />} />
   ```

3. **使用 Context API:**
   React 的 Context API 允許在元件樹中傳遞全域數據，而不必通過 props 逐層傳遞。這在需要在應用程式的多個部分之間共享狀態時非常有用。

   ```jsx
   // 創建一個 Context
   const MyContext = React.createContext();

   // 提供器元件
   const MyProvider = ({ children }) => {
     const sharedState = //...;
     return <MyContext.Provider value={sharedState}>{children}</MyContext.Provider>;
   };

   // 使用 Context 的元件
   const MyComponent = () => {
     const sharedState = React.useContext(MyContext);
     // 使用 sharedState
   };
   ```

4. **React Hooks:**
   Hooks 是 React 16.8 版本引入的新特性，它們允許在無需編寫 class 的情況下使用狀態和其他 React 功能。最常見的 hooks 包括 `useState`、`useEffect` 和 `useContext`。

   ```jsx
   import React, { useState, useEffect } from 'react';

   const MyComponent = () => {
     const [count, setCount] = useState(0);

     useEffect(() => {
       // 執行副作用的邏輯
       document.title = `Count: ${count}`;
     }, [count]);

     return (
       <div>
         <p>{count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   };
   ```

這些模式有助於更好地組織和管理 React 應用程式中的邏輯和狀態。根據特定情況和需求，可以選擇適當的模式來提高代碼的可讀性和可維護性。
