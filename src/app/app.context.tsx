import React from 'react';
import { AppContextModel } from './models/app-context.model';

export const AppContext = React.createContext<AppContextModel | null>(null);
