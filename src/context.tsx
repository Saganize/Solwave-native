import { createContext } from 'react';
import type { SolwaveInterface } from './types/Solwave';

const SolwaveContext = createContext<SolwaveInterface>({ apiKey: '' });

export default SolwaveContext;
