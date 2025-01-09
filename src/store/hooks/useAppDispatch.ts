import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../index.ts';

export const useAppDispatch = () => useDispatch<AppDispatch>();
