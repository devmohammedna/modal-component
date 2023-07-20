import { ReactNode } from "react";
export interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  position?: "top" | "center" | "bottom";
}
