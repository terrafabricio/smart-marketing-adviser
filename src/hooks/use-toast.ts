
import { toast } from "@/components/ui/toast";

export { toast };

// Export a hook that provides the toast function
export function useToast() {
  return {
    toast,
  };
}
