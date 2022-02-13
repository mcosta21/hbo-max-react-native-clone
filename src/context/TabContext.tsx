import { createContext, ReactNode, useEffect, useState } from 'react';

interface Tab {
  previousTabIndex: number;
  currentTabIndex: number;
}

interface TabContextData {
  previousTabIndex: number;
  currentTabIndex: number;
  setCurrentTab: (currentTab: number, previousTab: number) => void;
}

interface TabProviderProps {
  children: ReactNode;
}

export const TabContext = createContext<TabContextData>(
  {} as TabContextData,
);

export function TabProvider({ children }: TabProviderProps) {
  const [tab, setTab] = useState<Tab>({ currentTabIndex: 0, previousTabIndex: 0 });

  function setCurrentTab(currentTab: number, previousTab: number){
    setTab({ currentTabIndex: currentTab, previousTabIndex: previousTab });
  }

  return (
    <TabContext.Provider
      value={{ currentTabIndex: tab.currentTabIndex, previousTabIndex: tab.previousTabIndex, setCurrentTab }}
    >
      {children}
    </TabContext.Provider>
  );
}
