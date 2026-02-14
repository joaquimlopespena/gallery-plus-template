
import { BrowserRouter, Routes, Route } from "react-router";
import PageComponents from "./pages/page-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PagePhotoDetails from "./pages/page-photo-details";
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { Toaster } from "sonner";

const queryClient = new QueryClient();


export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <Toaster position="bottom-center" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LayoutMain />}>
              <Route index element={<PageHome />} />
              <Route path="/photo/:id" element={<PagePhotoDetails />} />
              <Route path="/components" element={<PageComponents />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>
    </QueryClientProvider>

  );
}
