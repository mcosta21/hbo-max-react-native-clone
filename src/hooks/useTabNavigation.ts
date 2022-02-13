import { TabContext } from './../context/TabContext';
import { useContext } from 'react';

export const useTabNavigation = () => useContext(TabContext);
