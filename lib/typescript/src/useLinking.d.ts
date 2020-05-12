import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/core';
import { LinkingOptions } from './types';
export default function useLinking(ref: React.RefObject<NavigationContainerRef>, { enabled, config, getStateFromPath, getPathFromState, }: LinkingOptions): {
    getInitialState: () => PromiseLike<any>;
};
