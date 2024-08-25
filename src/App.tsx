import OptimizedComponent_useMemo from "./Components/OptimizedComponent_useMemo.tsx"
import ProblematicComponent from "./Components/ProblematicComponent.tsx"
import OptimizedComponent_useCallback from "./Components/OptimizedComponent_useCallback.tsx"

const App = () => {
  return (
    <div>
      <div>
        <OptimizedComponent_useMemo />
        {/* <ProblematicComponent /> */}
        {/* <OptimizedComponent_useCallback /> */}
      </div>
    </div>
  )
}

export default App