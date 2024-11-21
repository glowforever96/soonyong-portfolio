import { create } from 'zustand';

interface ToastStore {
  message: string;
  showToast: (newMessage: string) => void;
  removeToast: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  message: '',
  showToast: (newMessage: string) => set({ message: newMessage }),
  removeToast: () => set({ message: '' }),
}));
