import type { PropsWithChildren } from "react";

const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full border-x border-slate-400 md:max-w-2xl overflow-y-scroll">
        {props.children}
      </div>
    </main>
  );
};

export default PageLayout;
