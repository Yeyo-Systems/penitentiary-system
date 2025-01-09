import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../index.ts';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
