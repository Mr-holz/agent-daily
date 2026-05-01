import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { HomePage } from "@/pages/HomePage"
import { DailyListPage, DailyDetailPage } from "@/pages/DailyPages"
import { TutorialListPage, TutorialDetailPage } from "@/pages/TutorialPages"
import { ToolsPage } from "@/pages/ToolsPage"
import { WeeklyListPage, WeeklyDetailPage } from "@/pages/WeeklyPages"
import { AboutPage, SubscribePage } from "@/pages/AboutPages"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/daily" element={<DailyListPage />} />
          <Route path="/daily/:id" element={<DailyDetailPage />} />
          <Route path="/tutorials" element={<TutorialListPage />} />
          <Route path="/tutorials/:id" element={<TutorialDetailPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/weekly" element={<WeeklyListPage />} />
          <Route path="/weekly/:id" element={<WeeklyDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
