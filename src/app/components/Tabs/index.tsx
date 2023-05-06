import { HtmlHTMLAttributes } from "react";

interface TabsProps<T> {
    children?: any; tabProps?: T
}

const Tabs = (tabs: TabsProps<HtmlHTMLAttributes<HTMLDivElement>>[]) => {

    return (
        <div className="w-full">
            {
                tabs.map((tab, i) => (
                    <div key={i} {...tab?.tabProps}>
                        <p>{tab.children}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Tabs