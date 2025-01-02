'use client';

import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export function Providers({ children }: { children: React.ReactNode }) {
 return (
   <SafeAreaProvider>
     <PaperProvider>
       {children}
     </PaperProvider>
   </SafeAreaProvider>
 );
}
