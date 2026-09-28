/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Prices } from './pages/Prices';
import { Packages } from './pages/Packages';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Budget } from './pages/Budget';
import { RoiCalculator } from './pages/RoiCalculator';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Services />} />
          <Route path="precos" element={<Prices />} />
          <Route path="pacotes" element={<Packages />} />
          <Route path="simulador" element={<RoiCalculator />} />
          <Route path="calculadora-roi" element={<RoiCalculator />} />
          <Route path="sobre" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="orcamento" element={<Budget />} />
          <Route path="termos" element={<div className="container mx-auto px-4 py-32 max-w-3xl min-h-[60vh]"><h1 className="text-4xl font-heading font-bold mb-4">Termos de Uso</h1><p className="text-gray-400">Disponível em breve.</p></div>} />
          <Route path="privacidade" element={<div className="container mx-auto px-4 py-32 max-w-3xl min-h-[60vh]"><h1 className="text-4xl font-heading font-bold mb-4">Política de Privacidade</h1><p className="text-gray-400">Disponível em breve.</p></div>} />
          <Route path="*" element={<div className="container mx-auto px-4 py-32 text-center min-h-[60vh]"><h1 className="text-4xl font-heading font-bold mb-4">Página não encontrada</h1><p>A página que você procurava não existe.</p></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
