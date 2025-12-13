import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import theme from "@/lib/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CartProvider>{children}</CartProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
