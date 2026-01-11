import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Engineering from './pages/Engineering';
import Design from './pages/Design';

// Engineering project pages
import CoralBot from './pages/engineering/CoralBot';
import RKD from './pages/engineering/RKD';
import RCS from './pages/engineering/RCS';
import Skateboard from './pages/engineering/Skateboard';
import HMTS from './pages/engineering/HMTS';
import Drone from './pages/engineering/Drone';
import LidarMount from './pages/engineering/LidarMount';

// Design project pages
import Live25 from './pages/design/Live25';
import BlueHome from './pages/design/BlueHome';
import BraveNewWorld from './pages/design/BraveNewWorld';
import CharcoalFoot from './pages/design/CharcoalFoot';
import ClothStudy from './pages/design/ClothStudy';
import EnjoyLittleThings from './pages/design/EnjoyLittleThings';
import Longboard from './pages/design/Longboard';
import MarinePollution from './pages/design/MarinePollution';
import SnailStudy from './pages/design/SnailStudy';
import Typography from './pages/design/Typography';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/engineering" element={<Engineering />} />
          <Route path="/design" element={<Design />} />

          {/* Engineering projects */}
          <Route path="/engineering/coralbot" element={<CoralBot />} />
          <Route path="/engineering/rkd" element={<RKD />} />
          <Route path="/engineering/rcs" element={<RCS />} />
          <Route path="/engineering/skateboard" element={<Skateboard />} />
          <Route path="/engineering/hmts" element={<HMTS />} />
          <Route path="/engineering/drone" element={<Drone />} />
          <Route path="/engineering/lidar-mount" element={<LidarMount />} />

          {/* Design projects */}
          <Route path="/design/25live" element={<Live25 />} />
          <Route path="/design/blue-home" element={<BlueHome />} />
          <Route path="/design/brave-new-world" element={<BraveNewWorld />} />
          <Route path="/design/charcoal-foot" element={<CharcoalFoot />} />
          <Route path="/design/cloth-study" element={<ClothStudy />} />
          <Route path="/design/enjoy-little-things" element={<EnjoyLittleThings />} />
          <Route path="/design/longboard" element={<Longboard />} />
          <Route path="/design/marine-pollution" element={<MarinePollution />} />
          <Route path="/design/snail-study" element={<SnailStudy />} />
          <Route path="/design/typography" element={<Typography />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
