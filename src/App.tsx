import { Routes, Route, Navigate } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/index.html" element={<Navigate to="/" replace />} />
  <Route path="*" element={<NotFound />} />
</Routes>
