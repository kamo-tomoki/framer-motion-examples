import { ComponentType, lazy } from "react";

const lazyImport = (factory: () => Promise<{ default: ComponentType<any> }>) =>
  lazy(async () => {
    try {
      const component = await factory();
      window.sessionStorage.removeItem("lazyImport-force-reload");
      return component;
    } catch (e) {
      if (!window.sessionStorage.getItem("lazyImport-force-reload")) {
        window.sessionStorage.setItem("lazyImport-force-reload", "true");
        window.location.reload();
        return { default: () => <></> };
      }

      return {
        default: () => (
          <>
            <h1>Error occurred</h1>
            <button onClick={() => window.location.reload()}>Reload</button>
          </>
        ),
      };
    }
  });

export default lazyImport;
